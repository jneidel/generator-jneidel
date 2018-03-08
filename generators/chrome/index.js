const genGenerator = require( "../generatorFactory" );

module.exports = genGenerator( { long: "chrome extension", short: "extension" }, {
  folders   : [ "dist", "dist/img", "src", "src/js", "src/scss", "src/pug", "src/bundles", "tests" ],
  dotfiles  : [ "travis.yml", "gitignore", "npmrc", "editorconfig" ],
  files     : [ "webpack.config.js", "todo.md", "vars.env", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js" ],
  insertName: [ "src/pug/options.pug", "tests/test.js" ],
  insert    : [
    [ "licence", [ "authorName", "authorEmail", "authorUrl", "year" ] ],
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
    [ "dist/manifest.json", [ "moduleName", "description" ] ] ],
} );
