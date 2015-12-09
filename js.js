$(document).ready( function() {

// var uNoun = $("noun").val()

// $('#noun').text(function(){
// 	uNoun = $('#noun').val()
// }); 

$("#lib-button").on("click", function() {

	var noun = $("#noun").val();
	var adj = $('#adjective').val();
var person = $('#person').val();
	$($('#story').html( function() {
		return ('The ' + noun + ' was bright ' + adj + ' so ' + person + ' screamed like a girl.')
}))
	// $("#lib-button").on("click", function() {
	// 	var person = $('#person').val();
	// $($('#story2').html( function() {
	// 	return ('the persons name is ' + person + ' .')
	// 	}))
	});
});