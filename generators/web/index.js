const genGenerator = require( "../generatorFactory" );

module.exports = genGenerator( { long: "node webapp", short: "app" }, {
  folders   : [ "controllers", "public", "public/img", "models", "routes", "src", "src/bundles", "src/js", "src/pug", "src/scss", "tests", "tests/unit", "tests/integration", "logs", "handlers" ],
  dotfiles  : [ "travis.yml", "gitignore", "npmrc", "editorconfig" ],
  files     : [ "models/reserved-usernames.js", "models/User.js", "models/passport.js", "routes/api.js", "routes/auth.js", "src/bundles/welcome.bundle.js", "src/js/welcome.js", "src/scss/welcome.scss", "src/scss/_vars.scss", "src/scss/layout.scss", "src/pug/login.pug", "src/pug/register.pug", "tests/unit/utils.js", "webpack.config.js", "todo.md", "app.js", "logs/utils.js", "logs/logger.js", "public/img/favicon.ico", "handlers/errorHandlers.js", "src/pug/error.pug" ],
  insertName: [ "routes/index.js", "src/pug/layout.pug", "src/pug/welcome.pug", "tests/unit/test.test.js", "vars.env" ],
  insert    : [
    [ "licence", [ "authorName", "authorEmail", "authorUrl", "year" ] ],
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ] ],
} );
