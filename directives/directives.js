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
		})

		.directive('cliffSvg', function() {
			return {
				templateUrl: 'directives/templates/cliff-svg-template.html'
			};
		})

		.directive('sandSvg', function() {
			return {
				templateUrl: 'directives/templates/sand-svg-template.html'
			};
		})

		.directive('mountainsSvg', function() {
			return {
				templateUrl: 'directives/templates/mountains-svg-template.html'
			};
		})

		.directive('cactiSvg', function() {
			return {
				templateUrl: 'directives/templates/cacti-svg-template.html'
			};
		})

		.directive('cactiFlowerLightSvg', function() {
			return {
				templateUrl: 'directives/templates/cacti-flower-light-svg-template.html',
				scope: {
					index: "="
				}
			};
		})
})(window.angular);