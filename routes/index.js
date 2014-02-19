/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.menu = function(req, res){
  res.render('menu');
};

exports.about = function(req, res){
  res.render('about');
};

exports.help = function(req, res){
  res.render('help');
};

exports.myProfile = function(req, res){
  res.render('myProfile');
};

exports.signup = function(req, res){
  res.render('signup');
};

exports.logout = function(req, res){
  res.render('logout');
};