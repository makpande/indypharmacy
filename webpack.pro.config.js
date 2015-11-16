var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production"),
      "API_KEY" : JSON.stringify(process.env["API_KEY"]),
      "PRIV_KEY" : JSON.stringify(process.env["PRIV_KEY"])
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
