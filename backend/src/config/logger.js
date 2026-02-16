const winston = require('winston');
const path = require('path');
const config = require('./index');

const logDir = path.join(__dirname, '../../logs');

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, requestId, stack }) => {
    const reqId = requestId ? ` [${requestId}]` : '';
    const stackTrace = stack ? `\n${stack}` : '';
    return `[${timestamp}] [${level.toUpperCase()}]${reqId} ${message}${stackTrace}`;
  })
);

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, requestId }) => {
    const reqId = requestId ? ` [${requestId}]` : '';
    return `[${timestamp}] ${level}${reqId} ${message}`;
  })
);

const transports = [
  // Error log file
  new winston.transports.File({
    filename: path.join(logDir, 'error.log'),
    level: 'error',
    format: logFormat,
    maxsize: 5 * 1024 * 1024, // 5MB
    maxFiles: 5,
  }),
  // Combined log file
  new winston.transports.File({
    filename: path.join(logDir, 'combined.log'),
    format: logFormat,
    maxsize: 10 * 1024 * 1024, // 10MB
    maxFiles: 5,
  }),
];

// Console transport for development
if (config.isDev) {
  transports.push(
    new winston.transports.Console({
      format: consoleFormat,
    })
  );
}

const logger = winston.createLogger({
  level: config.isDev ? 'debug' : 'info',
  transports,
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, 'exceptions.log'),
      format: logFormat,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join(logDir, 'rejections.log'),
      format: logFormat,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;

