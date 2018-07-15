$(window).scroll(function(){
	$('.mov').each(function(){
		const divPos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (divPos < topOfWindow+700) {
			$(this).addClass('fadeInUpBig');
		}
	});
});

$(window).scroll(function(){
	$('.mov-left').each(function(){
		const divPos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (divPos < topOfWindow+600) {
			$(this).addClass('fadeInLeft');
		}
	});
});

$(window).scroll(function(){
	$('.mov-right').each(function(){
		const divPos = $(this).offset().top;
		const topOfWindow = $(window).scrollTop();
		if (divPos < topOfWindow+600) {
			$(this).addClass('fadeInRight');
		}
	});
});