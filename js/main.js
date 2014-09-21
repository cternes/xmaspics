var xmaspics = angular.module('xmaspics', ['ngAnimate', 'ngRoute', 'xmaspicsControllers']);

xmaspics.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/splash', {
      templateUrl: 'partials/splash.html',
      controller: 'SplashController'
    }).
    when('/memory', {
      templateUrl: 'partials/memory.html',
      controller: 'MemoryController'
    }).
    otherwise({
      redirectTo: '/splash'
    });
}]);