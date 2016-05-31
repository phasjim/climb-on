(function(angular) {
	"use strict";
	angular.module("portfolio", [])
		/* =================== CONTROLLER =================== */
		.controller("Controller", ["$scope", function($scope) {
			var controller = new ScrollMagic.Controller();

			/*===================================================================================*/
			/*================================= MY WORK CONTENT =================================*/
			/*===================================================================================*/

			/*=================== MAIN CONTENT BOX ===================*/
			/*=========================================================
				tweenWork1, tweenWork2: Fades the main content box and
				moves it to the right (so it doesn't interfere with the
				interaction on the "about me" screen)
			  =========================================================*/
			var tweenWork1 = new TweenMax.fromTo(".layer-my-work", 0.25,
				// previous
				{
				 opacity: 1,
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 0,
				}
			);
			var sceneWork1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 20,
				duration: 100
		    })
		 	.setTween(tweenWork1)
		 	//.addIndicators({name: "my work_________________________________", colorStart: "green", colorEnd: "green"})
		 	.addTo(controller);


		 	var tweenWork2 = new TweenMax.fromTo(".layer-my-work", 0.2,
				// previous
				{
				 left: "10vw",
				 ease: Circ.easeNone
				},
				// next
				{
				left: "120vw",
				}
			);
			var sceneWork2 = new ScrollMagic.Scene({
				triggerElement: "#trigger3"
		    })
		 	.setTween(tweenWork2)
		 	//.addIndicators({name: "my work - move right_________________________________", colorStart: "green", colorEnd: "green"})
		 	.addTo(controller);


		 	/*=================== CONTENT ITEMS ===================*/
			/*=========================================================
				tweenItemRow1-3: Scales and fades in the rows of items.
			  =========================================================*/
			var tweenItemRow1 = new TweenMax.fromTo(".item-row1", 0.25,
				// previous
				{
				 scale: 1,
				 opacity: 1,
				 ease: Back.easeOut
				},
				// next
				{
				 scale: 0.75,
				 opacity: 0,
				}
			);
			var sceneItemRow1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 40
		    })
		 	.setTween(tweenItemRow1)
		 	//.addIndicators({name: "my work row 1______________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenItemRow2 = new TweenMax.fromTo(".item-row2", 0.25,
				// previous
				{
				 scale: 1,
				 opacity: 1,
				 ease: Back.easeOut
				},
				// next
				{
				 scale: 0.75,
				 opacity: 0,
				}
			);
			var sceneItemRow2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 60
		    })
		 	.setTween(tweenItemRow2)
		 	//.addIndicators({name: "my work row 2______________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenItemRow3 = new TweenMax.fromTo(".item-row3", 0.25,
				// previous
				{
				 scale: 1,
				 opacity: 1,
				 ease: Back.easeOut
				},
				// next
				{
				 scale: 0.75,
				 opacity: 0,
				}
			);
			var sceneItemRow3 = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 80
		    })
		 	.setTween(tweenItemRow3)
		 	//.addIndicators({name: "my work row 3______________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);




			/*===================================================================================*/
			/*=================================== HOME CONTENT ==================================*/
			/*===================================================================================*/
			var tweenName1 = new TweenMax.fromTo(".content-name", 0.65,
				// previous
				{opacity: 0,
				 left: "13vw",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0.9,
				 left: "10vw"
				}
			);
			var sceneName1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-quarter",
				offset: 40,
				duration: "22%"
		    })
		 	.setTween(tweenName1)
		 	//.addIndicators({name: "name_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenTagline1 = new TweenMax.fromTo(".content-tagline", 0.65,
				// previous
				{opacity: 0,
				 left: "43vw",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0.9,
				 left: "45vw"
				}
			);
			var sceneTagline1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-quarter",
				offset: 40,
				duration: "22%"
		    })
		 	.setTween(tweenTagline1)
		 	//.addIndicators({name: "name_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenName2 = new TweenMax.fromTo(".content-name", 0.65,
				// previous
				{
				 opacity: 0.9,
				 left: "10vw",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0,
				 left: "7vw",
				}
			);
			var sceneName2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: 50,
				duration: "22%"
		    })
		 	.setTween(tweenName2)
		 	//.addIndicators({name: "name_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenTagline2 = new TweenMax.fromTo(".content-tagline", 0.65,
				// previous
				{
				 opacity: 0.9,
				 left: "45vw",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0,
				 left: "47vw",
				}
			);
			var sceneTagline2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: 50,
				duration: "22%"
		    })
		 	.setTween(tweenTagline2)
		 	//.addIndicators({name: "name_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);



			/*===================================================================================*/
			/*================================= ABOUT ME CONTENT ================================*/
			/*===================================================================================*/
			var tweenAboutMeContent = new TweenMax.fromTo("#content-about-me", 0.65,
				// previous
				{opacity: 0,
				 top: "7vw",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 1,
				 top: "6.5vw"
				}
			);
			var sceneAboutMeContent = new ScrollMagic.Scene({
				triggerElement: "#trigger3",
				triggerHook: 0,
		    })
		 	.setTween(tweenAboutMeContent)
		 	//.addIndicators({name: "about me content________________________", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);


		 	var tweenAboutMeTitle = new TweenMax.fromTo("#title-about-me", 0.65,
				// previous
				{opacity: 0,
				 left: "4vh",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 1,
				 left: "5vh"
				}
			);
			var sceneAboutMeTitle = new ScrollMagic.Scene({
				triggerElement: "#trigger3",
				triggerHook: 0,
		    })
		 	.setTween(tweenAboutMeTitle)
		 	//.addIndicators({name: "about me content________________________", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);




			/*===================================================================================*/
			/*===================================== SETTING =====================================*/
			/*===================================================================================*/

			/*=================== SUN + CLOUDS ===================*/
			/*=========================================================
				tweenSun: Fades the sun/clouds in and out.
			  =========================================================*/
			var tweenSun = new TweenMax.fromTo("#div-sun", 1,
				// previous
				{opacity: 1,
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 0,
				}
			);
			var sceneSun = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 20,
				duration: "40%"
		    })
		 	.setTween(tweenSun)
		 	//.addIndicators({name: "sun~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);


		 	var tweenClouds = new TweenMax.fromTo(".layer-clouds", 1,
				// previous
				{opacity: 1,
				 top: "2vh",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 0,
			     top: "0vh"
				}
			);
			var sceneClouds = new ScrollMagic.Scene({
				triggerElement: "#trigger1-half",
				offset: 20,
				duration: "40%"
		    })
		 	.setTween(tweenClouds)
		 	//.addIndicators({name: "sun~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);



			/*=================== CLIFF ===================*/
			/*=========================================================
				tweenCliffVert: Moves the cliff up and down.
			  =========================================================*/
			var tweenCliffVert = new TweenMax.fromTo("#div-cliff-me", 1,
				// previous
				{scale: 1.5,
				 top: "85vh",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "-100vh",
				}
			);
			var sceneCliffVert = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenCliffVert)
		 	//.addIndicators({name: "cliff~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "brown", colorEnd: "brown"})
		 	.addTo(controller);

		 	/*=========================================================
				tweenCliffHor1: Moves the cliff left and right.
			  =========================================================*/
		 	var tweenCliffHor1 = new TweenMax.fromTo("#div-cliff-me", 1,
				// previous
				{scale: 1.5,
				 left: "-24vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 left: "-30vw",
				}
			);
			var sceneCliffHor1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "100%"
		    })
		 	.setTween(tweenCliffHor1)
		 	//.addIndicators({name: "cliff horizontal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "grey", colorEnd: "grey"})
		 	.addTo(controller);



		 	/*=================== MOUNTAINS + SAND ===================*/
			/*=========================================================
				tweenMountrainVert: Moves the mountains left/right and
				also up/down.
			  =========================================================*/
			var tweenMountainVert = new TweenMax.fromTo("#div-ground-1", 1,
				// previous
				{scale: 2,
				 top: "150vh",
				 left: "0vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "-35vh",
				 left: "-10vw",
				}
			);
			var sceneMountainVert = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenMountainVert)
		 	//.addIndicators({name: "mountain~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);

			/*=========================================================
				tweenSandVert: Moves the sand left/right and
				also up/down.
			  =========================================================*/
		 	var tweenSandVert = new TweenMax.fromTo("#img-sand", 1,
				// previous
				{scale: 2,
				 top: "40vh",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "35vh",
				}
			);

			var sceneSandVert = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenSandVert)
		 	//.addIndicators({name: "mountain~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "orange", colorEnd: "orange"})
		 	.addTo(controller);



		 	/*=================== FLOWERS ===================*/
		 	/*=========================================================
				tweenFlowerLight1-3, tweenFlowerDark1-3: Moves the flower
				left/right, rotates the flowers, and scales them
			  =========================================================*/
			var tweenFlowerLight1 = new TweenMax.fromTo("#img-flower-light1", 1,
				// previous
				{scale: 0,
				 rotation: 0,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 365,
				}
			);
			var sceneFlowerLight1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerLight1)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenFlowerLight2 = new TweenMax.fromTo("#img-flower-light2", 1,
				// previous
				{scale: 0,
				 rotation: 5,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 370,
				}
			);
			var sceneFlowerLight2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerLight2)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenFlowerLight3 = new TweenMax.fromTo("#img-flower-light3", 1,
				// previous
				{scale: 0,
				 rotation: 375,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 10,
				}
			);
			var sceneFlowerLight3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerLight3)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenFlowerDark1 = new TweenMax.fromTo("#img-flower-dark1", 1,
				// previous
				{scale: 0,
				 rotation: 0,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 365,
				}
			);
			var sceneFlowerDark1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerDark1)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenFlowerDark2 = new TweenMax.fromTo("#img-flower-dark2", 1,
				// previous
				{scale: 0,
				 rotation: 5,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 370,
				}
			);
			var sceneFlowerDark2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerDark2)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);


		 	var tweenFlowerDark3 = new TweenMax.fromTo("#img-flower-dark3", 1,
				// previous
				{scale: 0,
				 rotation: 375,
				 ease: Power0.easeNone
				},
				// next
				{
				 scale: .015,
				 rotation: 10,
				}
			);
			var sceneFlowerDark3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",
				triggerHook: 0.75,
				duration: "200%"
		    })
		 	.setTween(tweenFlowerDark3)
		 	//.addIndicators({name: "flower_____________________________________", colorStart: "red", colorEnd: "red"})
		 	.addTo(controller);



		 	/*=================== GRASS ===================*/
		 	/*=========================================================
				tweenGrass1-3: Pops the grass up when it reaches the
				trigger.
			  =========================================================*/
			var tweenGrass1 = new TweenMax.fromTo("#img-grass1", 0.5,
				// previous
				{scale: 0.1,
				 rotationX: 90,
				 transformOrigin: "left bottom",
            	 left: "78vw",
              	 top: "175vh",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass1 = new ScrollMagic.Scene({
				triggerElement: "#trigger3-half",
		    })
		 	.setTween(tweenGrass1)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);


		 	var tweenGrass2 = new TweenMax.fromTo("#img-grass2", 0.5,
				// previous
				{scale: 0.1,
				 rotationX: 90,
				 transformOrigin: "left bottom",
     			 left: "24vw",
            	 top: "158vh",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass2 = new ScrollMagic.Scene({
				triggerElement: "#trigger3-half",
		    })
		 	.setTween(tweenGrass2)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);


		 	var tweenGrass3 = new TweenMax.fromTo("#img-grass3", 0.5,
				// previous
				{scale: 0.1,
				 rotationX: 90,
				 transformOrigin: "left bottom",
				 left: "37vw",
            	 top: "202vh",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass3 = new ScrollMagic.Scene({
				triggerElement: "#trigger3-half",
		    })
		 	.setTween(tweenGrass3)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);





		 	/*===================================================================================*/
			/*=================================== ME ANIMATION ==================================*/
			/*===================================================================================*/

		 	/*=================== ME CLIMBING DOWN ===================*/
		 	var climbImgArray = [];
		 	var climbObj = {curImg: 0};

			// === Add "sitting" scene
			climbImgArray.push("./img/gifs/sitting-short-loop.gif");

			// === Then, add "cheers" scene
			var maxCheers = 71;

			while (maxCheers > 0){
				var prefix;
				if      (maxCheers < 10)  prefix = "./img/pngs/cheers-cropped/cheers_0000";
				else if (maxCheers < 100) prefix = "./img/pngs/cheers-cropped/cheers_000";
				else  			  		  prefix = "./img/pngs/cheers-cropped/cheers_00";

				climbImgArray.push(prefix + maxCheers + ".png");
			    maxCheers--;
			}

			// === Then, add "climb" scene
			var maxClimb = 241;

			while (maxClimb > 0){
				var prefix;
				if      (maxClimb < 10)  prefix = "./img/pngs/climb-cropped/climb_0000";
				else if (maxClimb < 100) prefix = "./img/pngs/climb-cropped/climb_000";
				else  			  		  prefix = "./img/pngs/climb-cropped/climb_00";

				climbImgArray.push(prefix + maxClimb + ".png");
			    maxClimb--;
			}

			/*=========================================================
				tweenMeClimbPos0: Zero position of me sitting at the top.
			  =========================================================*/
			var tweenMeClimbPos0 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "-12vh",
	             left: "18vw",
	             onUpdate: function () {
					$("#img-me").attr("src", "./img/gifs/sitting-short-loop.gif");
				 },
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "-12vh",
	             left: "18vw",
				}
			);
			var sceneMeClimbPos0 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",
				duration: "75%"
		    })
		 	.setTween(tweenMeClimbPos0)
		 	//.addIndicators({name: "me climbing down pos0_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	/*=========================================================
				tweenMeClimb: Animates me climbing down.
			  =========================================================*/
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
			//.addIndicators({name: "me climbing down", colorStart: "magenta", colorEnd: "magenta"})
			.addTo(controller);


			/*=========================================================
				tweenMeClimbPos1-5: Animates me going up/down, left/right.
			  =========================================================*/
			var tweenMeClimbPos1 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "-12vh",
	             left: "18vw",
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
		 	//.addIndicators({name: "me climbing down pos1_________", colorStart: "magenta", colorEnd: "magenta"})
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
		 	//.addIndicators({name: "me climbing down pos2_________", colorStart: "magenta", colorEnd: "magenta"})
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
		 	//.addIndicators({name: "me climbing down pos3_________", colorStart: "magenta", colorEnd: "magenta"})
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
		 	//.addIndicators({name: "me climbing down pos4_________", colorStart: "magenta", colorEnd: "magenta"})
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
		 	//.addIndicators({name: "me climbing down pos5_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);



		 	/*=================== ME WELCOME ===================*/
		 	var welcomeImgArray = [];
		 	var welcomeObj = {curImg: 0};

			// === Add "welcome" scene
			welcomeImgArray.push("./img/gifs/welcome-short-loop.gif");

			/*=========================================================
				tweenMeWelcome: Just plain, ol' me, waving.
			  =========================================================*/
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
			//.addIndicators({name: "me welcome__________________________________", colorStart: "gold", colorEnd: "gold"})
			.addTo(controller);




			/*=================== ME REPELLING DOWN 1 ===================*/
		 	var repelImgArray1 = [];
		 	var repelObj1 = {curImg: 0};

			// === Add "repel" scene
			var maxRepel1 = 1;
			
			while (maxRepel1 < 20){
				var prefix;
				if      (maxRepel1 < 10)  prefix = "./img/pngs/repel2-cropped/repel_0000";
				else if (maxRepel1 < 100) prefix = "./img/pngs/repel2-cropped/repel_000";
				else  			  		  prefix = "./img/pngs/repel2-cropped/repel_00";

				repelImgArray1.push(prefix + maxRepel1 + ".png");
			    maxRepel1++;
			}

			/*=========================================================
				tweenMeRepel1: Repelling, part 1.
			  =========================================================*/
			var tweenMeRepel1 = new TweenMax.to(repelObj1, 0.5,
				{
					curImg: repelImgArray1.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", repelImgArray1[repelObj1.curImg]);
					}
				}
			);
			var sceneMeRepel1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: "50",
				duration: "10%"
			})
			.setTween(tweenMeRepel1)
			//.addIndicators({name: "me repel 1___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos1 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "36vh",
				 left: "24vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "43vh",
				 left: "30vw",
				}
			);
			var sceneMeRepelPos1 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: "50",
				duration: sceneMeRepel1.duration(),
		    })
		 	.setTween(tweenMeRepelPos1)
		 	//.addIndicators({name: "me repel pos1___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



		 	/*=================== ME REPELLING DOWN 2 ===================*/
		 	var repelImgArray2 = [];
		 	var repelObj2 = {curImg: 0};

			// === Add "repel" scene
			var maxRepel2 = 20;
			
			while (maxRepel2 < 32){
				var prefix;
				if      (maxRepel2 < 10)  prefix = "./img/pngs/repel2-cropped/repel_0000";
				else if (maxRepel2 < 100) prefix = "./img/pngs/repel2-cropped/repel_000";
				else  			  		  prefix = "./img/pngs/repel2-cropped/repel_00";

				repelImgArray2.push(prefix + maxRepel2 + ".png");
			    maxRepel2++;
			}

			/*=========================================================
				tweenMeRepel1: Repelling, part 2.
			  =========================================================*/
			var tweenMeRepel2 = new TweenMax.to(repelObj2, 0.5,
				{
					curImg: repelImgArray2.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", repelImgArray2[repelObj2.curImg]);
					}
				}
			);
			var sceneMeRepel2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos1.offset() + sceneMeRepelPos1.duration(),
				duration: "20%",
			})
			.setTween(tweenMeRepel2)
			//.addIndicators({name: "me repel 2___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos2 = new TweenMax.fromTo("#img-me", 2,
				// previous
				{
				 top: "43vh",
				 left: "30vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "53vh",
				 left: "24vw",
				}
			);
			var sceneMeRepelPos2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos1.offset() + sceneMeRepelPos1.duration(),
				duration: sceneMeRepel2.duration(),
		    })
		 	.setTween(tweenMeRepelPos2)
		 	//.addIndicators({name: "me repel pos1___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



		 	/*=================== ME REPELLING DOWN 3 ===================*/
		 	var repelImgArray3 = [];
		 	var repelObj3 = {curImg: 0};

			// === Add "repel" scene
			var maxRepel3 = 32;
			
			while (maxRepel3 < 42){
				var prefix;
				if      (maxRepel3 < 10)  prefix = "./img/pngs/repel2-cropped/repel_0000";
				else if (maxRepel3 < 100) prefix = "./img/pngs/repel2-cropped/repel_000";
				else  			  		  prefix = "./img/pngs/repel2-cropped/repel_00";

				repelImgArray3.push(prefix + maxRepel3 + ".png");
			    maxRepel3++;
			}

			/*=========================================================
				tweenMeRepel3: Repelling, part 3.
			  =========================================================*/
			var tweenMeRepel3 = new TweenMax.to(repelObj3, 0.5,
				{
					curImg: repelImgArray3.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", repelImgArray3[repelObj3.curImg]);
					}
				}
			);
			var sceneMeRepel3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos2.offset() + sceneMeRepelPos2.duration(),
				duration: "20%",
			})
			.setTween(tweenMeRepel3)
			//.addIndicators({name: "me repel 3___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos3 = new TweenMax.fromTo("#img-me", 3,
				// previous
				{
				 top: "53vh",
				 left: "24vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "66vh",
				 left: "30vw",
				}
			);
			var sceneMeRepelPos3 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos2.offset() + sceneMeRepelPos2.duration(),
				duration: sceneMeRepel3.duration(),
		    })
		 	.setTween(tweenMeRepelPos3)
		 	//.addIndicators({name: "me repel pos3___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



			/*=================== ME REPELLING DOWN 4 ===================*/
		 	var repelImgArray4 = [];
		 	var repelObj4 = {curImg: 0};

			// === Add "repel" scene
			var maxRepel4 = 42;
			
			while (maxRepel4 < 54){
				var prefix;
				if      (maxRepel4 < 10)  prefix = "./img/pngs/repel2-cropped/repel_0000";
				else if (maxRepel4 < 100) prefix = "./img/pngs/repel2-cropped/repel_000";
				else  			  		  prefix = "./img/pngs/repel2-cropped/repel_00";

				repelImgArray4.push(prefix + maxRepel4 + ".png");
			    maxRepel4++;
			}

			/*=========================================================
				tweenMeRepel4: Repelling, part 4.
			  =========================================================*/
			var tweenMeRepel4 = new TweenMax.to(repelObj4, 0.5,
				{
					curImg: repelImgArray4.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", repelImgArray4[repelObj4.curImg]);
					}
				}
			);
			var sceneMeRepel4 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos3.offset() + sceneMeRepelPos3.duration(),
				duration: "20%"
			})
			.setTween(tweenMeRepel4)
			//.addIndicators({name: "me repel 4___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos4 = new TweenMax.fromTo("#img-me", 4,
				// previous
				{
				 top: "66vh",
				 left: "30vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "76vh",
				 left: "24vw",
				}
			);
			var sceneMeRepelPos4 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos3.offset() + sceneMeRepelPos3.duration(),
				duration: sceneMeRepel4.duration(),
		    })
		 	.setTween(tweenMeRepelPos4)
		 	//.addIndicators({name: "me repel pos4___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);


		 	/*=================== ME REPELLING DOWN 5 ===================*/
		 	var repelImgArray5 = [];
		 	var repelObj5 = {curImg: 0};

			// === Add "repel" scene
			var maxRepel5 = 54;
			
			while (maxRepel5 < 75){
				var prefix;
				if      (maxRepel5 < 10)  prefix = "./img/pngs/repel2-cropped/repel_0000";
				else if (maxRepel5 < 100) prefix = "./img/pngs/repel2-cropped/repel_000";
				else  			  		  prefix = "./img/pngs/repel2-cropped/repel_00";

				repelImgArray5.push(prefix + maxRepel5 + ".png");
			    maxRepel5++;
			}

			/*=========================================================
				tweenMeRepel5: Repelling, part 5.
			  =========================================================*/
			var tweenMeRepel5 = new TweenMax.to(repelObj5, 0.5,
				{
					curImg: repelImgArray5.length - 1,
					roundProps: "curImg",
					immediateRender: true,
					ease: Linear.easeNone,
					onUpdate: function () {
					  $("#img-me").attr("src", repelImgArray5[repelObj5.curImg]);
					}
				}
			);
			var sceneMeRepel5 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos4.offset() + sceneMeRepelPos4.duration(),
				duration: "20%",
			})
			.setTween(tweenMeRepel5)
			//.addIndicators({name: "me repel 5___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos5 = new TweenMax.fromTo("#img-me", 5,
				// previous
				{
				 top: "76vh",
				 left: "24vw",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "106vh",
				 left: "18vw",
				}
			);
			var sceneMeRepelPos5 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos4.offset() + sceneMeRepelPos4.duration(),
				duration: sceneMeRepel5.duration(),
		    })
		 	.setTween(tweenMeRepelPos5)
		 	//.addIndicators({name: "me repel pos5___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);


		 	/*=========================================================
				tweenMeClimbPos6: Last position of me chilling and
				relaxing at the bottom of the cliff.
			  =========================================================*/
		 	var tweenMeRepelPos6 = new TweenMax.fromTo("#img-me", 5,
				// previous
				{
				 top: "106vh",
				 left: "18vw",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "106vh",
				 left: "18vw",
				 onUpdate: function () {
					$("#img-me").attr("src", "./img/gifs/sunbathe-loop.gif");
				 },
				}
			);
			var sceneMeRepelPos6 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half",
				offset: sceneMeRepelPos5.offset() + sceneMeRepelPos5.duration(),
				duration: "30%"
		    })
		 	.setTween(tweenMeRepelPos6)
		 	//.addIndicators({name: "me repel pos6___________________________________", colorStart: "navy", colorEnd: "navy"})
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