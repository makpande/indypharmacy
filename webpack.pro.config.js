var config = require('./webpack.config.js');
var webpack = require('webpack');

console.log("hello world");
console.log(process.env);
console.log(process.env["API_KEY"]);
config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production"),
      "API_KEY" : process.env["API_KEY"]
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
