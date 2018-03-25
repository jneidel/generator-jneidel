const { test } = require( "ava" );
const sinon = require( "sinon" );
require( "sinon-mongoose" );
const mockery = require( "mockery" );
mockery.enable( { warnOnUnregistered: false, warnOnReplace: false } );

const { generateArgs, expectResJson } = require( "./utils" );

const next = () => {};

test( "${moduleName}", ( t ) => {

} );
