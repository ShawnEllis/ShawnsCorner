'use strict';

angular.module('shawnEllisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Resume',
      'link': '/resume'},{
      'title': 'Projects',
      'link': '/projects'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
