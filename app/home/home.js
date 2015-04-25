'use strict';

angular.module('daywalk.home', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/home/home.html'
	});
	$routeProvider.when('/cities', {
		templateUrl: 'app/home/cities.html'
	});
	$routeProvider.when('/tours', {
		templateUrl: 'app/home/tours.html'
	});


})
.controller('HomeController', ['$scope', function($scope) {
}]);

