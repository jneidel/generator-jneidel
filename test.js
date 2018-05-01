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
      assert.file( [ ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "index.js", "license", "test.js", "readme.md", "package.json", "todo.md" ] );
    } );
  } );

  describe( "jneidel:chrome", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/chrome" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "webpack.config.js", "license", "vars.env", "readme.md", "package.json", "todo.md", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js", "src/pug/options.pug", "test/test.test.js", "dist/manifest.json" ] );
    } );
  } );

  describe( "jneidel:web", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/web" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ "license", "readme.md", ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "models/reserved-usernames.js", "models/User.js", "models/passport.js", "routes/api.js", "routes/auth.js", "src/bundles/welcome.bundle.js", "src/js/welcome.js", "src/scss/welcome.scss", "src/scss/_vars.scss", "src/scss/layout.scss", "src/pug/login.pug", "src/pug/register.pug", "test/unit/utils.js", "webpack.config.js", "todo.md", "app.js", "logs/utils.js", "logs/logger.js", "public/img/favicon.ico", "handlers/errorHandlers.js", "src/pug/error.pug", "routes/index.js", "src/pug/layout.pug", "src/pug/welcome.pug", "test/unit/test.test.js", "vars.env" ] );
    } );
  } );

  describe( "jneidel:static", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/static" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".npmrc", ".editorconfig", "webpack.config.js", "license", "vars.env", "vars.env.example", "readme.md", "package.json", "todo.md", "src/js/index.js", "src/scss/index.scss", "src/bundles/index.bundle.js", "src/pug/index.pug", "test.js" ] );
    } );
  } );
} );
