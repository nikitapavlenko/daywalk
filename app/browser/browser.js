'use strict';

angular.module('daywalk.browser', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider.when('/browser', {
            templateUrl: 'app/browser/browser.html',
            controller: 'BrowserController'
        });
    })

    .controller('BrowserController', ['$scope', 'Route', function($scope, route) {

        $scope.currentPosition = 0;

        var res = route.get();
        console.log(res);
        $scope.route = res;

        for(var i = 0; i < $scope.route.points.length; i++){
            $scope.route.points[i].videoUrl += '?enablejsapi=1';
        }

        initializeViews(res);

        $scope.next = function() {
            $scope.currentPosition++;
            $scope.currentPosition %= $scope.route.points.length;
            moveToPoint($scope.route.points[$scope.currentPosition]);
        }

        $scope.previous = function() {
            $scope.currentPosition--;
            if ($scope.currentPosition < 0) {
                $scope.currentPosition = $scope.route.points.length - 1;
            }
            moveToPoint($scope.route.points[$scope.currentPosition]);
        }
    }]);
