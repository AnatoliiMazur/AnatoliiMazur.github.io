$(function() {
	
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 1) {
			$(".header").addClass("header__shrink").show('slow');
		} else {
			$(".header").removeClass("header__shrink");
		}
	});

});
