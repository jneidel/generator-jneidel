const genGenerator = require( "../generatorFactory" );

module.exports = genGenerator( { long: "node module", short: "module" }, {
  dotfiles  : [ "gitignore", "npmrc", "editorconfig" ],
  files     : [ "index.js", "todo.md" ],
  insertName: [ "test.js" ],
  insert    : [
    [ "licence", [ "authorName", "authorEmail", "authorUrl", "year" ] ],
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ] ],
} );
