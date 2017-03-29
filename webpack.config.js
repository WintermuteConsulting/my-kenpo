var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
		context: __dirname + '/src',
		entry: {
			app: ['./kenpo-app.js',
			      './config/routes.js',
			      './search/search.js',
						'./result/result.js',
						'./index.html',
						'./about/about.html',
					  './search/search.html',
					  './result/result.html'
			],
			vendor: ['angular', 'angular-ui-router']
		},
		output: {
			path: __dirname + '/dist',
			filename: '[name].bundle.js'
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin("vendor"),
			new CopyWebpackPlugin(
			[
  			{ from: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css' }
			])
		],
		module: {
			rules: [
				{
		      test: /\.js$/,
		      exclude: /(node_modules)/,
		      use: {
		        loader: 'babel-loader'
		      }
		    },
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.scss$/,
					loader: 'style-loader!css-loader!sass-loader'
				},
				{
					test: /\.html$/,
					use: ['file-loader?name=[path]/[name].[ext]', 'extract-loader', 'html-loader'],
					exclude: /index.html/
				},
				{
					test: /\index.html$/,
					use: 'file-loader?name=[name].[ext]',
				}
			],
			loaders: [
				{
	  			test: /.png$/,
			  	loader: 'file-loader'
				}
			]
 		}
};
