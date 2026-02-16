const logger = require('../config/logger');
const config = require('../config/index');

/**
 * Centralized error handling middleware.
 * - Logs full error details (including stack trace) via Winston
 * - Returns clean JSON response to client
 * - In production: hides internal error details
 * - In development: includes stack trace
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  // Log the error with request context
  const logMeta = {
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    statusCode,
  };

  if (statusCode >= 500) {
    logger.error(`${err.message}`, { ...logMeta, stack: err.stack });
  } else {
    logger.warn(`${err.message}`, logMeta);
  }

  // Build response
  const response = {
    success: false,
    status,
    message: err.message || 'Internal Server Error',
    requestId: req.requestId,
  };

  // Include stack trace in development only
  if (config.isDev) {
    response.stack = err.stack;
  }

  // Handle specific error types
  if (err.name === 'ValidationError') {
    response.message = 'Validation Error';
    response.errors = err.errors;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;

