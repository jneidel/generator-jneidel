const { createLogger, transports, format } = require( "winston" );

const logger = createLogger( {
  level      : "info",
  format     : format.json(),
  defaultMeta: { service: "user-service" },
  transports : [
    new transports.File( { filename: "logs/error.log", level: "error" } ),
    new transports.File( { filename: "logs/combined.log" } ),
  ],
  exceptionHandlers: [
    new transports.File( { filename: "logs/exceptions.log" } ),
  ],
} );

if ( process.env.NODE_ENV !== "production" ) {
  logger.add( new transports.Console( {
    format  : format.simple(),
    level   : "error",
    colorize: true,
  } ) );

  logger.debug( "Logging initialized at debug level" );
}

module.exports = logger;

