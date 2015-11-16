var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("development"),
      "API_KEY" : JSON.stringify(require('./client/components/utils/keys.jsx').API_KEY),
      "PRIV_KEY" : JSON.stringify(require('./client/components/utils/keys.jsx').PRIV_KEY)
    }
  })
);

module.exports = config;
