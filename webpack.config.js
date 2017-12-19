'use strict';

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
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          // These get loaded in reverse order and the output of one pipes into the other (think of a then)
          use: [
            {
              loader: 'css-loader', 
              options: {
                sourceMap:true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths:[`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },
      
    ],
  },
    
};