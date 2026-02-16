/**
 * Wraps an async controller function to automatically catch errors
 * and forward them to the Express error handler via next().
 * Eliminates the need for try-catch blocks in every controller.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;

