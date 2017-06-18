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
<<<<<<< HEAD
    ],
    props => {
      this.appName = props.appName;
      this.appDescription = props.appDescription;

      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('babelrc', '.babelrc');
      this.template('webpack.config.js');
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.directory('build', 'build');
      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();
=======
    ])
    .then(answers => {
      this.props.appName = answers.appName;
      this.props.appDescription = answers.appDescription;
>>>>>>> b93faf266580f7adcc2c02c4b2b349e793d819d6
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
      this.templatePath('.gitignore'),
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
