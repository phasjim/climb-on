(function(angular) {
	"use strict";
	angular.module("portfolio", [])
		/* =================== CONTROLLER =================== */
		.controller("Controller", ["$scope", function($scope) {
			var controller = new ScrollMagic.Controller();


			/*=================== CLIFF ===================*/

			// ============================================================
			// === Tween: The cliff is moving down.
			// ============================================================
			var tweenCliff = new TweenMax.fromTo("#div-cliff-me", 1,
				// previous
				{scale: 1.5,
				 top: "85vh",
				 left: "-30vw",
				 ease: Power0.easeNone
				},
				// next
				{top: "-100vh",
				 // left: "-15vw"
				}
			);

			var sceneCliff = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenCliff)
		 	.addIndicators({name: "cliff", colorStart: "brown", colorEnd: "brown"})
		 	.addTo(controller);


		 	/*=================== ME CLIMBING DOWN ===================*/
		 	var climbImgArray = [];
		 	var climbObj = {curImg: 0};

			// === Add "sitting" scene
			climbImgArray.push("./img/gifs/sitting-short-loop.gif");

			// === Then, add "cheers" scene
			var maxCheers = 71;

			while (maxCheers >= 0){
				var prefix;
				if      (maxCheers < 10)  prefix = "./img/pngs/cheers-cropped/cheers_0000";
				else if (maxCheers < 100) prefix = "./img/pngs/cheers-cropped/cheers_000";
				else  			  		  prefix = "./img/pngs/cheers-cropped/cheers_00";

				climbImgArray.push(prefix + maxCheers + ".png");
			    maxCheers--;
			}

			// === Then, add "climb" scene
			var maxClimb = 241;

			while (maxClimb >= 0){
				var prefix;
				if      (maxClimb < 10)  prefix = "./img/pngs/climb-cropped/climb_0000";
				else if (maxClimb < 100) prefix = "./img/pngs/climb-cropped/climb_000";
				else  			  		  prefix = "./img/pngs/climb-cropped/climb_00";

				climbImgArray.push(prefix + maxClimb + ".png");
			    maxClimb--;
			}

			// ============================================================
			// === Tween: Transitions from me sitting, to me doing "cheers",
			//			  to me climbing down.
			// ============================================================
			var tweenMeClimb = new TweenMax.to(climbObj, 0.5,
				{
					curImg: climbImgArray.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", climbImgArray[climbObj.curImg]);
					}
				}
			);

			var sceneMeClimb = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: "25",
				duration: "90%"
			})
			.setTween(tweenMeClimb)
			.addIndicators({name: "me climb__________", colorStart: "magenta", colorEnd: "magenta"})
			.addTo(controller);


			// ============================================================
			// === Tween: Series of vertical and horizontal animations 
			// ===		  for me doing "tweenMeClimb"
			// ============================================================
			var tweenMeClimbPos1 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "-12vh",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "3vh"
				}
			);

			var sceneMeClimbPos1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half-quarter",
				duration: "20%"
		    })
		 	.setTween(tweenMeClimbPos1)
		 	.addIndicators({name: "me climb pos 1__________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenMeClimbPos2 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "3vh",
				 left: "18vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "8vh",
				 left: "18vw",
				}
			);

			var sceneMeClimbPos2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half-quarter",
				offset: sceneMeClimbPos1.offset() + sceneMeClimbPos1.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos2)
		 	.addIndicators({name: "me climb pos 2__________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenMeClimbPos3 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "8vh",
				 left: "16vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "18vh",
				 left: "20vw",
				}
			);

			var sceneMeClimbPos3 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half-quarter",
				offset: sceneMeClimbPos2.offset() + sceneMeClimbPos2.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos3)
		 	.addIndicators({name: "me climb pos 3__________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenMeClimbPos4 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "18vh",
				 left: "20vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "23vh",
				 left: "21vw",
				}
			);

			var sceneMeClimbPos4 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half-quarter",
				offset: sceneMeClimbPos3.offset() + sceneMeClimbPos3.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos4)
		 	.addIndicators({name: "me climb pos 4________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenMeClimbPos5 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "23vh",
				 left: "21vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "36vh",
				 left: "24vw",
				}
			);

			var sceneMeClimbPos5 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half-quarter",
				offset: sceneMeClimbPos4.offset() + sceneMeClimbPos4.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos5)
		 	.addIndicators({name: "me climb pos 5________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);





		 	/*=================== ME WELCOME ===================*/
		 	var welcomeImgArray = [];
		 	var welcomeObj = {curImg: 0};

			// === Add "welcome" scene
			welcomeImgArray.push("./img/gifs/welcome-short-loop.gif");

			// ============================================================
			// === Tween: Display the "welcome" scene where I am waving
			// ============================================================
			var tweenMeWelcome = new TweenMax.to(welcomeObj, 0.5,
				{
					curImg: welcomeImgArray.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", welcomeImgArray[welcomeObj.curImg]);
					}
				}
			);

			var meWelcomeScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: sceneMeClimb.offset() + sceneMeClimb.duration(),
			})
			.setTween(tweenMeWelcome)
			.addIndicators({name: "me welcome__________________________________", colorStart: "gray", colorEnd: "gray"})
			.addTo(controller);






		}])



		/* =================== DIRECTIVES =================== */
		// .directive("sunSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/sun-svg-template.html"
		// 	};
		// })

		// .directive("cliffSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/cliff-svg-template.html"
		// 	};
		// })

		// .directive("sandSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/sand-svg-template.html"
		// 	};
		// })

		// .directive("mountainsSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/mountains-svg-template.html"
		// 	};
		// })

		// .directive("cactiSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/cacti-svg-template.html"
		// 	};
		// })

		// .directive("cactiFlowerLightSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/cacti-flower-light-svg-template.html",
		// 		scope: {
		// 			index: "="
		// 		}
		// 	};
		// })

		// .directive("cactiFlowerDarkSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/cacti-flower-dark-svg-template.html",
		// 		scope: {
		// 			index: "="
		// 		}
		// 	};
		// })

		// .directive("grassSvg", function() {
		// 	return {
		// 		templateUrl: "directives/templates/grass-svg-template.html",
		// 		scope: {
		// 			index: "="
		// 		}
		// 	};
		// })
})(window.angular);