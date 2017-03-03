myk.controller("search", function($scope) {
	$scope.testValue = "Welcome to MyKenpo!"
});

myk.directive("searchForm", function() {
	return {
		templateUrl: "/search/search.html"

	};

});