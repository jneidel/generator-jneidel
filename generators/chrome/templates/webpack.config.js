const path = require( "path" );
const { genScss, pug, babel, img, polyfill } = require( "setup-webpack" );

require( "dotenv" ).config( { path: "vars.env" } );

const prod = process.env.NODE_ENV === "prod";

const config = [ {
  mode  : prod ? "production" : "development",
  entry : `./src/js/background.js`,
  output: {
    path    : path.resolve( __dirname, "dist/js" ),
    filename: "background.js",
  },
  module      : { rules: prod ? [ babel ] : [] },
  optimization: {
    minimize: true,
  },
} ];

// Extension has only a single page

const name = "options"; // site name

const entryPath = `./src/bundles/${name}.bundle.js`;
const scss = genScss( `../css/${name}.css` );

const rules = [ scss.rule, scss.font, img( "img" ), pug( `../html/${name}.html` ) ];
if ( prod ) rules.push( babel );

config.push( {
  mode  : prod ? "production" : "development",
  entry : prod ? polyfill( entryPath ) : entryPath,
  output: {
    path    : path.resolve( __dirname, "dist/js" ),
    filename: `${name}.js`,
  },
  module      : { rules },
  plugins     : [ scss.plugin ],
  optimization: {
    minimize : true,
    minimizer: [ scss.minimizer ],
  },
} );

/*
// Extension has multiple pages

// Array of sites
[ "options", "help" ].forEach( ( name ) => {
  const scss = genScss( `../css/${name}.css` );
  const entryPath =  `./src/bundles/${name}.bundle.js`;

  const rules = [ scss.rule, scss.font, img( "img" ), pug( `../html/${name}.html` ) ];
  if ( prod ) rules.push( babel );

  config.push( {
    mode  : prod ? "production" : "development",
    entry : prod ? polyfill( entryPath ) : entryPath,
    output: {
      path    : path.resolve( __dirname, "dist/js" ),
      filename: `${name}.js`,
    },
    module: { rules },
    plugins     : [ scss.plugin ],
    optimization: {
      minimize : true,
      minimizer: [ scss.minimizer ],
    },
  } );
} );
*/

module.exports = config;
