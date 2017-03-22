const angular = require('angular');

angular.module('my-kenpo').controller("result", function($scope) {
	$scope.techniques = [
		{ "name": "Raining Claw", "attack": "right front straight punch", "belt": "yellow" },
		{ "name": "Single Exit", "attack": "right front straight punch", "belt": "yellow" },
		{ "name": "Encounter with Danger", "attack": "right front straight punch", "belt": "yellow" }
	];
});
