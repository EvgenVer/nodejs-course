const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');

const users = [
  new User({ name: 'user1', login: 'firstUser', password: '123' }),
  new User({ name: 'user2', login: 'secondUser', password: '456' })
];

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log("we're connected");
    await db.dropDatabase();
    users.forEach(user => user.save());
    cb();
  });
};

module.exports = { connectToDB };
