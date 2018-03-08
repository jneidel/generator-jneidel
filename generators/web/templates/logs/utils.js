const logger = require( "morgan" );

logger.token( "customDate", () => {
  const date = new Date();

  function prependZero( str, max ) {
    str = String( str );
    if ( str.length !== max ) {
      for ( let i = 0; str.length - max; ) {
        str = `0${str}`;
      }
    }
    return str;
  }

  const day = prependZero( date.getDate(), 2 );
  const month = prependZero( date.getMonth(), 2 );
  const year = date.getFullYear();
  const hour = prependZero( date.getHours(), 2 );
  const min = prependZero( date.getMinutes(), 2 );
  const mil = prependZero( date.getMilliseconds(), 3 );

  return `[${day}/${month}/${year} ${hour}:${min}:${mil}]`;
} );

exports.pattern = ":customDate - :status :method :url - :response-time ms";
exports.patternShort = ":status :method :url - :response-time ms";

exports.filterResources = ( req ) => {
  // Dont log requests to 'public/css|js|img'
  if ( req.url || req.originalUrl ) {
    const url = req.url || req.originalUrl;
    const sub = url.slice( 0, 5 );
    return sub === "/css/" || sub === "/img/" || sub.slice( 0, 4 ) === "/js/";
  }
  return true;
};

exports.filterErrors = ( req, res ) => res.statusCode < 400;
