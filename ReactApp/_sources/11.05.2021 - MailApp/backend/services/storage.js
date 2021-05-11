const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);

initDb(db);

function generateId(tableName) {
  let id; 
  try { 
    id = db .get(tableName) 
    .value() 
    .reduce((a, b) => (a.id > b.id ? a : b))
    .id + 1; 
    } catch { id = 1; } 
  return id;
}

function initDb(db) {
  db.defaults({ mails: [], users: [] }).write();
  if (!db.get('mails').size().value()) {
    db.get('mails')
      .push({
        id: 1,
        subject: 'how are you',
        text: 'I am writing from a beach. How are you?',
        from: 'user1@mail.com',
        to: 'user2@mail.com',
      })
      .push({
        id: 2,
        subject: 'what is the time',
        text: 'do you know the time in central pacific ocean time?',
        from: 'user1@mail.com',
        to: 'user2@mail.com',
      })
      .push({
        id: 3,
        subject: 'how much is the fish',
        text: 'do you know the song from scooter ?',
        from: 'user1@mail.com',
        to: 'user2@mail.com',
      })
      .push({
        id: 4,
        subject: 'doing fine',
        text: 'The same as always',
        from: 'user2@mail.com',
        to: 'user1@mail.com',
      })
      .push({
        id: 5,
        subject: 'the time is',
        text: 'relative',
        from: 'user2@mail.com',
        to: 'user1@mail.com',
      })
      .push({
        id: 6,
        subject: 'I only know manele',
        text: 'sad but true...',
        from: 'user2@mail.com',
        to: 'user1@mail.com',
      })
      .write();
  }
  if (!db.get('users').size().value()) {
    db.get('users')
      .push({
        id: 1,
        mail: 'user1@mail.com',
        password: 'lorem1',
      })
      .push({
        id: 2,
        mail: 'user2@mail.com',
        password: 'lorem2',
      })
      .write();
  }
}

module.exports = { db, generateId };
