/*on window finish loading the animations can start based on scroll into and out of sections */

window.onload = function onLoad() {

	//hiding load wheel when page is finished loading
	$('#loader-wrapper').hide();

	///////////////////////////////////////
	// Section 1 - Intro
	///////////////////////////////////////

	// Swaps out header images
	var images = [
		"./resources/img/sections/intro/ATO-Infographic-1-header.jpg",
		"./resources/img/sections/intro/ATO-Infographic-1-header2.jpg",
		"./resources/img/sections/intro/ATO-Infographic-1-header3.jpg"
	]

	var imageHead = document.getElementById("intro-waypoint");
	var i = 0;

	setInterval(function () {
		imageHead.style.backgroundImage = "url(" + images[i] + ")";
		i++;
		if (i == images.length) {
			i = 0;
		}
	}, 800);


	// Calculate the viewport height
	var viewHeight = $(window).height();
	var windowWidth = $(window).width();

	// Set min height for small desktop + up
	if ((viewHeight) > 991) {
		$(".section-intro").css({
			'min-height': viewHeight - 40
		});
	}
	$(window).on('resize', function () {
		var viewHeight = $(window).height();
		var windowWidth = $(window).width();
		console.log(windowWidth);
		// Set min height for small desktop + up
		if (viewHeight > 991) {
			$(".section-intro").css({
				'min-height': viewHeight - 40
			});
		} else {
			$(".section-intro").css({
				'min-height': 'auto'
			});
		}
	});

	var introWaypoint = new Waypoint.Inview({
		element: document.getElementById('intro-waypoint'),
		enter: function () {
			console.log("Enter intro waypoint");
			// animations here
		},
		exited: function () {
			console.log("Exit intro waypoint");
			
		}
	});

	///////////////////////////////////////
	// Section 2 - What is ATO
	///////////////////////////////////////

	var whatIsATOWaypoint = new Waypoint.Inview({
		element: document.getElementById('what-is-ato'),
		enter: function (direction) {
			console.log("Enter 'What is ATO' waypoint");
			$('.fish-hook').addClass('swing');
		},
		exited: function (direction) {
			console.log("Exit 'What is ATO' waypoint");
		}
		
	});



	//////////////////////////////////
	// Section 3 - The ROI of ATO
	//////////////////////////////////

	// Animate barchart
	// var barWaypoint = new Waypoint({
	// 	element: document.getElementById('bar-waypoint'),
	// 	handler: function () {
	// 		console.log("the ROI of ATO Waypoint");
	// 		$('.first-arm').addClass('animate');
	// 		$('.second-arm').addClass('animate');
	// 		$('.third-arm').addClass('animate');
	// 	},
	// 	offset: 'bottom-in-view'
	// });

	
	var barWaypoint = new Waypoint.Inview({
		element: document.getElementById('bar-waypoint'),
		enter: function () {
			console.log(" Enter the ROI of ATO Waypoint");
			$('.first-arm').addClass('animate');
			$('.second-arm').addClass('animate');
			$('.third-arm').addClass('animate');
		},
		exited: function () {
			console.log("Exit the ROI of ATO Waypoint");
		}
	});



	/////////////////////////////////////
	// Section 4 - The Impact of Account Takeover Fraud
	/////////////////////////////////////

	//Animate Impact section
	var impactWaypoint = new Waypoint({
		element: document.getElementById('impact-waypoint'),
		handler: function () {
			console.log("Impact waypoint");
		},
		offset: 'bottom-in-view'
	});


	/////////////////////////////////////
	// Section 5 - Mobile Payment Fraud
	////////////////////////////////////

	var mobileWaypoint = new Waypoint.Inview({
		element: document.getElementById('mobile-fraud'),
		entered: function () {
			console.log("Enter mobile fraud waypoint");
			$('.left-phone').addClass('come-in');
		},
		exited: function () {
			console.log("Exit mobile fraud waypoint");
			// animations here
		}
	});

	/////////////////////////////////////
	// Section 6 - User Behavior Patterns
	/////////////////////////////////////

	var userBehaviorWaypoint = new Waypoint.Inview({
		element: document.getElementById('user-behavior'),
		entered: function (direction) {
			console.log("Enter user behavior waypoint");
			$('.svg').addClass('come-in');
		},
		exited: function (direction) {
			console.log("Enter user behavior waypoint");
			// animations here
		}
	});



	/////////////////////////////////////
	// Section 7 - Get the Insight Guide
	////////////////////////////////////

	var insightGuideWaypoint = new Waypoint.Inview({
		element: document.getElementById('insight-guide'),
		entered: function (direction) {
			console.log("Enter insight guide waypoint");
		},
		exited: function (direction) {
			console.log("Enter insight guide waypoint");
			// animations here
		}
	});


}; //end window onLoad


/* FYI: 
offset: 'bottom-in-view' means when the bottom of said item is in view 
        do the behavior 
entered/exited: allows for a behavior of something when it's in the view port as opposed to enter or exit which might take place before it's in view
				i.e the div may start at the bottom of the vp
*/