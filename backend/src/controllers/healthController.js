const config = require('../config');

const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    environment: config.env,
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString(),
    requestId: req.requestId,
  });
};

module.exports = { getHealth };

