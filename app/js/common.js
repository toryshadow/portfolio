$(function() {

	$('h1').addClass('animated fadeInDown');
	$('h3').addClass('animated fadeInUp');
	$('p').addClass('animated fadeIn');
	$(".main").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease",         // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
		// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 600,             // AnimationTime let you define how long each section takes to animate
		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function() {
			console.log('before move');
			if ($(window).width() > 769) {
				$('h1').css({'opacity': '0'}).removeClass('animated fadeInDown');
				$('h3').css({'opacity': '0'}).removeClass('animated fadeInUp');
				$('p').css({'opacity': '0'}).removeClass('animated fadeIn');
			}
		},  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function() {
			console.log('after move');
			$('h1').addClass('animated fadeInDown');
			$('h3').addClass('animated fadeInUp');
			$('p').addClass('animated fadeIn');
		},   // This option accepts a callback function. The function will be called after the page moves.
		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: true,                  // You can activate the keyboard controls
		responsiveFallback: 768,        // You can fallback to normal page scroll by defining the width of the browser in which
		// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
		// the browser's width is less than 600, the fallback will kick in.
		direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
	});

	$(".works-carousel").owlCarousel({
		loop:true,
		nav:true,
		navText: ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'] ,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});


	$('.ws_img_cont a').magnificPopup({
		type: 'image'
		// other options
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});