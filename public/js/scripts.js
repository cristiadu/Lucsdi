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
		$.get('searchDict/'+$("#inputSearch").val(),function(result){
			if(result!=null)
				$("#content-dict").html(result['text']);
			else
				$("#content-dict").html("<h3>No results to show</h3>");
		
		});

		
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