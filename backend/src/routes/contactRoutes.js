const express = require('express');
const contactController = require('../controllers/contactController');
const { contactValidationRules } = require('../validators/contactValidator');
const { contactLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/',
  contactLimiter,
  contactValidationRules,
  contactController.sendMessage
);

module.exports = router;

