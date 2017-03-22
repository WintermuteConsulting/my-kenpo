var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
		context: __dirname + '/src',
		entry: {
			app: './kenpo-app.js',
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
			// 		{ from: './*.html' },
			// 		{ from: __dirname + '/src/search/*.html' },
			// 		{ from: __dirname + '/src/result/*.html' },
			// 		{ from: __dirname + '/src/about/*.html' },
			// 		{ from: __dirname + '/src/about/*.html' },
			  		{ from: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css' }
			])
		],
		module: {
			rules: [
  			{
					test: /\.(js|jsx)$/,
					use: 'babel-loader'
				},
				{
						test: /\.css$/,
						use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.html$/,
					loader: 'file-loader'
				}
			],
			loaders: [
				{
	  			test: /\.(jpe?g|png|gif|svg)$/i,
			  	loader:'file-loader'
				}
			]
 		}
};
