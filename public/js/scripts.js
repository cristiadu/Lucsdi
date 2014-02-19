$(document).ready(function(){

	$("#btn-login").click(function(){
		event.preventDefault();
		$(location).attr('href', "menu");
	});

	$("#btn-signup").click(function(){
		event.preventDefault();
		$(location).attr('href', "signup")
	});

	$("#btn-myprofile").click(function(){
		event.preventDefault();
		$(location).attr('href', "myProfile");
	});

	$("#btn-orgClubs").click(function(){
		event.preventDefault();
		$(location).attr('href', "clubsOrg");
	});

	$("#btn-tutorAdvisor").click(function(){
		event.preventDefault();
		$(location).attr('href', "tutorAdvisor");
	});

	$("#btn-meetup").click(function(){
		event.preventDefault();
		$(location).attr('href', "meetup");
	});

	$("#btn-about").click(function(){
		event.preventDefault();
		$(location).attr('href', "about");
	});

	$("#btn-help").click(function(){
		event.preventDefault();
		$(location).attr('href', "help");
	});

	$("#btn-logout").click(function(){
		event.preventDefault();
		$(location).attr('href', "logout");
	});

	$("#btn-enter").click(function(){
		event.preventDefault();
		$(location).attr('href',"menu");
	});

	$("#btn-nav").click(function(){
		event.preventDefault();
		$(location).attr('href',"navigate");
	});

	$("#btn-dict").click(function(){
		event.preventDefault();
		$(location).attr('href',"translate");
	});

	$("#btn-plan").click(function(){
		event.preventDefault();
		$(location).attr('href',"plan");
	});

	$("#btn-con").click(function(){
		event.preventDefault();
		$(location).attr('href',"connect");
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

function toggleElement(id)
{
    if(document.getElementById(id).style.display == 'none')
    {
        document.getElementById(id).style.display = '';
    }
    else
    {
        document.getElementById(id).style.display = 'none';
    }
}