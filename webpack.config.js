var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
		context: __dirname + '/src',
		entry: {
			app: ['./kenpo-app.js',
			      './config/routes.js',
			      './search/search.js',
						'./result/result.js'],
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
		        loader: 'babel-loader',
		      }
		    },
				{
						test: /\.css$/,
						use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.html$/,
					use: 'file-loader'
				}
			],
			loaders: [
				{
	  			test: /\.(jpe?g|png|gif|svg)$/i,
			  	loader:'url-loader'
				}
			]
 		}
};
