const path = require( "path" );
const assert = require( "yeoman-assert" );
const helpers = require( "yeoman-test" );

/* globals describe it beforeEach */

describe( "gerator-boilerplate:app", () => {
  beforeEach( () => helpers
    .run( path.join( __dirname, "./app" ) )
    .withPrompts( { someAnswer: true } ) );

  it( "creates files", () => {
    assert.file( [ ".travis.yml", ".gitignore", ".npmrc", "index.js", "licence", "test.js", "readme.md", "package.json" ] );
  } );
} );

