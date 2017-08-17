var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

 entry: {
 	app: './src/index.js'
 },

 output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'index.bundle.js',
 },

 devtool: 'inline-source-map',
 devServer: {
 	contentBase: './dist',
 	hot: true,
  inline: true
 },

 plugins: [
      /*new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),*/
      new webpack.HotModuleReplacementPlugin()
 ],

 module: {
     loaders: [
         {
            test: /\.js$/,
  		      exclude: /(node_modules|bower_components)/,
  		      use: {
  		        loader: 'babel-loader',
  		        options: {
  		          presets: ['env']
  		        }
  		      }
         }
     ],

     rules: [
     	  {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
     ]
 },

 stats: {
     colors: true
 }

};
