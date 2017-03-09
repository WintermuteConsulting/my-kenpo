
var path = require('path');

module.exports = {
	entry: {
		'app': './src/kenpo-app.js'
	
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
        filename: '[name].bundle.js',
        library: 'myk',
      	libraryTarget: 'var'
	}
}