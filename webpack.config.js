var config = {
  entry: ['./client/main.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: 'style!css' }
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  plugins: []
};

module.exports = config;
