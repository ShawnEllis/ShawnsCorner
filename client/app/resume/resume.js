'use strict';

angular.module('shawnEllisApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/resume', {
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl'
      });
  });
