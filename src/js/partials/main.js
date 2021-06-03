(function() {
	var header = $('.js_fixed-header');
	var classes = 'header--fixed';
	var headerHeight = header.outerHeight();
	var scroll = $(window).scrollTop();
	var isScroll = false;

	$(window).on('scroll', function() {
		scroll = $(window).scrollTop();

		if (scroll >= headerHeight) {
			isScroll = true;

			headerHeight = isScroll ? header.outerHeight() : null;
			header.addClass(classes);

			if (!header.hasClass('is-fixed')) {
				header.css({'top': -headerHeight + 'px', 'transform': 'translateY(' + headerHeight + 'px)'}).addClass('is-fixed');
			}
		} else {
			isScroll = false;
			header.removeClass(classes + ' is-fixed').removeAttr('style');
		}
	});

	const swiper = new Swiper('.swiper-container', {
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});




	AOS.init({
		disable: "mobile",
		offset: 120,
		once: true,
		duration: 1000,
		easing: "ease"
	})
})();