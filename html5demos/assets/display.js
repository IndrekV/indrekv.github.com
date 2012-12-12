/* For loop with setting html as elements of the array and adding the array with join at the end */
function fillIn() {
	var out = [], o = -1;
	out[++o] = '<ul>';
	for (var i = 0; i < 10000; i++) {
		out[++o] = '<li class="elem">';
		out[++o] = i;
		out[++o] = '</li>';
	}
	out[++o] = '</ul>';
	$('#main').html( out.join('') );
}
fillIn();
$().ready(function(){
	$('#show-all').click(function(){
		$('.elem').removeClass('display visibility');
		return false;
	});
	$('#display-first-10').click(function(){
		$('.elem:gt(10)').addClass('display');
		return false;
	});
	$('#visibility-first-10').click(function(){
		$('.elem:gt(10)').addClass('visibility');
		return false;
	});
});