$(function(){
		
	$('#counter').countdown({
		timestamp	: (new Date()).getTime() + 40*24*60*60*1000
	});
	
});
