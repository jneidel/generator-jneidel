const path = require( "path" );
const { genScss, pug, babel } = require( "setup-webpack" );

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

const scss = genScss( `../css/${name}.css` );

config.push( {
  mode  : prod ? "production" : "development",
  entry : `./src/bundles/${name}.bundle.js`,
  output: {
    path    : path.resolve( __dirname, "dist/js" ),
    filename: `${name}.js`,
  },
  module: {
    rules: prod ?
      [ babel, scss.rule, pug( `../html/${name}.html` ) ] :
      [ scss.rule, pug( `../html/${name}.html` ) ],
  },
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

  config.push( {
    mode  : prod ? "production" : "development",
    entry : `./src/bundles/${name}.bundle.js`,
    output: {
      path    : path.resolve( __dirname, "dist/js" ),
      filename: `${name}.js`,
    },
    module: {
      rules: prod ?
        [ babel, scss.rule, pug( `../html/${name}.html` ) ] :
        [ scss.rule, pug( `../html/${name}.html` ) ],
    },
    plugins     : [ scss.plugin ],
    optimization: {
      minimize : true,
      minimizer: [ scss.minimizer ],
    },
  } );
} );
*/

module.exports = config;
