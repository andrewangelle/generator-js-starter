'use strict';
const path = require('path');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    return this.prompt([
      {
        type    : 'input',
        name    : 'appName',
        message : 'Your project name',
        default : this.appname
      },
      {
        type    : 'input',
        name    : 'appDescription',
        message : 'Your project description'
      }
    ])
    .then(answers => {
      this.props.appName = answers.appName;
      this.props.appDescription = answers.appDescription;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );

    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
  }

  install() {
    this.spawnCommand('npm', ['install']);
  }
};
