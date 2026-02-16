const http = require('http');
const app = require('./app');
const config = require('./config');
const logger = require('./config/logger');

const server = http.createServer(app);

// ── Start Server ──────────────────────
server.listen(config.port, () => {
  logger.info(`Server running on port ${config.port} in ${config.env} mode`);
  logger.info(`Health check: http://localhost:${config.port}/api/v1/health`);
});

// ── Handle server errors ──────────────
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    logger.error(`Port ${config.port} is already in use`);
    process.exit(1);
  }
  logger.error('Server error:', error);
});

// ── Graceful Shutdown ─────────────────
const gracefulShutdown = (signal) => {
  logger.info(`${signal} received. Starting graceful shutdown...`);

  server.close((err) => {
    if (err) {
      logger.error('Error during server close:', err);
      process.exit(1);
    }

    logger.info('Server shut down gracefully.');
    process.exit(0);
  });

  // Force shutdown after 10 seconds if graceful shutdown fails
  setTimeout(() => {
    logger.error('Forced shutdown — could not close connections in time.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// ── Handle uncaught exceptions ────────
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', reason);
  process.exit(1);
});

module.exports = server;

