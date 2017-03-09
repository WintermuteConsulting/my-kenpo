var angular = require('angular');
var myk = angular.module('my-kenpo', ['ui.router']);

require('./config/routes.js')(myk);
require('./search/search.js')(myk);
require('./result/result.js')(myk);

