const { v4: uuidv4 } = require('uuid');

/**
 * Attaches a unique request ID (UUID) to every incoming request.
 * Used for tracing requests through logs.
 */
const requestId = (req, res, next) => {
  req.requestId = req.headers['x-request-id'] || uuidv4();
  res.setHeader('X-Request-Id', req.requestId);
  next();
};

module.exports = requestId;

