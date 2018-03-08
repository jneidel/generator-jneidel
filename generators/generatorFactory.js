const Generator = require( "yeoman-generator" );
const mkdir = require( "make-dir" );
const path = require( "path" );
const chalk = require( "chalk" );
const { genPrompts, genCodestyleOption, genStyleBadge } = require( "./utils.js" );

module.exports = function genGenerator( wording, write ) {
  /**
   * Factory for generating a generator
   * @param {object}    wording           - Describes what kind of application it is
   * @param {string}    wording.long      - Full descriptor - 'node module'
   * @param {string}    wording.short     - Short descriptor - 'module'
   * @param {object}    write             - Files to write
   * @param {string[]} [write.folders]    - Folders to be written
   * @param {string[]}  write.dotfiles    - Dotfiles to be written
   * @param {string[]}  write.files Files - to be written
   * @param {string[]} [write.insertName] - files to be written with moduleName
   * @param {array[]}   write.insert      - Files with properties to be written with
   * @param {string}    write.insert[0]   - Filename
   * @param {string[]}  write.insert[1]   - Properties
   */

  return class extends Generator {
    constructor( a, b ) {
      super( a, b );

      genCodestyleOption.apply( this );
    }

    prompting() {
      this.log( `${chalk.green( "❯" )} Generating ${wording.long} boilerplate` );

      const prompts = genPrompts.apply( this, [ wording.short ] );

      return this.prompt( prompts ).then( ( props ) => { this.props = props; } );
    }

    prepare() {
      this.props.codestyle = this.props.codestyle ? genStyleBadge( this.props.codestyle ) : "";
    }

    async writing() {
      const cp = ( from, to ) => this.fs.copy( this.templatePath( from ), this.destinationPath( to ) );
      const cpTpl = ( from, to, options ) => this.fs.copyTpl( this.templatePath( from ), this.destinationPath( to ), options );

      const { authorName, authorEmail, authorUrl, moduleName, username, description, codestyle } = this.props;

      function genTemplateProps( props ) {
        const result = {};

        props.forEach( ( item ) => {
          switch ( item ) {
            case "authorName" :
              result.authorName = authorName;
              break;
            case "authorEmail":
              result.authorEmail = authorEmail;
              break;
            case "authorUrl":
              result.authorUrl = authorUrl;
              break;
            case "moduleName":
              result.moduleName = moduleName;
              break;
            case "username":
              result.username = username;
              break;
            case "description":
              result.description = description;
              break;
            case "codestyle":
              result.codestyle = codestyle;
              break;
            case "year":
              result.year = new Date().getFullYear();
          }
        } );

        return result;
      }

      // Folders
      if ( write.folders ) {
        write.folders.forEach( async ( item ) => { await mkdir( this.destinationPath( item ) ); } );
      }

      // Dotfiles
      write.dotfiles.forEach( item => cp( item, `.${item}` ) );

      // Unchanged files
      write.files.forEach( item => cp( item, item ) );

      // Insert moduleName
      if ( write.insertName ) {
        write.insertName.forEach( item => cpTpl( item, item, { moduleName } ) );
      }

      // Insert various variables
      write.insert.forEach( item => cpTpl( item[0], item[0], genTemplateProps( item[1] ) ) );

      cpTpl( "_package.json", "package.json", { moduleName, authorName, username, authorEmail, description, authorUrl } );
    }

    git() {
      this.spawnCommandSync( "git", [ "init" ] );
    }

    _install() {
      this.npmInstall();
    }
  };
};
