const genGenerator = require( "../generator-factory" );

module.exports = genGenerator( { long: "static website", short: "site" }, {
  folders   : [ "dist", "src", "src/js", "src/scss", "src/pug", "src/bundles" ],
  dotfiles  : [ "gitignore" ],
  files     : [ "webpack.config.js", "vars.env", "vars.env.example", "src/js/index.js", "src/scss/index.scss", "src/bundles/index.bundle.js", "test.js" ],
  insertName: [ "src/pug/index.pug" ],
  insert    : [
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
  ],
} );
