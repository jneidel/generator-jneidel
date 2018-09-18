const express = require( "express" );
const mongoose = require( "mongoose" );
const mongodbErrorHandler = require( "mongoose-mongodb-errors" );
const bodyParser = require( "body-parser" );
const logger = require( "./logs/logger" );
const errorHandlers = require( "./error-handlers" );

require( "dotenv" ).config( { path: "vars.env" } );
const NODE_ENV = process.env.NODE_ENV;

const app = express();

if ( NODE_ENV === "dev" ) {
  app.use( logger.dev );
} if ( NODE_ENV === "prod" ) {
  app.use( logger.writeErrors );
  app.use( logger.writeRequests );
}

const User = require( "./user-model" );

mongoose.Promise = global.Promise;
mongoose.plugin( mongodbErrorHandler );
mongoose.connect( process.env.MONGO );

app.set( "view engine", "pug" );
app.set( "views", `${__dirname}/src/pug` );

app.use( express.static( `${__dirname}/public` ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.use( "/", require( "./routes" ) );
app.use( ( req, res ) => { throw new Error(); } );

app.use( errorHandlers.notFound );

if ( NODE_ENV === "dev" ) {
  app.use( errorHandlers.developmentErrors );
} else {
  app.use( errorHandlers.productionErrors );
}

const port = process.env.PORT || 8000;

app.listen( port, () => {
  console.log( `Server running on port ${port}` ); // eslint-disable-line no-console
} );
