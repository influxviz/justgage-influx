/*
	This script is used to format the example page.
*/





$(document).ready(function() {
	checkSidebarRetract();
	
	$(window).resize(function(){
		checkSidebarRetract();
	});
});