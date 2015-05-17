'use strict';

angular.module('shawnEllisApp')
  .controller('ExternAccCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Linkedin',
      'link': 'https://ca.linkedin.com/in/shawnellis0'},{
      'title': '@shawn_ellis',
      'link': 'https://twitter.com/shawn_ellis'},{
      'title': 'Github',
      'link': 'https://Github.com/ShawnEllis'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
