$(document).ready(function(){

	$("#btn-enter").click(function(){
		event.preventDefault();
		$(location).attr('href',"menu.html");
	});

	$("#btn-nav").click(function(){
		event.preventDefault();
		$(location).attr('href',"navigate.html");
	});

	$("#btn-dict").click(function(){
		event.preventDefault();
		$(location).attr('href',"dictionary.html");
	});

	$("#btn-plan").click(function(){
		event.preventDefault();
		$(location).attr('href',"plan.html");
	});

	$("#btn-con").click(function(){
		event.preventDefault();
		$(location).attr('href',"connect.html");
	});


});