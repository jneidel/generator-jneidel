const lib = require( "../lib" );
const log = require( "../lib/log" );

/* Functions for parsing cli commands */

function config( args ) {
  checkForUpdate();
}

function <%= moduleName %>( args ) {

}

function checkForUpdate() {
  /* eslint-disable global-require */
  const updateCheck = require( "update-check" );
  const pkg = require( "../package.json" );

  updateCheck( pkg )
    .then( update => {
      if ( update )
        log.promptConsole( `A new version of <%= moduleName %> is available: current ${pkg.version}, latest ${update.latest}` );
    } )
    .catch( err => {
      if ( err.code !== "ENOTFOUND" )
        log.print( err.message, { err } );
    } );
}

module.exports = {
  config,
  <%= moduleName %>
};

