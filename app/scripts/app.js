'use strict';

angular.module('gitNgcloseApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'gitNgcloseApp.directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('gitNgcloseApp.directives', []);
