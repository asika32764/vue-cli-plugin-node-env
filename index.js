/**
 * Part of vue-cli-plugin-node-env project.
 *
 * @copyright  Copyright (C) 2020 .
 * @license    __LICENSE__
 */

const chalk = require('chalk');

module.exports = (api, options) => {
  if (process.env.BUILD_MODE != null) {
    api.service.mode = process.env.BUILD_MODE;
    process.env.NODE_ENV = process.env.BUILD_MODE;
  }

  if (options.pluginOptions
    && options.pluginOptions.showEnv
    && Array.isArray(options.pluginOptions.showEnv)) {
    console.log();
    console.log(chalk.yellow('ENVIRONMENT VARIABLES'));

    for (const env of options.pluginOptions.showEnv) {
      console.log(
        `  ${env}:`,
        chalk.green(process.env[env])
      );
    }

    console.log();
  }
};

module.exports.defaultModes = {
  build: process.env.VUE_CLI_MODE || process.env.NODE_ENV || 'production',
  serve: process.env.VUE_CLI_MODE || process.env.NODE_ENV || 'development',
};
