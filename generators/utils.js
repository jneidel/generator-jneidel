const normalizeUrl = require( "normalize-url" );
const isScoped = require( "is-scoped" );
const _s = require( "underscore.string" );
const slugifyPackageName = name => ( isScoped( name ) ? name : _s.slugify( name ) );

/*
 * Utilities/building blocks for generator creation
 */

// Prompts

exports.genPrompts = function genPrompts( type ) {
  return [ // Type specifies what type of application: module, app, extension, etc
    {
      type   : "input",
      name   : "moduleName",
      message: `What do you want to name your ${type} ?`,
      default: _s.slugify( this.appname ),
      filter : x => slugifyPackageName( x ),
    },
    {
      type   : "input",
      name   : "description",
      message: `What is the ${type}'s description?`,
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
    {
      type   : "input",
      name   : "codestyle",
      message: "What is the URL for your 'code style custom' badge?",
      store  : true,
      when   : () => this.options.codestyle !== undefined,
      filter : x => normalizeUrl( x ),
    },
  ];
};

// Options

exports.genCodestyleOption = function genCodestyleOption() {
  return this.option( "codestyle", {
    desc: "Activate option to set link for the 'code style custom' badge",
  } );
};

exports.genStyleBadge = link => `[![Code Style Custom](https://img.shields.io/badge/code%20style-custom-ff69b4.svg?style=flat-square)](${link})`;
