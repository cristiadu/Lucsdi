$(document).ready(function(){

	/mobile/i.test(navigator.userAgent) && !location.hash &&
setTimeout(function () {   window.scrollTo(0, 1); }, 1000);

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

	$("#search-dict").click(function(){
		event.preventDefault();

		$("#content-dict").html("<h2>Something</h2>"
							+"<small>some-thing  [suhm-thing]</small>"
							+"<p><strong>pronoun</strong></p>"
							+"<p>1. some thing; a certain undetermined or unspecified thing: Something is wrong there. Something's happening.</p>"
							+"<p>2. an additional amount, as of cents or minutes, that is unknown, unspecified, or forgotten: He charged me ten something for the hat. Our train gets in at two something.</p>"
							+"<p><strong>noun</strong></p>"
							+"<p>3.Informal. a person or thing of some value or consequence: He is really something! This writer has something to say and she says it well.</p>"
							+"<p><strong>adverb</strong></p>"
							+"<p>4.in some degree; to some extent; somewhat.</p>"
							+"<p>5.Informal. to a high or extreme degree; quite: He took on something fierce about my tardiness.</p>");
		$("#content-dict").removeClass("content-dict");
	});

	


});