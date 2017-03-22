import css from '../public/stylesheets/styles.css';
const angular = require('angular');
angular.module('my-kenpo', ['ui.router']);

require('./config/routes.js');
require('./search/search.js');
require('./result/result.js');

//require("file-loader?name=[name].[ext]!./index.html");
//require("file-loader?name=[name].[ext]!./about/about.html");
require("url-loader?mimetype=image/png!../public/images/universal.png");
