const genGenerator = require( "../generator-factory" );

module.exports = genGenerator( { long: "cli", short: "cli" }, {
  folders   : [ "test", "bin", "lib" ],
  dotfiles  : [ "gitignore" ],
  files     : [ "lib/index.js", "lib/log.js", "test/index.test.js" ],
  insertName: [ "lib/commands.js" ],
  insert    : [
    [ "readme.md", [ "moduleName", "authorName", "authorUrl", "username", "description", "codestyle" ] ],
    [ "bin/cli.js", [ "moduleName", "username", "description" ] ],
  ],
} );
