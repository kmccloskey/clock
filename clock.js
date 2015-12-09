$(document).ready( function() {
	setInterval(function(){
		var date = new Date();
		$(".hour").text(date.getHours());
		$(".minute").text(date.getMinutes());
		$(".second").text(date.getSeconds());
		$(".millisecond").text(date.getMilliseconds());
	}, 1000);

});