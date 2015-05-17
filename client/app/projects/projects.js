'use strict';

angular.module('shawnEllisApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
