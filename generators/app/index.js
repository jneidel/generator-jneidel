const genGenerator = require( "../generator-factory" );

module.exports = genGenerator( { long: "node module", short: "module" }, {
  dotfiles  : [ "gitignore" ],
  files     : [ "index.js" ],
  insertName: [ "test.js" ],
  insert    : [
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
  ],
} );
