const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const userService = require('../resources/users/user.service');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    console.log("we're connected");
    db.dropDatabase();
    await userService.postUser({
      name: 'admin',
      login: 'admin',
      password: 'admin'
    });
    cb();
  });
};

module.exports = { connectToDB };
