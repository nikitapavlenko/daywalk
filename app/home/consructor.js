'use strict';

angular.module('daywalk.home', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/browser/constructor.html',
		controller: 'HomeController'
	});
})

.controller('HomeController', ['$scope', function($scope) {

}]);