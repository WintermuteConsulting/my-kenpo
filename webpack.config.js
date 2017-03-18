var webpack = require('webpack');

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
			new webpack.optimize.CommonsChunkPlugin("vendor")
		]
};
