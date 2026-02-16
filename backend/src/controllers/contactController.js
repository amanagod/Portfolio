const { validationResult } = require('express-validator');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const emailService = require('../services/emailService');
const logger = require('../config/logger');

const sendMessage = asyncHandler(async (req, res) => {
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map((err) => err.msg);
    throw new ApiError(400, messages.join(', '));
  }

  const { name, email, message } = req.body;

  logger.info(`Contact form submission from ${name} <${email}>`, {
    requestId: req.requestId,
  });

  // Send email
  await emailService.sendContactEmail({ name, email, message });

  logger.info(`Contact email sent successfully for ${name}`, {
    requestId: req.requestId,
  });

  res.status(200).json({
    success: true,
    message: 'Your message has been sent successfully! I will get back to you soon.',
    requestId: req.requestId,
  });
});

module.exports = { sendMessage };

