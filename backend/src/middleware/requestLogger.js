const morgan = require('morgan');
const logger = require('../config/logger');

// Custom Morgan token for request ID
morgan.token('request-id', (req) => req.requestId || '-');

// Custom format string
const format = ':request-id :method :url :status :res[content-length] - :response-time ms';

// Stream Morgan output to Winston
const stream = {
  write: (message) => {
    const trimmed = message.trim();
    // Extract status code to determine log level
    const statusMatch = trimmed.match(/\s(\d{3})\s/);
    const status = statusMatch ? parseInt(statusMatch[1], 10) : 200;

    if (status >= 500) {
      logger.error(trimmed);
    } else if (status >= 400) {
      logger.warn(trimmed);
    } else {
      logger.info(trimmed);
    }
  },
};

const requestLogger = morgan(format, { stream });

module.exports = requestLogger;

