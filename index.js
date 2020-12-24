/**
 * Part of vue-cli-plugin-node-env project.
 *
 * @copyright  Copyright (C) 2020 .
 * @license    __LICENSE__
 */

const chalk = require('chalk');

module.exports = (api, options) => {
  if (options.pluginOptions
    && options.pluginOptions.showEnv
    && Array.isArray(options.pluginOptions.showEnv)) {
    console.log();
    console.log(chalk.yellow('ENVIRONMENT VALUES'));

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
  build: process.env.NODE_ENV || 'production',
  serve: process.env.NODE_ENV || 'development',
};
