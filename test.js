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
      assert.file( [ ".travis.yml", ".gitignore", ".editorconfig", "index.js", "license", "test.js", "readme.md", "package.json", "todo.md" ] );
    } );
  } );

  describe( "jneidel:chrome", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/chrome" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".editorconfig", "webpack.config.js", "license", "vars.env", "readme.md", "package.json", "todo.md", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js", "src/pug/options.pug", "test/test.test.js", "dist/manifest.json" ] );
    } );
  } );

  describe( "jneidel:web", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/web" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ "license", "readme.md", ".travis.yml", ".gitignore", ".editorconfig", "models/reserved-usernames.js", "models/User.js", "models/passport.js", "routes/api.js", "routes/auth.js", "src/bundles/welcome.bundle.js", "src/js/welcome.js", "src/scss/welcome.scss", "src/scss/_vars.scss", "src/scss/layout.scss", "src/pug/login.pug", "src/pug/register.pug", "test/unit/utils.js", "webpack.config.js", "todo.md", "app.js", "logs/utils.js", "logs/logger.js", "public/favicon.ico", "handlers/errorHandlers.js", "src/pug/error.pug", "routes/index.js", "src/pug/layout.pug", "src/pug/welcome.pug", "test/unit/test.test.js", "vars.env", "vars.env.example" ] );
    } );
  } );

  describe( "jneidel:static", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/static" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".editorconfig", "webpack.config.js", "license", "vars.env", "vars.env.example", "readme.md", "package.json", "todo.md", "src/js/index.js", "src/scss/index.scss", "src/bundles/index.bundle.js", "src/pug/index.pug", "test.js" ] );
    } );
  } );

  describe( "jneidel:cli", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/cli" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".editorconfig", "license", "lib/index.js", "lib/log.js", "test/index.test.js", "lib/commands.js", "bin/cli.js", "readme.md" ] );
    } );
  } );

  describe( "jneidel:web-lite", () => {
    beforeEach( () => helpers
      .run( path.join( __dirname, "./generators/web-lite" ) )
      .withPrompts( { someAnswer: true } ) );

    it( "creates files", () => {
      assert.file( [ ".travis.yml", ".gitignore", ".editorconfig", "license", "readme.md", "app.js", "error-handlers.js", "user-model.js", "webpack.config.js", "src/bundles/welcome.bundle.js", "src/js/welcome.js", "src/scss/welcome.scss", "src/scss/_vars.scss", "src/scss/layout.scss", "src/pug/login.pug", "src/pug/register.pug", "src/pug/error.pug", "logs/utils.js", "logs/logger.js", "public/favicon.ico", "routes.js", "src/pug/layout.pug", "src/pug/welcome.pug", "test.js", "vars.env", "vars.env.example" ] );
    } );
  } );
} );
