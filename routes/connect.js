/*
 * GET home page.
 */
var meetup = require('../meetups.json');
exports.view = function(req, res){
	if(req.session.logged == true)
  		res.render('connect');
  	else
    	res.render('index');
};

exports.meetup = function(req, res){
	if(req.session.logged == true)
  		res.render('meetup',meetup);
  	else
    	res.render('index');
};

exports.clubsOrg = function(req, res){
	if(req.session.logged == true)
  		res.render('clubsOrg');
  	else
    	res.render('index');
};

exports.tutorAdvisor = function(req, res){
	if(req.session.logged == true)
  		res.render('tutorAdvisor');
  	else
    	res.render('index');
};

exports.confirmation-advisor = function(req, res){
	if(req.session.logged == true)
  		res.render('confirmation-advisor');
  	else
    	res.render('index');
};

exports.confirmation-tutor = function(req, res){
	if(req.session.logged == true)
  		res.render('confirm');
  	else
    	res.render('index');
};

exports.joinmeetup = function(req, res){
	if(req.session.logged == true)
  		res.render('joinmeetup',meetup);
  	else
    	res.render('index');
};

exports.createMeetup = function(req, res){
	if(req.session.logged == true)
	{
		meetup.meetup.push({
			"id":meetup.meetup.length + 1,
			"title":req.param("title"),
			"host":req.param("host"),
			"location":req.param("local"),
			"image":req.param("image"),
			"date":req.param("date"),
			"email":req.param("email"),
			"phone":req.param("phone"),
			"people":[],
			"active": ""
			
		});

		res.render('meetup',meetup);
	}
	else
    	res.render('index');
};

exports.addToMeetup = function(req, res){
	var id = req.param("id");
	var result = null;
	
	for(var v in meetup.meetup){
		
		if(id == meetup.meetup[v].id)
		{
			meetup.meetup[v].people.push({"name": req.session.user.firstname + req.session.user.lastname,
									"email": req.session.user.email});
			result = meetup.meetup[v];
			break;
		}
	}

	res.json(result);
};

