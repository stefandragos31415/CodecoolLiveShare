const jwt = require('jsonwebtoken');
const SECRET = require('../configuration').SECRET;

function authenticateToken(req, res, next) {
  var token = req.cookies.token;
  if (token === undefined) {
    res.status(401).send('You need to be authenticated');
  } else {
    jwt.verify(token, SECRET, (err, payload) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = payload.mail;
      next();
    });
  }
}

function setAccessToken(username) {
  return jwt.sign({ mail: username }, SECRET);
}

module.exports = { authenticateToken, generateAccessToken: setAccessToken };
