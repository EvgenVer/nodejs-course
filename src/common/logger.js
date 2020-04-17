const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    /* new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.cli()
      )
    }), */
    new winston.transports.File({
      filename: './src/logs/access.log',
      level: 'info',
      format: winston.format.simple()
    }),
    new winston.transports.File({
      filename: './src/logs/error.log',
      level: 'error',
      format: winston.format.simple()
    })
  ]
});

module.exports = logger;
