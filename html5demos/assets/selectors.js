function fill() {
	var out = [], o = -1;
	out[++o] = '<ul>';
	for (var i = 0; i < 1000; i++) {
		out[++o] = '<li>';
		out[++o] = i;
		out[++o] = '</li>';
	}
	out[++o] = '</ul>';
	$('#first').html( out.join('') );
}

function startTest(){
	fill();

	console.profile("first");
	$('#main');
	$('#main ul');
	$('#main li:eq(10)');
	console.profileEnd("first");

	console.profile("second");
	var second = $('#main');
	second.find('ul');
	second.find('li:eq(100)');
	console.profileEnd("second");

	console.profile("third");
	var third = $('#main');
	var third_ul = second.find('ul');
	third_ul.find('li:eq(100)');
	console.profileEnd("third");

	console.profile("fourth");
	var fourth = $(document.getElementById('main'));
	var fourth_ul = second.find('ul');
	fourth_ul.find('li:eq(100)');
	console.profileEnd("fourth");
}


$().ready(function(){
	$('#start').click(function(){
		startTest();
		return false;
	});
});