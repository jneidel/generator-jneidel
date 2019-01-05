const dotenv = require( "dotenv" );
const fs = require( "fs" );
const logger = require( "../logs/error-logger" );

if ( fs.existsSync( ".env" ) ) {
  logger.debug( "Using .env file to supply config environment variables" );
  dotenv.config( { path: ".env" } );
} else {
  logger.debug( "Using .env.example file to supply config environment variables" );
  dotenv.config( { path: ".env.example" } ); // Fallback if no own .env file exists
}

if ( !process.env.SESSION_SECRET ) {
  logger.error( "No client secret. Set SESSION_SECRET environment variable." );
  process.exit();
}

if ( !process.env.MONGODB_URI ) {
  logger.error( "No mongo connection string. Set MONGODB_URI environment variable." );
  process.exit();
}

exports = {
  ENVIRONMENT   : process.env.NODE_ENV,
  SESSION_SECRET: process.env.SESSION_SECRET,
  MONGODB_URI   : process.env.MONGODB_URI,
  PORT          : process.env.PORT || 8000,
};

