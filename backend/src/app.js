const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const requestId = require('./middleware/requestId');
const requestLogger = require('./middleware/requestLogger');
const { globalLimiter } = require('./middleware/rateLimiter');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');
const config = require('./config');

const app = express();

// ───────────────────────────────────────
// 1. Request ID — unique UUID per request
// ───────────────────────────────────────
app.set('trust proxy', 1);
app.use(requestId);

// ───────────────────────────────────────
// 2. Security headers via Helmet
// ───────────────────────────────────────
app.use(helmet());

// ───────────────────────────────────────
// 3. CORS — whitelist frontend origin
// ───────────────────────────────────────
app.use(
  cors({
    origin: config.isDev
      ? '*'
      : [config.frontendUrl],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    credentials: true,
  })
);

// ───────────────────────────────────────
// 4. Compression — gzip responses
// ───────────────────────────────────────
app.use(compression());

// ───────────────────────────────────────
// 5. Body parsers with size limits
// ───────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ───────────────────────────────────────
// 6. Request logging (Morgan + Winston)
// ───────────────────────────────────────
app.use(requestLogger);

// ───────────────────────────────────────
// 7. Global rate limiter
// ───────────────────────────────────────
app.use(globalLimiter);

// ───────────────────────────────────────
// 8. API Routes (/api/v1)
// ───────────────────────────────────────
app.use('/api/v1', routes);

// ───────────────────────────────────────
// 9. 404 handler — unknown routes
// ───────────────────────────────────────
app.use(notFound);

// ───────────────────────────────────────
// 10. Centralized error handler
// ───────────────────────────────────────
app.use(errorHandler);

module.exports = app;

