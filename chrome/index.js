const Generator = require( "yeoman-generator" );
const mkdir = require( "make-dir" );
const path = require( "path" );
const chalk = require( "chalk" );
const _s = require( "underscore.string" );
const isScoped = require( "is-scoped" );
const normalizeUrl = require( "normalize-url" );
const slugifyPackageName = name => ( isScoped( name ) ? name : _s.slugify( name ) );

module.exports = class extends Generator {
  prompting() {
    this.log( `${chalk.green( "❯" )} Generating chrome extension boilerplate` );

    const prompts = [
      {
        type   : "input",
        name   : "moduleName",
        message: "What do you want to name your extension?",
        default: _s.slugify( this.appname ),
			  filter : x => slugifyPackageName( x ),
      },
      {
        type   : "input",
        name   : "description",
        message: "What is the extensions description?",
      },
      {
        type    : "input",
        name    : "username",
        message : "What is your GitHub username?",
        store   : true,
        validate: x => ( x.length > 0 ? true : "You have to provide a username" ),
      },
      {
        type    : "input",
        name    : "authorName",
        message : "What is your full name?",
        store   : true,
        validate: x => ( x.length > 0 ? true : "You have to provide your name" ),
      },
      {
        type    : "input",
        name    : "authorEmail",
        message : "What is your email?",
        store   : true,
        validate: x => ( x.length > 0 ? true : "You have to provide your email" ),
      },
      {
        type   : "input",
        name   : "authorUrl",
        message: "What is your website URL?",
        store  : true,
        filter : x => normalizeUrl( x ),
      },
    ];

    return this.prompt( prompts ).then( ( props ) => { this.props = props; } );
  }

  async writing() {
    await mkdir( this.destinationPath( "dist" ) );
    await mkdir( this.destinationPath( "dist/img" ) );
    await mkdir( this.destinationPath( "src" ) );
    await mkdir( this.destinationPath( "src/js" ) );
    await mkdir( this.destinationPath( "src/scss" ) );
    await mkdir( this.destinationPath( "src/pug" ) );
    await mkdir( this.destinationPath( "src/bundles" ) );
    await mkdir( this.destinationPath( "tests" ) );

    [ "travis.yml", "gitignore", "npmrc" ].forEach( ( item ) => {
      this.fs.copy( this.templatePath( item ), this.destinationPath( `.${item}` ) );
    } );

    [ "webpack.config.js", "todo.md", "vars.env", "dist/img/icon.png", "src/js/background.js", "src/js/options.js", "src/scss/options.scss", "src/bundles/options.bundle.js" ].forEach( ( item ) => {
      this.fs.copy( this.templatePath( item ), this.destinationPath( item ) );
    } );

    const { authorName, authorEmail, authorUrl, moduleName, username, description } = this.props;

    [
      [ "licence", { authorName, authorEmail, authorUrl, year: new Date().getFullYear() } ],
      [ "readme.md", { moduleName, authorName, username, description } ],
      [ "dist/manifest.json", { moduleName, description } ],
      [ "src/pug/options.pug", { moduleName } ],
      [ "tests/test.js", { moduleName } ],
    ].forEach( ( item ) => {
      const name = item[0];
      const options = item[1];

      this.fs.copyTpl( this.templatePath( name ), this.destinationPath( name ), options );
    } );

    this.fs.copyTpl( this.templatePath( "_package.json" ), this.destinationPath( "package.json" ), { moduleName, authorName, username, authorEmail, description, authorUrl } );
  }

  git() {
    this.spawnCommandSync( "git", [ "init" ] );
  }

  _install() {
    this.npmInstall();
  }
};
