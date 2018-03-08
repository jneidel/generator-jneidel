const path = require( "path" );
const assert = require( "yeoman-assert" );
const helpers = require( "yeoman-test" );

/* globals describe it beforeEach */

describe( "generator-jneidel", () => {
  describe( "jneidel:node", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/app" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "index.js", "licence", "test.js", "readme.md", "package.json", "todo.md" ] );
    } );
  } );

  describe( "jneidel:chrome", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/chrome" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "webpack.config.js", "licence", "vars.env", "readme.md", "package.json", "todo.md", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js", "src/pug/options.pug", "tests/test.js", "dist/manifest.json" ] );
    } );
  } );
} );
