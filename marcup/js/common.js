$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
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

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(".slider_wrap").owlCarousel({
	autoPlay: 5000,
	navigation: true,
	slideSpeed: 300,
	paginationSpeed: 400,
	singleItem: true,
	items: 1,
	navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
});
$(window).scroll(function () {

	if ($('body').scrollTop() > 100) {
		$('header').addClass('navbar_fixed_top');
	} else {
		$('header').removeClass('navbar_fixed_top');
	}

});

$('a[href^="#"]').click(function () {
	var target = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(target).offset().top }, 800);
	return false;
});
