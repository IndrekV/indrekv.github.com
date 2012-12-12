/* For loop with appending inside the loop */
function forLoopOne(){
	for (var i = 0; i < 10000; i++) {
		$("#for-loop-one").append('<tr><td>' + i + '</td></tr>');
	}
}

/* For loop with appending all the html after the loop */
function forLoopTwo(){
	var html = '';
	for (var i = 0; i < 10000; i++) {
		html += '<tr><td>' + i + '</td></tr>';
	}
	$("#for-loop-two").append(html);
}

/* For loop with appending values tuo array with push and appending array with join */
function forLoopThree(){
	var html = [];
	for (var i = 0; i < 10000; i++) {
		html.push('<tr><td>' + i + '</td></tr>');
	}
	$("#for-loop-three").append(html.join(''));
}

/* For loop with setting html as elements of the array and adding the array with join at the end */
function forLoopFour() {
	var out = [], o = -1;
	out[++o] = '<table><tbody>';
	for (var i = 0; i < 10000; i++) {
		out[++o] = '<tr><td>';
		out[++o] = i;
		out[++o] = '</td></tr>';
	}
	out[++o] = '</tbody></table>';
	$('#for-loop-four').html( out.join('') );
}

function profileLoops(){
	console.profile("first");
	forLoopOne();
	console.profileEnd("first");

	console.profile("second");
	forLoopTwo();
	console.profileEnd("second");

	console.profile("third");
	forLoopThree();
	console.profileEnd("third");

	console.profile("fourth");
	forLoopFour();
	console.profileEnd("fourth");
}

$().ready(function(){
	$('#start').click(function(){
		profileLoops();		
		return false;
	});
});


