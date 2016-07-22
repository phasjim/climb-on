(function(angular) {
	"use strict";
	angular.module("portfolioApp", ["angular-responsive","ngFitText"])
		/* =================== CONTROLLER =================== */
		.controller("Controller", ["$scope", "preloader",
			function($scope, preloader) {

			/* =================== ON DOCUMENT LOAD =================== */
 			angular.element(document).ready(function () {
 				// On load, set the width and height
 		    });






 			/* ================ RESIZING SCENE OBJECTS ================ */
    		// http://www.williammalone.com/articles/html5-game-scaling/
   
		    /*=========================================================
		      $scope.sceneDiv: Contains all the general elements of the scene.
		      $scope.layerDiv: Contains the different layers of the scene.
		      =========================================================*/
	      	$scope.sceneDiv = {
		      element: document.getElementById("scene-resize-div"),
		      width: 1420,
		      height: 740,
		    };

		    $scope.layerDiv = {
		      blueSky: document.getElementById("layer-sky-div"),
		      clouds: document.getElementById("layer-clouds-div"),
		      sun: document.getElementById("layer-sun-div"),
		      mountainsSand: document.getElementById("layer-mountains-sand-div"),
		      cliff: document.getElementById("layer-cliff-me-div"),
		      me: document.getElementById("img-me"),
		      home: document.getElementById("layer-home-div"),
		    };

		    $scope.cliffVertPosStart = "55vh";
			$scope.cliffVertPosEnd = "-220vh";	//  55 - 275 = -220
		 	$scope.groundVertPosStart = "280vh";
			$scope.groundVertPosEnd = "5vh";	// 280 - 275 = 5

		    /*=========================================================
		      resizeSceneDiv: Resizes the $scope.sceneDiv based on the 
		                      screen size.
		      =========================================================*/
		    $scope.resizeSceneDiv = function () {      
		      /* ================ RESIZING CONTENT ======================= */
		      var viewport, newSceneWidth, newSceneHeight, newSceneX, newSceneY;

		      // Get the dimensions of the viewport
		      viewport = {
		        width: window.innerWidth,
		        height: window.innerHeight
		      };

		      if ( ($scope.sceneDiv.height < viewport.height) && ($scope.sceneDiv.width < viewport.width) ){
		        newSceneHeight = $scope.sceneDiv.height;
		        newSceneWidth = $scope.sceneDiv.width;
		      }
		      else {
		        if ($scope.sceneDiv.height / $scope.sceneDiv.width > viewport.height / viewport.width) {
		          newSceneHeight = viewport.height;
		          newSceneWidth = newSceneHeight * $scope.sceneDiv.width / $scope.sceneDiv.height;  
		        }
		        else {
		          newSceneWidth = viewport.width;
		          newSceneHeight = newSceneWidth * $scope.sceneDiv.height / $scope.sceneDiv.width;     
		        }
		      }


		      // Resize main scene div
		      $scope.sceneDiv.element.style.width = newSceneWidth + "px";
		      $scope.sceneDiv.element.style.height = newSceneHeight + "px";

		      // Here we need to resize all of the other layers too
		      $scope.layerDiv.blueSky.style.width = "calc(" + newSceneWidth + "px - 10%)";
		      $scope.layerDiv.blueSky.style.height = newSceneHeight + "px";

		      $scope.layerDiv.clouds.style.width = "calc(" + newSceneWidth + "px - 9%)";
		      $scope.layerDiv.clouds.style.height = "calc(" + newSceneHeight + "px - 3%)";
		      $scope.layerDiv.clouds.style.paddingTop = newSceneHeight/3 + "px";

		      $scope.layerDiv.sun.style.width = "calc(" + newSceneWidth + "px - 10%)";
		      $scope.layerDiv.sun.style.height = newSceneHeight + "px";

		      $scope.layerDiv.mountainsSand.style.width = "calc(" + newSceneWidth + "px - 8.5%)";
		      $scope.layerDiv.mountainsSand.style.height = newSceneHeight + "px";

		      $scope.layerDiv.cliff.style.width = newSceneWidth + "px";
		      $scope.layerDiv.cliff.style.height = "calc(" + newSceneHeight + "px + 1.5%)";

		      $scope.layerDiv.me.style.width = newSceneWidth*(3/5) + "px";

		      $scope.layerDiv.home.style.width = "calc(" + newSceneWidth + "px + 5%)";
		      $scope.layerDiv.home.style.height = newSceneHeight + "px";


		      // Resize newSceneX, newSceneY
		      newSceneX = (viewport.width - newSceneWidth) / 2;
		      newSceneY = (viewport.height - newSceneHeight) / 2;

		      console.log("newSceneWidth: " + newSceneWidth + ", newSceneHeight: " + newSceneHeight);
		      console.log("newSceneX: " + newSceneX + ", newSceneY: " + newSceneY);

		      // Set the new padding of the $scope.sceneDiv so it will be centered
		      $scope.sceneDiv.element.style.margin = newSceneY + "px " + newSceneX + "px";


		      // Reset all trigger locations
		      $("#triggerTop").css("top", "0");
		      $("#triggerTop-half").css("top", "50vh");
		      $("#triggerMid").css("top", "100vh");
		      $("#triggerMid-half").css("top", "150vh");
		      $("#triggerBot").css("top", "200vh");
		      $("#triggerBot-half").css("top", "250vh");
		      $("#triggerVeryBot").css("top", "300vh");

		      $scope.cliffVertPosStart = $scope.cliffVertPosStart;
			  $scope.cliffVertPosEnd = $scope.cliffVertPosEnd;
			  $scope.groundVertPosStart = $scope.groundVertPosStart;
			  $scope.groundVertPosEnd = $scope.groundVertPosEnd;
		    };


		    /*=========================================================
		      Watches the "resize" from the user side and resizes it
		      based off the resizeSceneDiv() function
		      =========================================================*/
		    // http://stackoverflow.com/questions/21626357/angularjs-event-on-window-innerwidth-size-change

		    // Initial Call
		    $scope.resizeSceneDiv();
		    $scope.resizeCalls = 0;

			$(window).on("resize.doResize", function (){
				console.log("innerHeight: " + window.innerHeight + " / innerWidth: " + window.innerWidth);

				if($scope.resizeCalls > 10) {
					alert("hey stop dat");
					$scope.resizeCalls = 0;
				}
				$scope.resizeCalls++;

				$scope.$apply(function(){
			  		//do something to update current scope
			  		$scope.resizeSceneDiv();
				});
			});

			$scope.$on("$destroy",function (){
				$(window).off("resize.doResize"); //remove the handler added earlier
			});






			/* =================== SCROLLING FUNCTIONS =================== */
			// https://css-tricks.com/snippets/jquery/smooth-scrolling/
			// Smooth scroll for navigation links

		    // $('a[href*="#"]:not([href="#"])').click(function() {
		    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    //     var target = $(this.hash);
		    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    //     if (target.length) {
		    //       $('html, body').animate({
		    //         scrollTop: target.offset().top
		    //       }, 2000);
		    //       return false;
		    //     }
		    //   }
		    // });

		    // // Smooth scrolling throughout
		    // var $window = $(window);
		    // var scrollTime = 1.8;
		    // var scrollDistance = 170;

		    // $window.on("mousewheel DOMMouseScroll", function(event){

		    //   event.preventDefault(); 

		    //   var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		    //   var scrollTop = $window.scrollTop();
		    //   var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		    //   TweenMax.to($window, scrollTime, {
		    //     scrollTo : { y: finalScroll, autoKill:true },
		    //       ease: Power1.easeOut,
		    //       overwrite: 5              
		    //     });

		    // });





		    /* =================== IMAGE LOADING ARRAYS =================== */
		    // Here we load all of the imgArrays for the animations
			var addToImageArrayMinus = function(array, max, url){
				while (max > 0){
					var prefix;
					if      (max < 10)  prefix = url + "0000";
					else if (max < 100) prefix = url + "000";
					else 				prefix = url + "00";

					array.push(prefix + max + ".png");
				    max--;
				}
			}

			var addToImageArrayPlus = function(array, min, max, url){
				while (min < max){
					var prefix;
					if      (min < 10)  prefix = url + "0000";
					else if (min < 100) prefix = url + "000";
					else 				prefix = url + "00";

					array.push(prefix + min + ".png");
				    min++;
				}
			}

		    /* =================== CLIMB IMG ARRAY =================== */
		    var climbImgArray = [];
		 	var climbObj = {curImg: 0};

			// === Add "sitting" scene
			climbImgArray.push("./img/gifs/sitting-loop.gif");

			// === Then, add "cheers" scene
			var maxCheers = 71;
			addToImageArrayMinus(climbImgArray, maxCheers, "./img/pngs/cheers/cheers_");

			var maxClimb = 241;
			addToImageArrayMinus(climbImgArray, maxClimb, "./img/pngs/climb/climb_");

			// === Add "Welcome" gif to climbImgArray
			climbImgArray.push("./img/gifs/welcome-loop.gif");


		 	/* =================== REPEL IMG ARRAYS =================== */
		 	// === Add "repel1" scene
		 	var repelImgArray1 = [];
		 	var repelObj1 = {curImg: 0};

		 	// === Add "Welcome" gif to repelImgArray1
			repelImgArray1.push("./img/gifs/welcome-loop.gif");

			var maxRepel1 = 1;
			addToImageArrayPlus(repelImgArray1, maxRepel1, 20, "./img/pngs/repel/repel_");
			

			// === Add "repel2" scene
			var repelImgArray2 = [];
		 	var repelObj2 = {curImg: 0};

			var maxRepel2 = 20;
			addToImageArrayPlus(repelImgArray2, maxRepel2, 32, "./img/pngs/repel/repel_");


			// === Add "repel3" scene
		 	var repelImgArray3 = [];
		 	var repelObj3 = {curImg: 0};

			var maxRepel3 = 32;
			addToImageArrayPlus(repelImgArray3, maxRepel3, 42, "./img/pngs/repel/repel_");
			

			// === Add "repel4" scene
		 	var repelImgArray4 = [];
		 	var repelObj4 = {curImg: 0};

			var maxRepel4 = 42;
			addToImageArrayPlus(repelImgArray4, maxRepel4, 54, "./img/pngs/repel/repel_");

			
			// === Add "repel4" scene
		 	var repelImgArray5 = [];
		 	var repelObj5 = {curImg: 0};

			var maxRepel5 = 54;
			addToImageArrayPlus(repelImgArray5, maxRepel5, 75, "./img/pngs/repel/repel_");
			
			// === Add "Sunbathe" gif to maxRepel5
			repelImgArray5.push("./img/gifs/sunbathe-loop.gif");





			/* =================== IMAGE LOADING FUNCTIONS =================== */
		    // http://www.bennadel.com/blog/2597-preloading-images-in-angularjs-with-promises.htm
		    // I keep track of the state of the loading images.
            $scope.isLoading = true;
            $scope.isSuccessful = false;
            $scope.percentLoaded = 0;
            
            // Populate images in the array
            $scope.imageLocations = [];

            $scope.imageLocations = $scope.imageLocations.concat(climbImgArray).concat(repelImgArray1)
            											 .concat(repelImgArray2).concat(repelImgArray3)
            											 .concat(repelImgArray4).concat(repelImgArray5);


            // Preload the images; then, update display when returned.
            preloader.preloadImages( $scope.imageLocations ).then(
                function handleResolve( imageLocations ) {
                    // Loading was successful.
                    $scope.isLoading = false;
                    $scope.isSuccessful = true;
                    console.info( "Preload Successful" );
                },
                function handleReject( imageLocation ) {
                    // Loading failed on at least one image.
                    $scope.isLoading = false;
                    $scope.isSuccessful = false;
                    console.error( "Image Failed", imageLocation );
                    console.info( "Preload Failure" );
                },
                function handleNotify( event ) {
                    $scope.percentLoaded = event.percent;
                    // console.info( "Percent loaded:", event.percent );
                }
            );


            /* =================== WHEN IMAGES LOADED, JUMP TO MIDDLE =================== */
   //          $scope.$watch('isLoading', function() {
   //          	// if not loading, and successfully loaded
			//     if(!$scope.isLoading && $scope.isSuccessful){
			//     	var fadeTime = 500;

			//     	// scroll to middle
			//     	setTimeout(function() {
			// 		    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			// 			$('html, body').animate({scrollTop: height}, fadeTime);
			// 		}, 10);

			//     	// fade body
			// 		setTimeout(function() {
			// 			$(".web-container").addClass("fade-in");
			// 		}, fadeTime);
					
			//     }
			// });














            /*===================================================================================*/
			/*=================================== SCROLLMAGIC ===================================*/
			/*===================================================================================*/

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
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 50,
				duration: 80,
		    })
		 	.setTween(tweenWork1)
		 	//.addIndicators({name: "my work_________________________________", colorStart: "green", colorEnd: "green"})
		 	.addTo(controller);


		 	var tweenWork2 = new TweenMax.fromTo(".layer-my-work", 0.2,
				// previous
				{
				 left: "10%",
				 ease: Circ.easeNone
				},
				// next
				{
				left: "120%",
				}
			);
			var sceneWork2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2-half"
		    })
		 	.setTween(tweenWork2)
		 	//.addIndicators({name: "my work - hide right_________________________________", colorStart: "green", colorEnd: "green"})
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
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 55,
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
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 95,
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
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 135,
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
				 left: "13%",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0.9,
				 left: "10%"
				}
			);
			var sceneName1 = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerMid-half",
				duration: "22%"
		    })
		 	.setTween(tweenName1)
		 	//.addIndicators({name: "name upper_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenTagline1 = new TweenMax.fromTo(".content-tagline", 0.65,
				// previous
				{opacity: 0,
				 left: "43%",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0.9,
				 left: "45%"
				}
			);
			var sceneTagline1 = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerMid-half",
				duration: "22%"
		    })
		 	.setTween(tweenTagline1)
		 	//.addIndicators({name: "name upper_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenName2 = new TweenMax.fromTo(".content-name", 0.65,
				// previous
				{
				 opacity: 0.9,
				 left: "10%",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0,
				 left: "7%",
				}
			);
			var sceneName2 = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerBot",
				offset: 50,
				duration: "22%"
		    })
		 	.setTween(tweenName2)
		 	//.addIndicators({name: "name lower_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);


		 	var tweenTagline2 = new TweenMax.fromTo(".content-tagline", 0.65,
				// previous
				{
				 opacity: 0.9,
				 left: "45%",
				 ease: Expo.easeNone
				},
				// next
				{
				 opacity: 0,
				 left: "47%",
				}
			);
			var sceneTagline2 = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerBot",
				offset: 50,
				duration: "22%"
		    })
		 	.setTween(tweenTagline2)
		 	//.addIndicators({name: "name lower_______________", colorStart: "purple", colorEnd: "purple"})
		 	.addTo(controller);



			/*===================================================================================*/
			/*================================= ABOUT ME CONTENT ================================*/
			/*===================================================================================*/
			var tweenAboutMeContent = new TweenMax.fromTo("#content-about-me", 0.65,
				// previous
				{opacity: 0,
				 top: "15.5%",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 1,
				 top: "13.5%"
				}
			);
			var sceneAboutMeContent = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerBot-half",
				offset: 30,
		    })
		 	.setTween(tweenAboutMeContent)
		 	//.addIndicators({name: "about me content div___________________________________", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);


		 	var tweenAboutMeTitle = new TweenMax.fromTo("#title-about-me", 0.65,
				// previous
				{opacity: 0,
				 left: "4%",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 1,
				 left: "5%"
				}
			);
			var sceneAboutMeTitle = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerBot-half",
				offset: 30,
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
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 60,
				duration: "40%"
		    })
		 	.setTween(tweenSun)
		 	//.addIndicators({name: "sun~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "lightyellow", colorEnd: "lightyellow"})
		 	.addTo(controller);


		 	var tweenClouds = new TweenMax.fromTo(".layer-mask-clouds", 1,
				// previous
				{opacity: 1,
				 top: "2%",
				 ease: Circ.easeNone
				},
				// next
				{
				 opacity: 0,
			     top: "0%"
				}
			);
			var sceneClouds = new ScrollMagic.Scene({
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 60,
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
				{
				 top: $scope.cliffVertPosStart,
				 ease: Power0.easeNone
				},
				// next
				{
				 top: $scope.cliffVertPosEnd,
				}
			);
			var sceneCliffVert = new ScrollMagic.Scene({
				triggerHook: 0,
				triggerElement: "#triggerTop",
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
				{
				 left: "-65%",
				 ease: Power0.easeNone
				},
				// next
				{
				 left: "-60%",
				}
			);
			var sceneCliffHor1 = new ScrollMagic.Scene({
				triggerHook: sceneCliffVert.triggerHook(),
				triggerElement: sceneCliffVert.triggerElement(),
				duration: sceneCliffVert.duration()
		    })
		 	.setTween(tweenCliffHor1)
		 	//.addIndicators({name: "cliff horizontal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "grey", colorEnd: "grey"})
		 	.addTo(controller);



		 	/*=================== MOUNTAINS + SAND ===================*/
			/*=========================================================
				tweenMountainsSandVert: Moves the mountains left/right and
				also up/down.
			  =========================================================*/
			var tweenMountainsSandVert = new TweenMax.fromTo("#div-ground-1", 1,
				// previous
				{
				 scale: 2,
				 top: $scope.groundVertPosStart,
				 left: "0%",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: $scope.groundVertPosEnd,
				 left: "-10%",
				}
			);
			var sceneMountainsSandVert = new ScrollMagic.Scene({
				triggerHook: sceneCliffVert.triggerHook(),
				triggerElement: sceneCliffVert.triggerElement(),
				duration: sceneCliffVert.duration()
		    })
		 	.setTween(tweenMountainsSandVert)
		 	//.addIndicators({name: "mountain~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", colorStart: "purple", colorEnd: "purple"})
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
				triggerHook: 0,
				triggerElement: "#triggerTop-half",
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
				triggerHook: sceneFlowerLight1.triggerHook(),
				triggerElement: sceneFlowerLight1.triggerElement(),
				duration: sceneFlowerLight1.duration()
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
				triggerHook: sceneFlowerLight1.triggerHook(),
				triggerElement: sceneFlowerLight1.triggerElement(),
				duration: sceneFlowerLight1.duration()
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
				triggerHook: sceneFlowerLight1.triggerHook(),
				triggerElement: sceneFlowerLight1.triggerElement(),
				duration: sceneFlowerLight1.duration()
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
				triggerHook: sceneFlowerLight1.triggerHook(),
				triggerElement: sceneFlowerLight1.triggerElement(),
				duration: sceneFlowerLight1.duration()
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
				triggerHook: sceneFlowerLight1.triggerHook(),
				triggerElement: sceneFlowerLight1.triggerElement(),
				duration: sceneFlowerLight1.duration()
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
            	 left: "78%",
              	 top: "175%",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass1 = new ScrollMagic.Scene({
				triggerHook: 100,
				triggerElement: "#triggerVeryBot",
		    })
		 	.setTween(tweenGrass1)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);


		 	var tweenGrass2 = new TweenMax.fromTo("#img-grass2", 0.5,
				// previous
				{scale: 0.1,
				 rotationX: 90,
				 transformOrigin: "left bottom",
     			 left: "24%",
            	 top: "158%",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass2 = new ScrollMagic.Scene({
				triggerHook: sceneGrass1.triggerHook(),
				triggerElement: sceneGrass1.triggerElement(),
		    })
		 	.setTween(tweenGrass2)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);


		 	var tweenGrass3 = new TweenMax.fromTo("#img-grass3", 0.5,
				// previous
				{scale: 0.1,
				 rotationX: 90,
				 transformOrigin: "left bottom",
				 left: "37%",
            	 top: "202%",
				 ease: Linear.easeNone
				},
				// next
				{
				 rotationX: 0,
				}
			);
			var sceneGrass3 = new ScrollMagic.Scene({
				triggerHook: sceneGrass1.triggerHook(),
				triggerElement: sceneGrass1.triggerElement(),
		    })
		 	.setTween(tweenGrass3)
		 	//.addIndicators({name: "grass_____________________________________", colorStart: "lightgreen", colorEnd: "lightgreen"})
		 	.addTo(controller);



		 	/*===================================================================================*/
			/*=================================== ME ANIMATION ==================================*/
			/*===================================================================================*/

		 	/*=================== ME CLIMBING DOWN ===================*/

			/*=========================================================
				tweenMeClimbPos0: Zero position of me sitting at the top.
			  =========================================================*/
			var tweenMeClimbPos0 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "-6%",
	             left: "45%",
	             onUpdate: function () {
					$("#img-me").attr("src", "./img/gifs/sitting-loop.gif");
				 },
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "-6%",
	             left: "45%",
				}
			);
			var sceneMeClimbPos0 = new ScrollMagic.Scene({
				triggerHook: 0,
				triggerElement: "#triggerTop",
				offset: 75,
				duration: "20%"
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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos0.offset(),
				duration: "90%"
			})
			.setTween(tweenMeClimb)
			//.addIndicators({name: "me climbing down", colorStart: "orange", colorEnd: "orange"})
			.addTo(controller);


			/*=========================================================
				tweenMeClimbPos1-5: Animates me going up/down, left/right.
			  =========================================================*/
			var tweenMeClimbPos1 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "-6%",
	             left: "45%",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "0%",
				 left: "45%",
				}
			);
			var sceneMeClimbPos1 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos0.offset() + sceneMeClimbPos0.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos1)
		 	//.addIndicators({name: "me climbing down pos1_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	var tweenMeClimbPos2 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "0%",
				 left: "45%",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "13%",
				 left: "35%",
				}
			);
			var sceneMeClimbPos2 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos1.offset() + sceneMeClimbPos1.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos2)
		 	//.addIndicators({name: "me climbing down pos2_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	var tweenMeClimbPos3 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "13%",
				 left: "35%",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "20%",
				 left: "35%",
				}
			);
			var sceneMeClimbPos3 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos2.offset() + sceneMeClimbPos2.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos3)
		 	//.addIndicators({name: "me climbing down pos3_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	var tweenMeClimbPos4 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "20%",
				 left: "35%",
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "26%",
				 left: "38%",
				}
			);
			var sceneMeClimbPos4 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos3.offset() + sceneMeClimbPos3.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos4)
		 	//.addIndicators({name: "me climbing down pos4_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	var tweenMeClimbPos5 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "26%",
				 left: "38%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "35%",
				 left: "43%",
				}
			);
			var sceneMeClimbPos5 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos4.offset() + sceneMeClimbPos4.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos5)
		 	//.addIndicators({name: "me climbing down pos5_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);


		 	var tweenMeClimbPos6 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "35%",
				 left: "43%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "44%",
				 left: "49%",
				}
			);
			var sceneMeClimbPos6 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos5.offset() + sceneMeClimbPos5.duration(),
				duration: "10%"
		    })
		 	.setTween(tweenMeClimbPos6)
		 	//.addIndicators({name: "me climbing down pos6_________", colorStart: "magenta", colorEnd: "magenta"})
		 	.addTo(controller);



		 	/*=================== ME WELCOME ===================*/

		 	/*=========================================================
				tweenMeWelcome: Just hanging out and waving at newcomers.
			  =========================================================*/
			var tweenMeWelcome = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "44%",
				 left: "49%",
	             onUpdate: function () {
					$("#img-me").attr("src", "./img/gifs/welcome-loop.gif");
				 },
				 ease: Power0.easeNone
				},
				// next
				{
				 top: "44%",
				 left: "49%",
				}
			);
			var sceneMeWelcome = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeClimbPos6.offset() + sceneMeClimbPos6.duration(),
				duration: "20%"
		    })
		 	.setTween(tweenMeWelcome)
		 	//.addIndicators({name: "me welcome_________________________", colorStart: "brown", colorEnd: "brown"})
		 	.addTo(controller);



			/*=================== ME REPELLING DOWN 1 ===================*/

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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeWelcome.offset() + sceneMeWelcome.duration(),
				duration: "12%"
			})
			.setTween(tweenMeRepel1)
			//.addIndicators({name: "me repel pos1___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos1 = new TweenMax.fromTo("#img-me", 1,
				// previous
				{
				 top: "44%",
				 left: "49%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "50%",
				 left: "56%",
				}
			);
			var sceneMeRepelPos1 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeWelcome.offset() + sceneMeWelcome.duration(),
				duration: sceneMeRepel1.duration(),
		    })
		 	.setTween(tweenMeRepelPos1)
		 	//.addIndicators({name: "me repel pos1___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



		 	/*=================== ME REPELLING DOWN 2 ===================*/

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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos1.offset() + sceneMeRepelPos1.duration(),
				duration: "13%",
			})
			.setTween(tweenMeRepel2)
			//.addIndicators({name: "me repel pos2___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos2 = new TweenMax.fromTo("#img-me", 2,
				// previous
				{
				 top: "50%",
				 left: "56%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "55%",
				 left: "48.5%",
				}
			);
			var sceneMeRepelPos2 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos1.offset() + sceneMeRepelPos1.duration(),
				duration: sceneMeRepel2.duration(),
		    })
		 	.setTween(tweenMeRepelPos2)
		 	//.addIndicators({name: "me repel pos2___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



		 	/*=================== ME REPELLING DOWN 3 ===================*/

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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos2.offset() + sceneMeRepelPos2.duration(),
				duration: "13%",
			})
			.setTween(tweenMeRepel3)
			//.addIndicators({name: "me repel pos3___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos3 = new TweenMax.fromTo("#img-me", 3,
				// previous
				{
				 top: "55%",
				 left: "48.5%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "60%",
				 left: "55%",
				}
			);
			var sceneMeRepelPos3 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos2.offset() + sceneMeRepelPos2.duration(),
				duration: sceneMeRepel3.duration(),
		    })
		 	.setTween(tweenMeRepelPos3)
		 	//.addIndicators({name: "me repel pos3___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



			/*=================== ME REPELLING DOWN 4 ===================*/

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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos3.offset() + sceneMeRepelPos3.duration(),
				duration: "13.5%"
			})
			.setTween(tweenMeRepel4)
			//.addIndicators({name: "me repel 4___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos4 = new TweenMax.fromTo("#img-me", 4,
				// previous
				{
				 top: "60%",
				 left: "55%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "68%",
				 left: "50%",
				}
			);
			var sceneMeRepelPos4 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos3.offset() + sceneMeRepelPos3.duration(),
				duration: sceneMeRepel4.duration(),
		    })
		 	.setTween(tweenMeRepelPos4)
		 	//.addIndicators({name: "me repel pos4___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);


		 	/*=================== ME REPELLING DOWN 5 ===================*/

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
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos4.offset() + sceneMeRepelPos4.duration(),
				duration: "13.5%",
			})
			.setTween(tweenMeRepel5)
			//.addIndicators({name: "me repel 5___________________________________", colorStart: "navy", colorEnd: "navy"})
			.addTo(controller);


			var tweenMeRepelPos5 = new TweenMax.fromTo("#img-me", 5,
				// previous
				{
				 top: "68%",
				 left: "50%",
				 ease: Circ.easeOut
				},
				// next
				{
				 top: "73%",
				 left: "45%",
				}
			);
			var sceneMeRepelPos5 = new ScrollMagic.Scene({
				triggerHook: sceneMeClimbPos0.triggerHook(),
				triggerElement: sceneMeClimbPos0.triggerElement(),
				offset: sceneMeRepelPos4.offset() + sceneMeRepelPos4.duration(),
				duration: sceneMeRepel5.duration(),
		    })
		 	.setTween(tweenMeRepelPos5)
		 	//.addIndicators({name: "me repel pos5___________________________________", colorStart: "navy", colorEnd: "navy"})
		 	.addTo(controller);



		}])

		.factory(
			"preloader",
            function( $q, $rootScope ) {
                // I manage the preloading of image objects. Accepts an array of image URLs.
                function Preloader( imageLocations ) {
                    // I am the image SRC values to preload.
                    this.imageLocations = imageLocations;
                    // As the images load, we'll need to keep track of the load/error
                    // counts when announing the progress on the loading.
                    this.imageCount = this.imageLocations.length;
                    this.loadCount = 0;
                    this.errorCount = 0;
                    // I am the possible states that the preloader can be in.
                    this.states = {
                        PENDING: 1,
                        LOADING: 2,
                        RESOLVED: 3,
                        REJECTED: 4
                    };
                    // I keep track of the current state of the preloader.
                    this.state = this.states.PENDING;
                    // When loading the images, a promise will be returned to indicate
                    // when the loading has completed (and / or progressed).
                    this.deferred = $q.defer();
                    this.promise = this.deferred.promise;
                }
                // ---
                // STATIC METHODS.
                // ---
                // I reload the given images [Array] and return a promise. The promise
                // will be resolved with the array of image locations.
                Preloader.preloadImages = function( imageLocations ) {
                    var preloader = new Preloader( imageLocations );
                    return( preloader.load() );
                };
                // ---
                // INSTANCE METHODS.
                // ---
                Preloader.prototype = {
                    // Best practice for "instnceof" operator.
                    constructor: Preloader,
                    // ---
                    // PUBLIC METHODS.
                    // ---
                    // I determine if the preloader has started loading images yet.
                    isInitiated: function isInitiated() {
                        return( this.state !== this.states.PENDING );
                    },
                    // I determine if the preloader has failed to load all of the images.
                    isRejected: function isRejected() {
                        return( this.state === this.states.REJECTED );
                    },
                    // I determine if the preloader has successfully loaded all of the images.
                    isResolved: function isResolved() {
                        return( this.state === this.states.RESOLVED );
                    },
                    // I initiate the preload of the images. Returns a promise.
                    load: function load() {
                        // If the images are already loading, return the existing promise.
                        if ( this.isInitiated() ) {
                            return( this.promise );
                        }
                        this.state = this.states.LOADING;
                        for ( var i = 0 ; i < this.imageCount ; i++ ) {
                            this.loadImageLocation( this.imageLocations[ i ] );
                        }
                        // Return the deferred promise for the load event.
                        return( this.promise );
                    },
                    // ---
                    // PRIVATE METHODS.
                    // ---
                    // I handle the load-failure of the given image location.
                    handleImageError: function handleImageError( imageLocation ) {
                        this.errorCount++;
                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {
                            return;
                        }
                        this.state = this.states.REJECTED;
                        this.deferred.reject( imageLocation );
                    },
                    // I handle the load-success of the given image location.
                    handleImageLoad: function handleImageLoad( imageLocation ) {
                        this.loadCount++;
                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {
                            return;
                        }
                        // Notify the progress of the overall deferred. This is different
                        // than Resolving the deferred - you can call notify many times
                        // before the ultimate resolution (or rejection) of the deferred.
                        this.deferred.notify({
                            percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
                            imageLocation: imageLocation
                        });
                        // If all of the images have loaded, we can resolve the deferred
                        // value that we returned to the calling context.
                        if ( this.loadCount === this.imageCount ) {
                            this.state = this.states.RESOLVED;
                            this.deferred.resolve( this.imageLocations );
                        }
                    },
                    // I load the given image location and then wire the load / error
                    // events back into the preloader instance.
                    // --
                    // NOTE: The load/error events trigger a $digest.
                    loadImageLocation: function loadImageLocation( imageLocation ) {
                        var preloader = this;
                        // When it comes to creating the image object, it is critical that
                        // we bind the event handlers BEFORE we actually set the image
                        // source. Failure to do so will prevent the events from proper
                        // triggering in some browsers.
                        var image = $( new Image() )
                            .load(
                                function( event ) {
                                    // Since the load event is asynchronous, we have to
                                    // tell AngularJS that something changed.
                                    $rootScope.$apply(
                                        function() {
                                            preloader.handleImageLoad( event.target.src );
                                            // Clean up object reference to help with the
                                            // garbage collection in the closure.
                                            preloader = image = event = null;
                                        }
                                    );
                                }
                            )
                            .error(
                                function( event ) {
                                    // Since the load event is asynchronous, we have to
                                    // tell AngularJS that something changed.
                                    $rootScope.$apply(
                                        function() {
                                            preloader.handleImageError( event.target.src );
                                            // Clean up object reference to help with the
                                            // garbage collection in the closure.
                                            preloader = image = event = null;
                                        }
                                    );
                                }
                            )
                            .prop( "src", imageLocation )
                        ;
                    }
                };
                // Return the factory instance.
                return( Preloader );
            }
		)

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

})(window.angular);