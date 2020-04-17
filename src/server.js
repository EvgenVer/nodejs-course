const { PORT } = require('./common/config');
const logger = require('./common/logger');
const { connectToDB } = require('./db/db.client');

process.on('uncaughtException', error => {
  logger.error(`Uncaught Exception: ${error.message}`);
});

process.on('unhandledRejection', reason => {
  logger.error(`Unhandled Rejection: ${reason.message}`);
});

const app = require('./app');

// throw Error('Oops!');
// Promise.reject(Error('Oops!'));

connectToDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
