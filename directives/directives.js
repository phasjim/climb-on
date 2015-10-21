(function(angular) {
  'use strict';
angular.module('portfolio', [])
  /* --------------------- CONTROLLER --------------------- */
  .controller('Controller', ['$scope', function($scope) {

  }])

  /* --------------------- DIRECTIVES --------------------- */
  .directive('sunSvg', function() {
    return {
      templateUrl: 'directives/templates/sun-svg-template.html'
    };
  });
})(window.angular);