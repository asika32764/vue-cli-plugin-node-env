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

ENVIRONMENT VARIABLES
  VUE_APP_API_ENDPOINT: https://your-site.com/api/v1/
  VUE_APP_DEBUG: 1

  Building for development...
```

## Use Different Mode for .env File and Building

If you want to use different env between `.env.{mode}` and build mode, you can use `BUILD_MODE` env.

```shell
NODE_ENV=staging BUILD_MODE=production yarn build
```

## Use on Ionic

This plugin is also useful for some Vue CLI wrapper like Ionic.

```shell
NODE_ENV=staging BUILD_MODE=production ionic capacitor run ios
```
