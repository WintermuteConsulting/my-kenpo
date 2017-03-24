const angular = require('angular');
const logo = require('url-loader?mimetype=image/png!../../public/images/universal.png');

angular.module('my-kenpo').controller("search", function($scope) {
	$scope.testValue = "Welcome to MyKenpo!"

	 $scope.logoPath = logo;
});
