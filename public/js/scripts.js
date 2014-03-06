$(document).ready(function(){

	$("#btn-login").click(function(){
		event.preventDefault();
		$.post('login',{
			"username" : $("#username").val(),
			'password': $("#password").val()
		},function(result){
				if(result!=null) {
					$(location).attr('href', "menu");

				}
				else
					$("#error").html('<span class="alert alert-danger alert-dismissable col-xs-12 col-md-12"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+
							"Username or password incorrect!</span>");
					
			
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

	$("#status-connect").click(function(){
		ga('send', 'event', 'bar', 'click');
		
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

	$("#btn-mymeetups").click(function(){
		event.preventDefault();
		$(location).attr('href', "mymeetups");
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

	$(".btn-joinmeetupconfirm").click(function(){
		event.preventDefault();
		$.post('confirmJoin',{"id":$(this).attr("id")},function(result){
			if(result!=null) {
					$("#msg").addClass('alert').addClass('alert-success').addClass('alert-dismissable').text("You were added to the meetup "+result['title']+"!");
					// $(this).after('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>You were added to the meetup')
				}
				else
					$("#msg").addClass('alert').addClass('alert-danger').text("Error trying to add you to the meetup!");
				
			
		});
	});


	$("#btn-scheduleAdvisor").click(function(){

		event.preventDefault();
		$(location).attr('href',"confirmationAdvisor");
	});

	$("#btn-scheduleTutor").click(function(){
		event.preventDefault();
		$(location).attr('href',"confirmationAdvisor");
	});

	$("#btn-joinMeetup").click(function(){
		event.preventDefault();
		ga('send', 'event', 'button', 'click');
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

function confirmPopup()
{
	alert("You have successfully requested an appointment with a tutor! You will receive appointment confirmation via email within the next week when the tutor has confirmed your availability.");
	
}
function confirmPopup2()
{
	alert("You have successfully requested an appointment with a tutor! You will receive appointment confirmation via email within the next week when the tutor has confirmed your availability.");
	
}