# Vue/CLI Plugin for replace --mode with NODE_ENV

This plugin is to use of replace `--mode` value with `NODE_ENV` when running `build`, `serve` commands, 
and help us show some important env values before compiling.

## Install

```
npm i -s @asika32764/vue-cli-plugin-node-env

# OR

yarn add @asika32764/vue-cli-plugin-node-env
```

## Usage

Just put NODE_ENV before running.

```shell
$ NODE_ENV=development npm run build
```

Shows

```shell
> vue-cli-service build

  Building for development...

```

## Show ENV before Building

Add this config to  `vue.config.js`:

```javascript
module.exports = {
  //...
  pluginOptions: {
    showEnv: [
      'VUE_APP_API_ENDPOINT',
      'VUE_APP_DEBUG'
    ]
  }
  // ...
}
```

Then when run `npm run serve` or `build`, this env will show up:

```shell
> vue-cli-service build

ENVIRONMENT VALUES
  VUE_APP_API_ENDPOINT: https://your-site.com/api/v1/
  VUE_APP_DEBUG: 1

  Building for development...
```
