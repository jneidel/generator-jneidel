const path = require( "path" );
const { genScss, babel, uglify, browserSync, polyfill } = require( "setup-webpack" );

require( "dotenv" ).config( { path: "vars.env" } );

const prod = process.env.NODE_ENV === "production";

const sync = browserSync( 8000, 8080 );

const config = [];

[ "welcome" ].forEach( ( name ) => {
  const scss = genScss( `../css/${name}.css` );

  const entryPath = `./src/bundles/${name}.bundle.js`;
  const entry = prod ? polyfill( entryPath ) : entryPath;

  config.push( {
    entry,
    output: {
      path    : path.resolve( __dirname, "public/js" ),
      filename: `${name}.js`,
    },
    module: {
      loaders: prod ?
        [ babel, scss.loader ] :
        [ scss.loader ],
    },
    plugins: prod ?
      [ uglify, scss.plugin ] :
      [ scss.plugin, sync ],
  } );
} );

module.exports = config;
