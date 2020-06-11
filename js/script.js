var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	mouseDrag: true,
	center:true,
	autoplayTimeout: 3000,
	responsiveClass: true,
	responsive:{
        0:{
            items:1,
        }
    }
});
var owl = $('.owl-carousels');
owl.owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	mouseDrag: true,
	center:true,
	autoplayTimeout: 1000,
	responsiveClass: true,
	responsive:{
        0:{
            items:1,
        },
       1000:{
            items:3,
        }
    }
});
new WOW().init();
$(document).ready(function() {
	$(".se-pre-con").fadeOut("slow");
	$('.toggle').click(function() {
		$('nav').toggleClass('active');
	});
	$(window).scroll(function() { // check if scroll event happened
		if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
			$(".navbars").css("background-color", "#2d2c2c"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
			$(".navbars").css("left", "0");
		} else {
			$(".navbars").css("background-color", "transparent"); // if not, change it back to transparent
		}
		if ($(document).scrollTop() > 200){
			$(".navbars").css("left", "100%");
		}
	});
	$('.toggle').click(function() {
		$('nav').toggleClass('menu')
	});
});