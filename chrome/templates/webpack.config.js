const path = require( "path" );
const { genScss, genPug, babel, uglify, minify } = require( "setup-webpack" );

require( "dotenv" ).config( { path: "vars.env" } );

const prod = process.env.NODE_ENV === "prod";

const config = [ {
  entry : `./src/js/background.js`,
  output: {
    path    : path.resolve( __dirname, "dist/js" ),
    filename: "background.js",
  },
  module : { loaders: prod ? [ babel ] : [] },
  plugins: prod ? [ minify, uglify ] : [],
} ];

// Extension has only a single page

const name = "options"; // site name

const scss = genScss( `../css/${name}.css` );
const pug = genPug( `../html/${name}.html` );

config.push( {
  entry : `./src/bundles/${name}.bundle.js`,
  output: {
    path    : path.resolve( __dirname, "dist/js" ),
    filename: `${name}.js`,
  },
  module: {
    loaders: prod ?
      [ babel, scss.loader, pug.loader ] :
      [ scss.loader, pug.loader ],
  },
  plugins: prod ?
    [ minify, uglify, scss.plugin, pug.plugin ] :
    [ scss.plugin, pug.plugin ],
} );

/*
// Extension has multiple pages

// Array of sites
[ "options", "help" ].forEach( ( name ) => {
  const scss = genScss( `../css/${name}.css` );
  const pug = genPug( `../html/${name}.html` );

  config.push( {
    entry : `./src/bundles/${name}.bundle.js`,
    output: {
      path    : path.resolve( __dirname, "dist/js" ),
      filename: `${name}.js`,
    },
    module: {
      loaders: prod ?
        [ babel, scss.loader, pug.loader ] :
        [ scss.loader, pug.loader ],
    },
    plugins: prod ?
      [ minify, uglify, scss.plugin, pug.plugin ] :
      [ scss.plugin, pug.plugin ],
  } );
} );
*/

module.exports = config;
