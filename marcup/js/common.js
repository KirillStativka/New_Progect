$(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});
//preolader
$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
//slider 
$(".slider_wrap").owlCarousel({
	autoPlay: 5000,
	navigation: true,
	slideSpeed: 300,
	paginationSpeed: 400,
	singleItem: true,
	items: 1,
	navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
});
//add to header fixed top
$(window).scroll(function () {

	if ($('body').scrollTop() > 100) {
		$('header').addClass('navbar_fixed_top');
	} else {
		$('header').removeClass('navbar_fixed_top');
	}

});
// anchor scroll link
$('a[href^="#"]').click(function () {
	var target = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(target).offset().top }, 800);
	return false;
});
//mobile menu
$('.mobile_menu').click(function () {
	$('.nav_top ul').slideToggle();
});
//hide mobile menu after click
$(document).ready(function () {
	if ($(window).width() < 768) {
		$('.nav_top a').click(function () { $('.nav_top ul').hide() });
	}
});