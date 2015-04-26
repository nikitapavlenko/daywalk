angular.module('daywalk', [
	'ngRoute',
	'daywalk.resources',
	'daywalk.browser',
	'daywalk.home'
])
.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
    	'self',
    	'http://nn.radio-t.com/rtfiles/**',
		'http://youtube.com/**'
	]);
}]);
