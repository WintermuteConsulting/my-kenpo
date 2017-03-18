'use strict';
const angular = require('angular');
angular.module('my-kenpo', ['ui.router']);

require('./config/routes.js');
require('./search/search.js');
require('./result/result.js');
