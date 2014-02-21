/*
 * GET home page.
 */

exports.view = function(req, res){
	if(req.session.logged == true)
  		res.render('connect');
  	else
    	res.render('index');
};

exports.meetup = function(req, res){
	if(req.session.logged == true)
  		res.render('meetup');
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

exports.joinmeetup = function(req, res){
	if(req.session.logged == true)
  		res.render('joinmeetup');
  	else
    	res.render('index');
};

exports.createMeetup = function(req, res){
	if(req.session.logged == true)
  		res.render('meetup');
  	else
    	res.render('index');
};

exports.addToMeetup = function(req, res){
	if(req.session.logged == true)
  		res.render('meetup');
  	else
    	res.render('index');
};

