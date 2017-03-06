'use strict';
var myk = angular.module('my-kenpo', ['ui.router', 'ui.grid']);

myk.config(function($stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.otherwise('/search');

	$stateProvider
		.state('search', {
			url: '/search',
			templateUrl: '/search/search.html'
		})
		.state('result', {
			url: '/result',
			templateUrl: '/result/result.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/about/about.html'
		});
});