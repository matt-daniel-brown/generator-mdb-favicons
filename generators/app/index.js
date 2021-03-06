'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

// =============================================================================

module.exports = class extends Generator {
  // ---------------------------------------------------------------------------
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the best ' + chalk.red('generator-mdb-favicons') + ' generator!')
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'placeInSubdirectory',
        message:
          'Place the favicon files inside a subdirectory named "favicon", at project root?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  // ---------------------------------------------------------------------------
  writing() {
    if (this.props.placeInSubdirectory === true) {
      this.fs.copy(this.templatePath('favicon/'), this.destinationPath('favicon/'));
    } else {
      this.fs.copy(this.templatePath('favicon/'), this.destinationPath('./'));
    }
  }

  // ---------------------------------------------------------------------------
  install() {
    // This.installDependencies();
  }
};
