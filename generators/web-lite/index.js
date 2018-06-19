const genGenerator = require( "../generator-factory" );

module.exports = genGenerator( { long: "node webapp (lite)", short: "app" }, {
  folders   : [ "public", "src", "src/bundles", "src/js", "src/pug", "src/scss", "logs" ],
  dotfiles  : [ "gitignore" ],
  files     : [ "app.js", "error-handlers.js", "user-model.js", "webpack.config.js", "src/bundles/welcome.bundle.js", "src/js/welcome.js", "src/scss/welcome.scss", "src/scss/_vars.scss", "src/scss/layout.scss", "src/pug/login.pug", "src/pug/register.pug", "src/pug/error.pug", "logs/utils.js", "logs/logger.js", "public/favicon.ico" ],
  insertName: [ "routes.js", "src/pug/layout.pug", "src/pug/welcome.pug", "test.js", "vars.env" ],
  insert    : [
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
  ],
} );
