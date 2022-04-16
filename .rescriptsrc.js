const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    // config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;
    console.log('config', config)
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.port = 8083
    config.open = false
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;

    return config;
  },
};