module.exports = function(myk) {
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
}