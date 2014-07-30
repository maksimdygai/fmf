$(document).ready(function() {
	$('#clock_london').jClocksGMT({
		offset: '+1'
	});

	$('#clock_ny').jClocksGMT({
		offset: '-4'
	});

	$('#clock_msk').jClocksGMT({
		offset: '+4'
	});

	$('#clock_honkong').jClocksGMT({
		offset: '+8'
	});
});