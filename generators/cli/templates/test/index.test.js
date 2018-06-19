const test = require( "ava" );

/*
const mockery = require( "mockery" );

mockery.enable( { warnOnUnregistered: false, warnOnReplace: false } );
mockery.registerMock( "fs", {
  open : () => {},
  write: () => {},
} );
*/

const lib = require( "../lib" );

// lib.
test( "... [unit]", t => {

} );

// lib.
test( "", t =>
  lib().then( res => t.is( res, "" ) )
);
