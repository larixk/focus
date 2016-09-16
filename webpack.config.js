const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: { path: 'dist', filename: 'bundle.js' },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ],
  },
};
