$(window).on('scroll', function(){
	const topOfWindow = $(this).scrollTop();
	console.log(topOfWindow);
	$('.mov').each(function(){
		let divPos = $(this).offset().top;
		if (divPos < topOfWindow+700) {
			$(this).addClass('fadeInUpBig');
		}
	});
	$('.mov-left').each(function(){
		let divPos = $(this).offset().top;
		if (divPos < topOfWindow+600) {
			$(this).addClass('fadeInLeft');
		}
	});
	$('.mov-right').each(function(){
		let divPos = $(this).offset().top;
			if (divPos < topOfWindow+600) {
			$(this).addClass('fadeInRight');
		}
	});
});

// $(window).scroll(function(){
// 	$('.mov-left').each(function(){
// 		const divPos = $(this).offset().top;
// 		const topOfWindow = $(window).scrollTop();
// 		if (divPos < topOfWindow+600) {
// 			$(this).addClass('fadeInLeft');
// 		}
// 	});
// });

// $(window).scroll(function(){
// 	$('.mov-right').each(function(){
// 		const divPos = $(this).offset().top;
// 		const topOfWindow = $(window).scrollTop();
// 		if (divPos < topOfWindow+600) {
// 			$(this).addClass('fadeInRight');
// 		}
// 	});
// });

