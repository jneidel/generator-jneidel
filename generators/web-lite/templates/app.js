const express = require( "express" );
const mongoose = require( "mongoose" );
const mongodbErrorHandler = require( "mongoose-mongodb-errors" );
const bodyParser = require( "body-parser" );
const sessions = require( "express-session" );
const SessionStore = require( "express-sessions" );
const flash = require( "connect-flash" );
const logger = require( "./logs/logger" );
const errorHandlers = require( "./errorHandlers" );

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

const expires = 1000 * 60 * 60 * 24 * 30; // 30 days
app.use( sessions( {
  secret           : process.env.SECRET,
  key              : "<%= moduleName %>",
  name             : "<%= moduleName %>",
  resave           : false,
  saveUninitialized: false,
  cookie           : {
    maxAge  : expires,
    httpOnly: true,
    secure  : true,
  },
  store: new SessionStore( {
    storage   : "mongodb",
    instance  : mongoose,
    collection: "sessions",
    expire    : expires,
  } ),
} ) );
app.use( flash() );

app.use( ( req, res, next ) => {
  res.locals.flashes = req.flash();
  return next();
} );

app.use( "/", require( "./routes" ) );
app.use( ( req, res ) => { throw new Error(); } );

app.use( errorHandlers.notFound );
app.use( errorHandlers.flashValidationErrors );

if ( NODE_ENV === "dev" ) {
  app.use( errorHandlers.developmentErrors );
} else {
  app.use( errorHandlers.productionErrors );
}

const port = process.env.PORT || 8000;

app.listen( port, () => {
  console.log( `Server running on port ${port}.` ); // eslint-disable-line no-console
} );
