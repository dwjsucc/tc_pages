$(function() {
	$('.myscore ul li').on('click', function(e) {
		score = $(this).index() + 1;
		$(this).parent("ul").siblings(".scoreNum").html(score + ".0");
		$(this).addClass('active');
		$(this).prevAll("li").addClass('active');
		$(this).nextAll("li").removeClass('active');
	});
	
})