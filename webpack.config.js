const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template  : './src/index.html',
  filename  : 'index.html',
  inject    : 'body'
});

module.exports = {
  entry   : './src/main.js',
  output  : {
    path  : path.resolve('dist'),
    filename : 'index_bundle.js',
    publicPath: '/'
  },
  module  : {
    loaders : [
      { 
        test : /\.js$/, 
        loader : 'babel-loader', 
        exclude : /node_modules/
      },
      { 
        test : /\.jsx$/, 
        loader : 'babel-loader', 
        exclude : /node_modules/
      },
      {
        test : /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader'
      }
    ],
  },
  devServer : {
    historyApiFallback: true,
  },
  plugins : [htmlWebpackPluginConfig],
}