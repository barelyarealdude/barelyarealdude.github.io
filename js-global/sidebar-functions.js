// sidebar functionality script

$(function loadNavBar(){
	$("#nav-bar").load("/html-global/nav-bar.html");
});

$(function(){
	$("#collapse-button").click(function(){
		$("#nav-bar").toggle();
	});
});