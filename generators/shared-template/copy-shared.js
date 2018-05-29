const fs = require( "mz/fs" );
const path = require( "path" );

const readFile = file => fs.readFile( path.resolve( __dirname, file ) );

const writeFile = ( template, file, content ) => {
  const outPath = path.resolve( __dirname, "..", template, "templates", file );
  fs.writeFile( outPath, content );
  console.log( `Wrote: ${outPath}` );
};

const files = [ "editorconfig", "license", "todo.md", "travis.yml" ];
const templates = [ "app", "chrome", "static", "web" ];

templates.forEach( template => {
  files.forEach( async file => {
    const buff = await readFile( file );
    await writeFile( template, file, buff );
  } );
} );

