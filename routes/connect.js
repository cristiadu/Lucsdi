/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('connect');
};

exports.meetup = function(req, res){
  res.render('meetup');
};

exports.clubsOrg = function(req, res){
  res.render('clubsOrg');
};

exports.tutorAdvisor = function(req, res){
  res.render('tutorAdvisor');
};

