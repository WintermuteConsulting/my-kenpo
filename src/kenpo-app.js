'use strict';
var myk = angular.module('my-kenpo', ['ui.router']);

myk.config(function($stateProvider, $urlRouterProvider) { 
	$urlRouterProvider.otherwise('/search');

	$stateProvider
		.state('search', {
			url: '/search',
			templateUrl: '/search/search.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/about/about.html'
		});
});