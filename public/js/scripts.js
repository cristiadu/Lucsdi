$(document).ready(function(){

	$("#btn-login").click(function(){
		event.preventDefault();
		$.post('login',{
			"username" : $("#username").val(),
			'password': $("#password").val()
		},function(result){
				if(result!=null) {
					$(location).attr('href', "myProfile");
					$.get('myProfile/'+$("#inputSearch").val().toLowerCase(),function(result)
					$("#my-profile").html(result['firstname']);
					$("#my-profile").html(result['lastname']);
					$("#my-profile").html(result['bio']);
					$("#my-profile").html(result['languages']);
					$("#my-profile").html(result['home']);
					$("#my-profile").html(result['classes']);
					$("#my-profile").html(result['interests']);
				}
				else
					$("#error").html("<small class='red'>username or password incorrect</small>");
			
			});
	});

	$("#btn-signup").click(function(){
		event.preventDefault();
		$(location).attr('href', "signup");
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

	$("#btn-meetupconfirm").click(function(){
		event.preventDefault();
		$(location).attr('href',"connect-meetupconfirm");
	});

	$("#btn-confirmAdvisor").click(function(){
		event.preventDefault();
		$(location).attr('href',"confirmation-advisor");
	});

	$("#btn-joinMeetup").click(function(){
		event.preventDefault();
		$(location).attr('href',"joinmeetup");
	});	

	$("#search-dict").click(function(){
		event.preventDefault();
		if($("#inputSearch").val()!="")
		{
			$.get('searchDict/'+$("#inputSearch").val().toLowerCase(),function(result){
				if(result!=null)
					$("#content-dict").html(result['text']);
				else
					$("#content-dict").html("<h3>No results to show</h3>");
			
			});
		}
		else
			$("#content-dict").html("<h3>No results to show</h3>");
		
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