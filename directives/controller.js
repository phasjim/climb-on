(function(angular) {
	"use strict";
	angular.module("portfolio", [])
		/* --------------------- CONTROLLER --------------------- */
		.controller("Controller", ["$scope", function($scope) {
			var controller = new ScrollMagic.Controller();


			/*------------------- CLIFF -------------------*/
			var tweenCliff = new TweenMax.fromTo("#div-cliff", 1,
				// previous
				{scale: 1.5,
				 top: "85vh",
				 left: "-30vw"
				},
				// next
				{top: "-100vh",
				 left: "-15vw"
				}
			);
			var sceneCliff = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 1,
				duration: "200%"
		    })
		 	.setTween(tweenCliff)
		 	.addIndicators({name: "cliff", colorStart: "brown", colorEnd: "brown"})
		 	.addTo(controller);


		 	/*------------------- ME -------------------*/
		 	var sittingImgs = [];
		 	var maxSittingPng = 86;

			sittingImgs.push("img/gifs/sitting-loop.gif");
			sittingImgs.push("img/gifs/cheers-short-once-back.gif");

			// while (maxSittingPng >= 0){
			// 	var prefix;
			// 	if      (maxSittingPng < 10)  prefix = "img/pngs/cheers/cheers_0000";
			// 	else if (maxSittingPng < 100) prefix = "img/pngs/cheers/cheers_000";
			// 	else  			  		    prefix = "img/pngs/cheers/cheers_00";

			// 	sittingImgs.push(prefix + maxSittingPng + ".png");
			//     maxSittingPng--;
			// }

			var tweenMeSit = new TweenMax.fromTo("#div-me", 1,
				// previous
				{scale: 0.5,
				 top: 0,
				 left: "-30vw"
				},
				// next
				{ 
				 top: 0,
				 left: "-30vw"
				}
			);
			var sceneMeSit = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 1
		    })
		 	.setTween(tweenMeSit)
		 	.addIndicators({name: "me sit__________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


			 // Detect if scrolling up/down
			 // If up, show cheers-short-once.gif
			 // If down, show cheers-short-once-back.gif
			var lastScrollTop = 0, delta = 5;
			$(window).scroll(function(event){
			   var st = $(this).scrollTop();
			   
			   if(Math.abs(lastScrollTop - st) <= delta)
			      return;
			   
			   // ========= IF SCORLLING DOWN ========= //
			   if (st > lastScrollTop){
			        var cheersBackObj = {curImg: 0};
				 	var tweenMeCheersBack = TweenMax.to(cheersBackObj, 2,
						{
							curImg: sittingImgs.length - 1,
							roundProps: "curImg",
							immediateRender: true,
							ease: Linear.easeNone,
							onUpdate: function () {
							  $("#img-me").attr("src", "img/gifs/cheers-short-once-back.gif");
							}
						}
					);

					var sceneMeCheersBack = new ScrollMagic.Scene({
						triggerElement: "#trigger2",
						triggerHook: 0.90,
						duration: 0
				    })
				 	.setTween(tweenMeCheersBack)
				 	.addIndicators({name: "me cheers back__________________", colorStart: "yellow", colorEnd: "yellow"})
				 	.addTo(controller);
			   }
				// ========= IF SCORLLING UP ========= //
			   else {
			      	var cheersBackObj = {curImg: 0};
				 	var tweenMeCheersBack = TweenMax.to(cheersBackObj, 2,
						{
							curImg: sittingImgs.length - 1,
							roundProps: "curImg",
							immediateRender: true,
							ease: Linear.easeNone,
							onUpdate: function () {
							  $("#img-me").attr("src", "img/gifs/cheers-short-once.gif");
							}
						}
					);

					var sceneMeCheersBack = new ScrollMagic.Scene({
						triggerElement: "#trigger2",
						triggerHook: 0.90,
						duration: 0
				    })
				 	.setTween(tweenMeCheersBack)
				 	.addIndicators({name: "me cheers back__________________", colorStart: "yellow", colorEnd: "yellow"})
				 	.addTo(controller);
			   }

			   lastScrollTop = st;
			});



			// var meClimbScene = new ScrollMagic.Scene({
			// 	triggerElement: "#trigger2",
			// 	triggerHook: 0.75,
			// 	//duration: "90%"
			// })
			// .setTween(tweenSitting)
			// .addIndicators({name: "me sit___________________", colorStart: "magenta", colorEnd: "magenta"})
			// .addTo(controller);



		 // 	for(var i = 0, i <)
		 // 	var images = [
			// 	"../../img/example_imagesequence_01.png",
			// 	"../../img/example_imagesequence_02.png",
			// 	"../../img/example_imagesequence_03.png",
			// 	"../../img/example_imagesequence_04.png",
			// 	"../../img/example_imagesequence_05.png",
			// 	"../../img/example_imagesequence_06.png",
			// 	"../../img/example_imagesequence_07.png"
			// ];

			// var tweenMe = new TweenMax.fromTo("#div-me", 1,
			// 	// previous
			// 	{scale: "0.75",
			// 	 top: "5vh",
			// 	 left: "-3vw"
			// 	},
			// 	// next
			// 	{//top: "-100vh",
			// 	 //left: "-15vw"
			// 	}
			// );
			// var containerScene1 = new ScrollMagic.Scene({
			// 	triggerElement: "#trigger1" + "50%",
			// 	duration: "200%"
		 //    })
		 // 	.setTween(tweenCliff)
		 // 	.addIndicators({name: "me", colorStart: "pink", colorEnd: "pink"})
		 // 	.addTo(controller);






		}])



		/* --------------------- DIRECTIVES --------------------- */
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