'use strict';

angular.module('ImageLoaderApp', [])
  .config(function ($routeProvider)
  {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
