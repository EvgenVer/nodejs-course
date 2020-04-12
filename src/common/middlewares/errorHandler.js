const logger = require('../logger');
const {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
  NOT_FOUND,
  getStatusText
} = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  let status;
  switch (+err.message) {
    case BAD_REQUEST:
      status = BAD_REQUEST;
      break;
    case NOT_FOUND:
      status = NOT_FOUND;
      break;
    default:
      status = INTERNAL_SERVER_ERROR;
  }
  const message = `${status} ${getStatusText(status)} ${req.method} url: ${
    req.url
  }; query parameters: ${JSON.stringify(req.query)}; body: ${JSON.stringify(
    req.body
  )}`;
  logger.error(message);
  res.status(status).end(getStatusText(status));
};

module.exports = errorHandler;
