const meow = require( "meow" );

const lib = require( "../lib" );
const log = require( "../lib/log" );
const commands = require( "../lib/commands" );

/* Cli entry point */

const cli = meow( `
  Usage
    $ <%= moduleName %>

  Commands
    update this
    check  that


  Options
    --out, -o   Set
    --micro, -m Micro

  Examples
    $ <%= moduleName %>
    =>

    $ <%= moduleName %>
    =>

  For the documentation please refer to:
  https://github.com/<%= username %>/<%= moduleName %>

`, {
    description: "<%= moduleName %>: <%= description %>",
    flags      : {
      out: {
        alias  : "o",
        type   : "string",
        default: "",
      },
      micro: {
        alias  : "m",
        type   : "boolean",
        default: false,
      },
    },
  }
);

// Clean up input
const args = cli.flags;
args._ = cli.input;

// Cli requires command
if ( args._.length === 0 ) {
  log.printPrompt( "Specify '--help' for available commands" );
  process.exit();
}

// Flag requires parameter
[ { name: "out", val: args.out } ].forEach( arg => {
  if ( arg.val === "" ) {
    log.printPrompt( `The '--${arg.name}' flag requires a parameter. Specify '--help' for available commands` );
    process.exit();
  }
} );

// Parse commands
switch ( args._[0] ) {
  case "config":
    commands.config( args );
    break;
  default: // <%= moduleName %>
    commands.<%= moduleName %>( args );
}

process.on( "unhandledRejection", ( err ) => { throw err; } );

