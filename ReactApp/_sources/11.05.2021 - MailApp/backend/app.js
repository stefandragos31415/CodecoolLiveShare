const express = require('express');
const storage = require('./services/storage');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('./services/authentication');
const configuration = require('./configuration');
const app = express();

app.use(cookieParser());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,UPDATE,OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function login(req, res) {
  const user = storage.db
    .get('users')
    .find(
      (user) =>
        user.mail === req.body.mail && user.password === req.body.password
    )
    .value();
  if (!user) {
    return res.sendStatus(401);
  }
  const token = auth.generateAccessToken(user.mail);
  res.cookie('token', token, {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    secure: false,
  });
  res.cookie('user', user.mail, {
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
    secure: false,
  });
  res.send();
}

app.post('/register', (req, res) => {
  if (
    storage.db
      .get('users')
      .find((user) => user.mail === req.body.mail)
      .value()
  ) {
    return res.sendStatus(409);
  }
  const id = storage.generateId('users');
  const newUser = storage.db
    .get('users')
    .push({
      id: id,
      mail: req.body.mail,
      password: req.body.password,
    })
    .write();
  login(req, res);
});

app.post('/login', (req, res) => {
  login(req, res);
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('user');
  res.send(true);
});

app.get('/mails', auth.authenticateToken, (req, res) => {
  const allMails = storage.db.get('mails').value();
  const filteredMail = allMails.filter((item) => {
    return item.to === req.user;
  });
  res.send(filteredMail);
});

app.post('/mails', auth.authenticateToken, (req, res) => {
  const id = storage.generateId('mails');
  const newMail = storage.db
    .get('mails')
    .push({
      id: id,
      title: req.body.subject,
      text: req.body.text,
      from: req.user,
      to: req.body.to,
    })
    .write();
  res.send(true);
});

app.delete('/mails/:id', auth.authenticateToken, (req, res) => {
  const response = storage.db
    .get('mails')
    .remove((item) => {
      return item.id === parseInt(req.params.id);
    })
    .write();
  res.send(response);
});

app.listen(configuration.PORT, () => {
  console.log(`Listening at http://localhost:${configuration.PORT}`);
});
