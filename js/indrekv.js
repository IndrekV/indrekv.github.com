$().ready(function(){
	$('.section').click(function(){
		$(this).parent().find('ul').toggleClass('visible');
	});
});