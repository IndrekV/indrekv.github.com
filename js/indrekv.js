$().ready(function(){
	$('.section').click(function(){
		$(this).parent().find('ul').addClass('visible');
		return false;
	});
	$('.demo-link').click(function(e){
		e.stopPropagation();
		$('#content').load('html5demos/' + $(this).attr('href').replace('#', '') + '.html body');
		return false;
	});
})

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36988802-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
