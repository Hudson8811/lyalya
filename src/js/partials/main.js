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

	$(".btn").append("<span>");
	$(".btn").on("mouseenter", function (e) {
		var i = $(this),
				n = i.offset(),
				s = e.pageX - n.left,
				a = e.pageY - n.top;
		i.find("span").css({ top: a, left: s });
	}).on("mouseout", function (e) {
		var i = $(this),
				n = i.offset(),
				s = e.pageX - n.left,
				a = e.pageY - n.top;
		i.find("span").css({ top: a, left: s });
	});


	AOS.init({
		offset: 120,
		once: true,
		duration: 1000,
		easing: "ease"
	})

	$('.header__burger').on('click',function (){
		event.preventDefault();
		$('.header__menu').addClass('active');
	})
	$('.hm__close').on('click',function (){
		event.preventDefault();
		$('.header__menu').removeClass('active');
	})

	let delay = 100;
	$('.hm__item').each(function (){
		delay += 50;
		$(this).css('transition-delay',delay/1000+'s');
	});

	document.querySelectorAll('img')
			.forEach((img) =>
					img.addEventListener('load', () =>
							AOS.refresh()
					)
			);
})();


$(window).on('load',function (){
	let currentTimer = new Date();

	let diff = currentTimer - timerStart;
	let diffSec = Math.round(diff / 100);
	if (diffSec < 13){
		setTimeout(function (){
			$('#preloader').fadeOut(700,function (){
				$('#preloader').remove();
			});
		},1300-diffSec*100);
	} else {
		$('#preloader').fadeOut(700,function (){
			$('#preloader').remove();
		})
	}
	AOS.refresh();
});