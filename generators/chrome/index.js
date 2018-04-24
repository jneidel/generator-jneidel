const genGenerator = require( "../generator-factory" );

module.exports = genGenerator( { long: "chrome extension", short: "extension" }, {
  folders   : [ "dist", "dist/img", "src", "src/js", "src/scss", "src/pug", "src/bundles", "test" ],
  dotfiles  : [ "gitignore" ],
  files     : [ "webpack.config.js", "vars.env", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js" ],
  insertName: [ "src/pug/options.pug", "test/test.test.js" ],
  insert    : [
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
    [ "dist/manifest.json", [ "moduleName", "description" ] ],
  ],
} );
