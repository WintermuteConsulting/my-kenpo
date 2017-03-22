const angular = require('angular');

angular.module('my-kenpo').config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/search');

	$stateProvider
		.state('search', {
			url: '/search',
			templateUrl: 'search.html'
		})
		.state('result', {
			url: '/result',
			templateUrl: 'result.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about.html'
		});
});
