import { createLogger, format, transports } from 'winston' ;

const customFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message, ...meta }) => {
      return `${timestamp} ${level}: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
    })
  );
const logger = createLogger({
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    },
    level: 'info', // Set the default log level
    format: customFormat,
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'app.log' }),
      new transports.File({ filename: 'error.log', level: 'error' })
    ]
  });
  
export  {logger};