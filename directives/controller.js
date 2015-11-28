(function(angular) {
	"use strict";
	angular.module("portfolio", [])
		/* --------------------- CONTROLLER --------------------- */
		.controller("Controller", ["$scope", function($scope) {
			var controller = new ScrollMagic.Controller();

			/*------------------- CLIFF -------------------*/
			var cliffTween = new TweenMax.fromTo("#cliff-svg-div", 1, {scale: 0.85, yPercent: -450, xPercent: -65}, {xPercent: -45, ease: Linear.easeNone});
			var containerScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				duration: "225%"
		    })
		 	.setTween(cliffTween)
		 	.addIndicators({name: "cliff", colorStart: "brown", colorEnd: "brown"})
		 	.addTo(controller);



		 	/*------------------- CACTI -------------------*/
		 	var cactiTween = new TweenMax.fromTo(
		 		"#cacti-svg-div", 1,
		 		{scale: 0.65, yPercent: -20, xPercent: 25},
		 		{xPercent: 15, ease: Linear.easeNone}
		 	);
			var cactiScene = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiTween)
		 	.addIndicators({name: "cacti", colorStart: "limegreen", colorEnd: "limegreen"})
		 	.addTo(controller);



		 	/*------------------- CACTI FLOWERS (LIGHT) -------------------*/
		 	var cactiFlowerLightTween1 = new TweenMax.fromTo(
		 		"#cacti-flower-light-svg-div-1", 1,
		 		{scale: 0, yPercent: -82.5, xPercent: 45.5},
		 		{scale: 0.02, rotation: 360, xPercent: 35.5, ease: Linear.easeNone}
		 	);
			var cactiFlowerLightScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerLightTween1)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);

		 	var cactiFlowerLightTween2 = new TweenMax.fromTo(
		 		"#cacti-flower-light-svg-div-2", 1, 
		 		{scale: 0, rotation: 35, yPercent: -188, xPercent: 1}, 
		 		{scale: 0.018, rotation: 395, xPercent: -9, ease: Linear.easeNone}
		 	);
			var cactiFlowerLightScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerLightTween2)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);

		 	var cactiFlowerLightTween3 = new TweenMax.fromTo(
		 		"#cacti-flower-light-svg-div-3", 1, 
		 		{scale: 0, rotation: 50, yPercent: -285.5, xPercent: 4.75}, 
		 		{scale: 0.018, rotation: 415, xPercent: -5.25, ease: Linear.easeNone}
		 	);
			var cactiFlowerLightScene3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerLightTween3)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);



		 	/*------------------- CACTI FLOWERS (DARK) -------------------*/
		 	var cactiFlowerDarkTween1 = new TweenMax.fromTo(
		 		"#cacti-flower-dark-svg-div-1", 1, 
		 		{scale: 0, yPercent: -386.5, xPercent: 52.7, rotation: 17}, 
		 		{scale: 0.018, rotation: 377, xPercent: 42.7, ease: Linear.easeNone}
		 	);
			var cactiFlowerDarkScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerDarkTween1)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);

		 	var cactiFlowerDarkTween2 = new TweenMax.fromTo(
		 		"#cacti-flower-dark-svg-div-2", 1, 
		 		{scale: 0, rotation: 22, yPercent: -485.8, xPercent: -2.5}, 
		 		{scale: 0.015, rotation: 382, xPercent: -12.5, ease: Linear.easeNone}
		 	);
			var cactiFlowerDarkScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerDarkTween2)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);

		 	var cactiFlowerDarkTween3 = new TweenMax.fromTo(
		 		"#cacti-flower-dark-svg-div-3", 1, 
		 		{scale: 0, rotation: 43, yPercent: -583.5, xPercent: 56}, 
		 		{scale: 0.016, rotation: 403, xPercent: 46, ease: Linear.easeNone}
		 	);
			var cactiFlowerDarkScene3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(cactiFlowerDarkTween3)
		 	.addIndicators({name: "flower__________", colorStart: "gold", colorEnd: "gold"})
		 	.addTo(controller);



		 	/*------------------- SAND -------------------*/
		 	var sandTween = new TweenMax.fromTo(
		 		"#sand-svg-div", 1, 
		 		{scale: 1.325, yPercent: 45, xPercent: 0}, 
		 		{xPercent: -10, ease: Linear.easeNone}
		 	);
		 	var sandScene = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(sandTween)
		 	.addIndicators({name: "sand____________________", colorStart: "tan", colorEnd: "tan"})
		 	.addTo(controller);



		 	/*------------------- MOUNTAINS -------------------*/
		 	var mountainsTween = new TweenMax.fromTo(
		 		"#mountains-svg-div", 1, 
		 		{scale: 1.3, yPercent: 100, xPercent: 0}, 
		 		{xPercent: -5, ease: Linear.easeNone}
		 	);
		 	var mountainScene = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				offset: "275%",
				duration: "100%"
		    })
		 	.setTween(mountainsTween)
		 	.addIndicators({name: "mountains______________________________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);



		 	/*------------------- GRASS -------------------*/
		 	var grassTween1 = new TweenMax.fromTo(
		 		"#grass-svg-div-1", 0.3, 
		 		{scale: 0.08, rotationX: 90, transformOrigin: "left bottom", yPercent: -1600, xPercent: 20}, 
		 		{rotationX: 0, ease: Linear.easeNone}
		 	);
			var grassScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger3",
				offset: "275%",
		    })
		 	.setTween(grassTween1)
		 	.addIndicators({name: "grass___________________________________________", colorStart: "darkgreen", colorEnd: "darkgreen"})
		 	.addTo(controller);

		 	var grassTween2 = new TweenMax.fromTo(
		 		"#grass-svg-div-2", 0.3, 
		 		{scale: 0.08, rotationX: 90, transformOrigin: "left bottom", yPercent: -1740, xPercent: 53}, 
		 		{rotationX: 0, ease: Linear.easeNone}
		 	);
			var grassScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger3",
				offset: "275%",
		    })
		 	.setTween(grassTween2)
		 	.addIndicators({name: "grass___________________________________________", colorStart: "darkgreen", colorEnd: "darkgreen"})
		 	.addTo(controller);

		 	var grassTween3 = new TweenMax.fromTo(
		 		"#grass-svg-div-3", 0.3, 
		 		{scale: 0.08, rotationX: 90, transformOrigin: "left bottom", yPercent: -1812, xPercent: 83}, 
		 		{rotationX: 0, ease: Linear.easeNone}
		 	);
			var grassScene3 = new ScrollMagic.Scene({
				triggerElement: "#trigger3",
				offset: "275%",
		    })
		 	.setTween(grassTween3)
		 	.addIndicators({name: "grass___________________________________________", colorStart: "darkgreen", colorEnd: "darkgreen"})
		 	.addTo(controller);



		 	/*------------------- MINI ME -------------------*/



			/*------------------- ME - CLIMBING -------------------*/

			var climbingImgs = [];
			var maxClimbing = 482;

			while (maxClimbing >= 0){
				var prefix;
				if      (maxClimbing < 10)  prefix = "./img/climb-up-gif/climb-up-gif_0000";
				else if (maxClimbing < 100) prefix = "./img/climb-up-gif/climb-up-gif_000";
				else  			  		    prefix = "./img/climb-up-gif/climb-up-gif_00";

				climbingImgs.push(prefix + maxClimbing + ".png");
			    maxClimbing--;
			}


			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var climbObj = {curImg: 0};

			// create tween
			var meClimbTween = new TweenMax.to(climbObj, 0.5,
				{
					curImg: climbingImgs.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Linear.easeNone,		// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", climbingImgs[climbObj.curImg]); // set the image source
					}
				}
			);

			// build scene
			var meClimbScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: 450,
				duration: "90%"
			})
			.setTween(meClimbTween)
			.addIndicators({name: "me climb__________", colorStart: "magenta", colorEnd: "magenta"})
			.addTo(controller);


			var meClimbVerTween = new TweenMax.fromTo("#mini-me-div", 1, {yPercent: -40}, {yPercent: 55, ease: Linear.easeNone});
			var meClimbVerScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: 450,
				duration: "90%"
		    })
		 	.setTween(meClimbVerTween)
		 	.addIndicators({name: "me climb__________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);



		 	/*------------------- ME - WELCOME -------------------*/
		 	var welcomeImgs = [];
			var maxWelcome = 419;

			while (maxWelcome >= 0){
				var prefix;
				if      (maxWelcome < 10)  prefix = "./img/welcome-gif/welcome-gif_0000";
				else if (maxWelcome < 100) prefix = "./img/welcome-gif/welcome-gif_000";
				else  			  		   prefix = "./img/welcome-gif/welcome-gif_00";

				welcomeImgs.push(prefix + maxWelcome + ".png");
			    maxWelcome--;
			}

			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var welcomeObj = {curImg: 0};

			// create tween
			var meWelcomeTween = new TweenMax.to(welcomeObj, 15,
				{
					curImg: welcomeImgs.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Linear.easeNone,		// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", welcomeImgs[welcomeObj.curImg]); // set the image source
					}
				}
			);

			meWelcomeTween.repeat(-1);

			// build scene
			var meWelcomeScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: meClimbVerScene.offset() + meClimbVerScene.duration(),
				duration: "13%"
			})
			.setTween(meWelcomeTween)
			.addIndicators({name: "me welcome________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);



			/*------------------- ME - REPEL -------------------*/
		 	var repelPrepImgs1 = [];
			var maxRepelPrep1 = 0;

			while (maxRepelPrep1 <= 33){
				var prefix;
				if      (maxRepelPrep1 < 10)  prefix = "./img/repel-prep-gif/repel-prep-gif_0000";
				else if (maxRepelPrep1 < 100) prefix = "./img/repel-prep-gif/repel-prep-gif_000";
				else  			  		   prefix = "./img/repel-prep-gif/repel-prep-gif_00";

				repelPrepImgs1.push(prefix + maxRepelPrep1 + ".png");
			    maxRepelPrep1++;
			}

			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var repelPrepObj1 = {curImg: 0};

			// create tween
			var meRepelPrepTween1 = new TweenMax.to(repelPrepObj1, 0.2,
				{
					curImg: repelPrepImgs1.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Circ.easeOut,		// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", repelPrepImgs1[repelPrepObj1.curImg]); // set the image source
					}
				}
			);

			// build scene
			var meRepelPrepScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: meWelcomeScene.offset() + meWelcomeScene.duration()
			})
			.setTween(meRepelPrepTween1)
			.addIndicators({name: "me repel prep 1____________________", colorStart: "tomato", colorEnd: "tomato"})
			.addTo(controller);


			var repelPrepImgs2 = [];
			var maxRepelPrep2 = 33;

			while (maxRepelPrep2 <= 68){
				var prefix;
				if      (maxRepelPrep2 < 10)  prefix = "./img/repel-prep-gif/repel-prep-gif_0000";
				else if (maxRepelPrep2 < 100) prefix = "./img/repel-prep-gif/repel-prep-gif_000";
				else  			  		   prefix = "./img/repel-prep-gif/repel-prep-gif_00";

				repelPrepImgs2.push(prefix + maxRepelPrep2 + ".png");
			    maxRepelPrep2++;
			}

			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var repelPrepObj2 = {curImg: 0};

			// create tween
			var meRepelPrepTween2 = new TweenMax.to(repelPrepObj2, 0.2,
				{
					curImg: repelPrepImgs2.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Circ.easeOut,		// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", repelPrepImgs2[repelPrepObj2.curImg]); // set the image source
					}
				}
			);

			// build scene
			var meRepelPrepScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: meWelcomeScene.offset() + meWelcomeScene.duration() + 100
			})
			.setTween(meRepelPrepTween2)
			.addIndicators({name: "me repel prep 2____________________", colorStart: "tomato", colorEnd: "tomato"})
			.addTo(controller);




			/*------------------- ME + ROPE - SLIDE LEFT -------------------*/
			var miniMeMoveLeftTween1 = new TweenMax.fromTo("#mini-me-div", 1, {xPercent: -20}, {xPercent: 2, ease: Linear.easeNone});
			var miniMeMoveLeftScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				duration: meWelcomeScene.offset() + meWelcomeScene.duration()
		    })
		 	.setTween(miniMeMoveLeftTween1)
		 	.addIndicators({name: "me move left container 1________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);


		 	var miniMeMoveLeftTween2 = new TweenMax.fromTo("#mini-me-div", 0.2, {xPercent: 2}, {xPercent: -3, ease: Linear.easeNone});
			var miniMeMoveLeftScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: meWelcomeScene.offset() + meWelcomeScene.duration()
		    })
		 	.setTween(miniMeMoveLeftTween2)
		 	.addIndicators({name: "me move left container 2________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);


		 	var miniMeMoveLeftTween3 = new TweenMax.fromTo("#mini-me-div", 2, {xPercent: -3}, {xPercent: 10, yPercent: 90, ease: Circ.easeOut});
			var miniMeMoveLeftScene3 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: meWelcomeScene.offset() + meWelcomeScene.duration() + 100,
				duration: 100
		    })
		 	.setTween(miniMeMoveLeftTween3)
		 	.addIndicators({name: "me move left container 3________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);


		 	var miniMeMoveLeftTween4 = new TweenMax.fromTo("#mini-me-div", 2, {xPercent: 10}, {xPercent: -3, yPercent: 120, ease: Circ.easeIn});
			var miniMeMoveLeftScene4 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: miniMeMoveLeftScene3.offset() + miniMeMoveLeftScene3.duration(),
				duration: 100
		    })
		 	.setTween(miniMeMoveLeftTween4)
		 	.addIndicators({name: "me move left container 4________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);


		 	var miniMeMoveLeftTween5 = new TweenMax.fromTo("#mini-me-div", 2, {xPercent: -3}, {xPercent: 10, yPercent: 150, ease: Circ.easeOut});
			var miniMeMoveLeftScene5 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: miniMeMoveLeftScene4.offset() + miniMeMoveLeftScene4.duration(),
				duration: 100
		    })
		 	.setTween(miniMeMoveLeftTween5)
		 	.addIndicators({name: "me move left container 5________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);


		 	var miniMeMoveLeftTween6 = new TweenMax.fromTo("#mini-me-div", 2, {xPercent: 10}, {xPercent: -3, yPercent: 180, ease: Circ.easeIn});
			var miniMeMoveLeftScene6 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: miniMeMoveLeftScene5.offset() + miniMeMoveLeftScene5.duration(),
				duration: 100
		    })
		 	.setTween(miniMeMoveLeftTween6)
		 	.addIndicators({name: "me move left container 6________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);

		 	var miniMeMoveLeftTween7 = new TweenMax.fromTo("#mini-me-div", 2, {xPercent: -3}, {xPercent: 7, yPercent: 225, ease: Circ.easeOut});
			var miniMeMoveLeftScene7 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: miniMeMoveLeftScene6.offset() + miniMeMoveLeftScene6.duration(),
				duration: 80
		    })
		 	.setTween(miniMeMoveLeftTween7)
		 	.addIndicators({name: "me move left container 5________________________________________", colorStart: "gray", colorEnd: "gray"})
		 	.addTo(controller);



		 	/*------------------- ME - LANDING -------------------*/

		 	var landingImgs = [];
			var maxLanding = 0;

			while (maxLanding <= 30){
				var prefix;
				if      (maxLanding < 10)  prefix = "./img/landing-gif/landing-gif_0000";
				else if (maxLanding < 100) prefix = "./img/landing-gif/landing-gif_000";
				else  			  		   prefix = "./img/landing-gif/landing-gif_00";

				landingImgs.push(prefix + maxLanding + ".png");
			    maxLanding++;
			}

			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var landingObj = {curImg: 0};

			// create tween
			var landingTween = new TweenMax.to(landingObj, 0.8,
				{
					curImg: landingImgs.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Circ.easeOut,		// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", landingImgs[landingObj.curImg]); // set the image source
					}
				}
			);

			// build scene
			var landingScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: miniMeMoveLeftScene7.offset() + miniMeMoveLeftScene7.duration()
			})
			.setTween(landingTween)
			.addIndicators({name: "me landing 1____________________", colorStart: "red", colorEnd: "red"})
			.addTo(controller);


			var landingTurnTween = new TweenMax.to("#mini-me-div", 1.5, {yPercent: 208, rotation: -15, ease: Linear.easeNone});
			var landingTurnScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: landingScene.offset() + 50
		    })
		 	.setTween(landingTurnTween)
		 	.addIndicators({name: "me landing 2____________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);



		 	/*------------------- ME - BLINKING -------------------*/

		 	var blinkImgs = ["./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00000.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png",
		 					 "./img/blink-gif/blink-gif_00001.png"];

			// TweenMax can tween any property of any object. We use this object to cycle through the array
			var blinkObj = {curImg: 0};

			// create tween
			var blinkTween = new TweenMax.to(blinkObj, 10,
				{
					curImg: landingImgs.length - 1,	// animate propery curImg to number of images
					roundProps: "curImg",		// only integers so it can be used as an array index
					immediateRender: true,		// load first image automatically
					ease: Linear.easeNone,			// show every image the same ammount of time
					onUpdate: function () {
					  $("#mini-me-img").attr("src", blinkImgs[blinkObj.curImg]); // set the image source
					}
				}
			);

			blinkTween.repeat(-1);

			// build scene
			var blinkScene = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: landingScene.offset() + 70
			})
			.setTween(blinkTween)
			.addIndicators({name: "me blinking________________________________", colorStart: "teal", colorEnd: "teal"})
			.addTo(controller);



		 	/*------------------- ROPE -------------------*/
		 	var ropeContainerTween1 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "27%",
		 			height: "2%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "38%",
		 			height: "5%"
		 		}
		 	});
			var ropeContainerScene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: 450,
				duration: "10%"
		    })
		 	.setTween(ropeContainerTween1)
		 	.addIndicators({name: "rope 1____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween2 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "38%",
		 			height: "5%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "33%",
		 			height: "40%"
		 		}
		 	});
			var ropeContainerScene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene1.offset() + ropeContainerScene1.duration(),
				duration: "30%"
		    })
		 	.setTween(ropeContainerTween2)
		 	.addIndicators({name: "rope 2____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween3 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "33%",
		 			height: "40%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "30%",
		 			height: "50%"
		 		}
		 	});
			var ropeContainerScene3 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene2.offset() + ropeContainerScene2.duration(),
				duration: "10%"
		    })
		 	.setTween(ropeContainerTween3)
		 	.addIndicators({name: "rope 3____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween4 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "30%",
		 			height: "50%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "27%",
		 			height: "53%"
		 		}
		 	});
			var ropeContainerScene4 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene3.offset() + ropeContainerScene3.duration(),
				duration: "20%"
		    })
		 	.setTween(ropeContainerTween4)
		 	.addIndicators({name: "rope 4____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween5 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "27%",
		 			height: "53%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "28%",
		 			height: "64%"
		 		}
		 	});
			var ropeContainerScene5 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene4.offset() + ropeContainerScene4.duration(),
				duration: "20%"
		    })
		 	.setTween(ropeContainerTween5)
		 	.addIndicators({name: "rope 5____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween6 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "28%",
		 			height: "66%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "28%",
		 			height: "67%"
		 		}
		 	});
			var ropeContainerScene6 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene5.offset() + ropeContainerScene5.duration(),
				duration: "13%"
		    })
		 	.setTween(ropeContainerTween6)
		 	.addIndicators({name: "rope 6____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween7 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "28%",
		 			height: "67%"
		 		}
		 	},{
		 		ease: Linear.easeNone,
		 		css: {
		 			width: "27%",
		 			height: "70%"
		 		}
		 	});
			var ropeContainerScene7 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene6.offset() + ropeContainerScene6.duration(),
				duration: "12.5%"
		    })
		 	.setTween(ropeContainerTween7)
		 	.addIndicators({name: "rope 7____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween8 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "27%",
		 			height: "70%"
		 		}
		 	},{
		 		ease: Circ.easeOut,
		 		css: {
		 			width: "36%",
		 			height: "102%"
		 		}
		 	});
			var ropeContainerScene8 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene7.offset() + ropeContainerScene7.duration(),
				duration: 100
		    })
		 	.setTween(ropeContainerTween8)
		 	.addIndicators({name: "rope 8____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween9 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "36%",
		 			height: "102%"
		 		}
		 	},{
		 		ease: Circ.easeIn,
		 		css: {
		 			width: "27%",
		 			height: "120%"
		 		}
		 	});
			var ropeContainerScene9 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene8.offset() + ropeContainerScene8.duration(),
				duration: 100
		    })
		 	.setTween(ropeContainerTween9)
		 	.addIndicators({name: "rope 9____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween10 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "27%",
		 			height: "120%"
		 		}
		 	},{
		 		ease: Circ.easeOut,
		 		css: {
		 			width: "35%",
		 			height: "150%"
		 		}
		 	});
			var ropeContainerScene10 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene9.offset() + ropeContainerScene9.duration(),
				duration: 100
		    })
		 	.setTween(ropeContainerTween10)
		 	.addIndicators({name: "rope 10____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween11 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "35%",
		 			height: "150%"
		 		}
		 	},{
		 		ease: Circ.easeIn,
		 		css: {
		 			width: "25%",
		 			height: "170%"
		 		}
		 	});
			var ropeContainerScene11 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene10.offset() + ropeContainerScene10.duration(),
				duration: 100
		    })
		 	.setTween(ropeContainerTween11)
		 	.addIndicators({name: "rope 11____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);


		 	var ropeContainerTween12 = new TweenMax.fromTo("#rope-obj", 1,
		 	{
		 		css: {
		 			width: "25%",
		 			height: "170%"
		 		}
		 	},{
		 		ease: Circ.easeOut,
		 		css: {
		 			width: "37%",
		 			height: "205%"
		 		}
		 	});
			var ropeContainerScene12 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				offset: ropeContainerScene11.offset() + ropeContainerScene11.duration(),
				duration: 130
		    })
		 	.setTween(ropeContainerTween12)
		 	.addIndicators({name: "rope 12____________________________", colorStart: "black", colorEnd: "black"})
		 	.addTo(controller);





		}])



		/* --------------------- DIRECTIVES --------------------- */
		.directive("sunSvg", function() {
			return {
				templateUrl: "directives/templates/sun-svg-template.html"
			};
		})

		.directive("cliffSvg", function() {
			return {
				templateUrl: "directives/templates/cliff-svg-template.html"
			};
		})

		.directive("sandSvg", function() {
			return {
				templateUrl: "directives/templates/sand-svg-template.html"
			};
		})

		.directive("mountainsSvg", function() {
			return {
				templateUrl: "directives/templates/mountains-svg-template.html"
			};
		})

		.directive("cactiSvg", function() {
			return {
				templateUrl: "directives/templates/cacti-svg-template.html"
			};
		})

		.directive("cactiFlowerLightSvg", function() {
			return {
				templateUrl: "directives/templates/cacti-flower-light-svg-template.html",
				scope: {
					index: "="
				}
			};
		})

		.directive("cactiFlowerDarkSvg", function() {
			return {
				templateUrl: "directives/templates/cacti-flower-dark-svg-template.html",
				scope: {
					index: "="
				}
			};
		})

		.directive("grassSvg", function() {
			return {
				templateUrl: "directives/templates/grass-svg-template.html",
				scope: {
					index: "="
				}
			};
		})
})(window.angular);