const logger = require('../logger');

const logMiddleware = (req, res, next) => {
  const message = `${req.method} url: ${
    req.url
  }; query parameters: ${JSON.stringify(req.query)}; body: ${JSON.stringify(
    req.body
  )}`;
  logger.info(message);
  next();
};

module.exports = logMiddleware;
