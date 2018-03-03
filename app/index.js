const Generator = require( "yeoman-generator" );
const mkdirp = require( "mkdirp" );
const path = require( "path" );
const chalk = require( "chalk" );
const _s = require( "underscore.string" );
const isScoped = require( "is-scoped" );
const normalizeUrl = require( "normalize-url" );
const slugifyPackageName = name => ( isScoped( name ) ? name : _s.slugify( name ) );

module.exports = class extends Generator {
  prompting() {
    this.log( `${chalk.green( "❯" )} Generating node-module boilerplate` );

    const prompts = [
      {
        type   : "input",
        name   : "moduleName",
        message: "What do you want to name your module?",
        default: _s.slugify( this.appname ),
			  filter : x => slugifyPackageName( x ),
      },
      {
        type   : "input",
        name   : "description",
        message: "What is your module description?",
      },
      {
        type    : "input",
        name    : "username",
        message : "What is your GitHub username?",
        store   : true,
        validate: x => ( x.length > 0 ? true : "You have to provide a username" ),
      },
      {
        type   : "input",
        name   : "authorName",
        message: "What is your full name?",
        store  : true,
      },
      {
        type   : "input",
        name   : "authorEmail",
        message: "What is your email?",
        store  : true,
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

  writing() {
    [ "travis.yml", "gitignore", "npmrc" ].forEach( ( item ) => {
      this.fs.copy( this.templatePath( item ), this.destinationPath( `.${item}` ) );
    } );

    this.fs.copy( this.templatePath( "index.js" ), this.destinationPath( "index.js" ) );

    const { authorName, authorEmail, authorUrl, moduleName, username, description } = this.props;

    [
      [ "licence", { authorName, authorEmail, authorUrl, year: new Date().getFullYear() } ],
      [ "test.js", { moduleName } ],
      [ "readme.md", { moduleName, authorName, username } ],
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

  install() {
    this.npmInstall();
  }
};
