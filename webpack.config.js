const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template  : './client/index.html',
  filename  : 'index.html',
  inject    : 'body'
});

module.exports = {
<<<<<<< HEAD
    
  // Load this and everythning it cares about
  entry: `${__dirname}/src/main.js`,
    
  devServer: { 
    historyApiFallback:true,
  },
    
  devtool: 'source-map',
    
  // Stick it into the "path" folder with that file name
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  }, 
    
  plugins: [
    new HTMLPlugin({
      template: `${__dirname}/src/index.html`,
    }),
    new ExtractPlugin('bundle.[hash].css'),
  ],
    
  module: {
    rules: [
      // If it's a .js file not in node_modules, use the babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },  
      // If it's a .scss file 
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
            
=======
  entry   : './client/index.js',
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
>>>>>>> 94fd5d1c4e5a6a77f26b64028356ae6f967056e2
    ],
  },
  devServer : {
    historyApiFallback: true,
  },
  plugins : [htmlWebpackPluginConfig],
}