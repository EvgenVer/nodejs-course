const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./common/logger');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process.on('uncaughtException', error => {
  logger.error(`Uncaught Exception: ${error.message}`);
});

process.on('unhandledRejection', reason => {
  logger.error(`Unhandled Rejection: ${reason.message}`);
});
