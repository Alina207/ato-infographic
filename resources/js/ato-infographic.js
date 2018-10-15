/* Smooth Scroll --swapped out the "a" to "area" which is used in the image navigation at top */
$(function () {
	$('area[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 75
				}, 1000);
				return false;
			}
		}
	});
});

/*on window finish loading the animations can start based on scroll into and out of sections */

window.onload = function onLoad() {

	//hiding load wheel when page is finished loading
	$('#loader-wrapper').hide();

		var options = {
			useEasing: false,
			  useGrouping: true,
			suffix: '%'
		};

			///////////////////////////////////////
			// Section 1 - Intro
			///////////////////////////////////////

			// fade in intro iphone image after load wheel hides
			$('.fadein').fadeIn(3000);
			//allows for image navigation
			$('img[usemap]').rwdImageMaps();

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

			var landingWaypoint = new Waypoint.Inview({
				element: document.getElementById('intro-waypoint'),
				enter: function () {
					// any intro animations
				},
				exited: function () {
					// any intro animations
				}
			});

			///////////////////////////////////////
			// Section 2 - What is ATO
			///////////////////////////////////////

			var stat1 = new CountUp("stat-1", 0, 80, 0, 2, options);
			var stat2 = new CountUp("stat-2", 0, 20, 0, 2, options);

			var statWaypoint1 = new Waypoint({
				element: document.getElementById('what-is-ato'),
				handler: function () {
					stat1.start();
					stat2.start();
				},
				offset: 'bottom-in-view'
			});

			var trafficWaypoint = new Waypoint.Inview({
				element: document.getElementById('what-is-ato'),
				enter: function () {
					// any car animations
				},
				exited: function () {
					// any car animations
				}
			});



			//////////////////////////////////
			// Section 3 - The ROI of ATO
			//////////////////////////////////

			// Initiate bar stats
			var stat5 = new CountUp("stat-5", 0, 20, 0, 2, options);
			var stat6 = new CountUp("stat-6", 0, 46, 0, 2, options);
			var stat7 = new CountUp("stat-7", 0, 70, 0, 2, options);

			//Animate barchart
			var barWaypoint = new Waypoint({
				element: document.getElementById('bar-waypoint'),
				handler: function () {
					$('.bar').addClass('animate');
					$('.bar p').addClass('fade-in');
					/*Bar stats*/
					stat5.start();
					stat6.start();
					stat7.start();
				},
				offset: 'bottom-in-view'
			});

			

			/////////////////////////////////////
			// Section 4 - The Impact of Account Takeover Fraud
			/////////////////////////////////////

			// Initiate bar stats
			var stat8 = new CountUp("stat-8", 0, 30, 0, 2, options);
			var stat9 = new CountUp("stat-9", 0, 63, 0, 2, options);
			var stat10 = new CountUp("stat-10", 0, 74, 0, 2, options);

			//Animate Impact section
			var impactWaypoint = new Waypoint({
				element: document.getElementById('impact-waypoint'),
				handler: function () {
					/*Stats*/
					stat8.start();
					stat9.start();
					stat10.start();
				},
				offset: 'bottom-in-view'
			});


			/////////////////////////////////////
			// Section 5 - Mobile Payment Fraud
			////////////////////////////////////

			var mobileWaypoint = new Waypoint.Inview({
				element: document.getElementById('mobile-fraud'),
				entered: function (direction) {
					/*fadein*/
					$('.bottom-phone').fadeIn(3000);
					$('#phone-cta').fadeIn(4000);
				},
				exited: function (direction) {
					// stat animations

				}
			});

			/////////////////////////////////////
			// Section 6 - User Behavior Patterns
			/////////////////////////////////////



			/////////////////////////////////////
			// Section 7 - Get the Insight Guide
			////////////////////////////////////


			
}; //end window onLoad
