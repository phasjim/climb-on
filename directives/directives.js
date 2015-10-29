(function(angular) {
	'use strict';
	angular.module('portfolio', [])
		/* --------------------- CONTROLLER --------------------- */
		.controller('Controller', ['$scope', function($scope) {

			var controller = new ScrollMagic.Controller();

			/*------------------- CLIFF -------------------*/
			var cliffTween = new TweenMax.fromTo('#cliff-svg-div', 1, {scale: 0.85, yPercent: -450, xPercent: -65}, {xPercent: -45, ease: Linear.easeNone});
			var containerScene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger1',
				duration: "225%"
		    })
		 	.setTween(cliffTween)
		 	.addIndicators()
		 	.addTo(controller);



		 	/*------------------- CACTI -------------------*/
		 	var cactiTween = new TweenMax.fromTo('#cacti-svg-div', 1, {scale: 0.65, yPercent: -20, xPercent: 25}, {xPercent: 15, ease: Linear.easeNone});
			var containerScene2 = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiTween)
		 	.addIndicators()
		 	.addTo(controller);



		 	/*------------------- CACTI FLOWERS (LIGHT) -------------------*/
		 	var cactiFlowerLightTween1 = new TweenMax.fromTo('#cacti-flower-light-svg-div-1', 1, {scale: 0, yPercent: -82.5, xPercent: 45.5}, {scale: 0.02, rotation: 360, xPercent: 35.5, ease: Linear.easeNone});
			var containerScene3a = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerLightTween1)
		 	.addIndicators()
		 	.addTo(controller);

		 	var cactiFlowerLightTween2 = new TweenMax.fromTo('#cacti-flower-light-svg-div-2', 1, {scale: 0, rotation: 35, yPercent: -188, xPercent: 1}, {scale: 0.018, rotation: 395, xPercent: -9, ease: Linear.easeNone});
			var containerScene3b = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerLightTween2)
		 	.addIndicators()
		 	.addTo(controller);

		 	var cactiFlowerLightTween3 = new TweenMax.fromTo('#cacti-flower-light-svg-div-3', 1, {scale: 0, rotation: 50, yPercent: -285.5, xPercent: 4.75}, {scale: 0.018, rotation: 415, xPercent: -5.25, ease: Linear.easeNone});
			var containerScene3c = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerLightTween3)
		 	.addIndicators()
		 	.addTo(controller);



		 	/*------------------- CACTI FLOWERS (DARK) -------------------*/
		 	var cactiFlowerDarkTween1 = new TweenMax.fromTo('#cacti-flower-dark-svg-div-1', 1, {scale: 0, yPercent: -386.5, xPercent: 52.7, rotation: 17}, {scale: 0.018, rotation: 377, xPercent: 42.7, ease: Linear.easeNone});
			var containerScene3a = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerDarkTween1)
		 	.addIndicators()
		 	.addTo(controller);

		 	var cactiFlowerDarkTween2 = new TweenMax.fromTo('#cacti-flower-dark-svg-div-2', 1, {scale: 0, rotation: 22, yPercent: -485.8, xPercent: -2.5}, {scale: 0.015, rotation: 382, xPercent: -12.5, ease: Linear.easeNone});
			var containerScene3b = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerDarkTween2)
		 	.addIndicators()
		 	.addTo(controller);

		 	var cactiFlowerDarkTween3 = new TweenMax.fromTo('#cacti-flower-dark-svg-div-3', 1, {scale: 0, rotation: 43, yPercent: -583.5, xPercent: 56}, {scale: 0.016, rotation: 403, xPercent: 46, ease: Linear.easeNone});
			var containerScene3c = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(cactiFlowerDarkTween3)
		 	.addIndicators()
		 	.addTo(controller);



		 	/*------------------- SAND -------------------*/
		 	var sandTween = new TweenMax.fromTo('#sand-svg-div', 1, {scale: 1.325, yPercent: 45, xPercent: 0}, {xPercent: -10, ease: Linear.easeNone});
		 	var containerScene4 = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(sandTween)
		 	.addIndicators()
		 	.addTo(controller);



		 	/*------------------- MOUNTAINS -------------------*/
		 	var mountainsTween = new TweenMax.fromTo('#mountains-svg-div', 1, {scale: 1.3, yPercent: 100, xPercent: 0}, {xPercent: -5, ease: Linear.easeNone});
		 	var containerScene5 = new ScrollMagic.Scene({
				triggerElement: '#trigger2',
				offset: "275%",
				duration: "125%"
		    })
		 	.setTween(mountainsTween)
		 	.addIndicators()
		 	.addTo(controller);
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

		.directive('cactiFlowerDarkSvg', function() {
			return {
				templateUrl: 'directives/templates/cacti-flower-dark-svg-template.html',
				scope: {
					index: "="
				}
			};
		})
})(window.angular);