const rateLimit = require('express-rate-limit');
const ApiError = require('../utils/ApiError');

// Global rate limiter: 100 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
  handler: (req, res, next, options) => {
    next(new ApiError(429, options.message.message));
  },
});

// Strict rate limiter for contact form: 5 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact requests. Please try again after 15 minutes.',
  },
  handler: (req, res, next, options) => {
    next(new ApiError(429, options.message.message));
  },
});

module.exports = { globalLimiter, contactLimiter };

