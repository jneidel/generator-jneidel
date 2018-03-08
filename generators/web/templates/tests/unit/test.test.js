const expect = require( "expect" );
const sinon = require( "sinon" );
const mockery = require( "mockery" );
mockery.enable( { warnOnUnregistered: false, warnOnReplace: false } );

const { generateArgs, expectResJson } = require( "./utils" );

const next = () => {};

/* global describe it xit */

describe( "<%= moduleName %>", () => {
  xit( "", () => {

  } );
} );
