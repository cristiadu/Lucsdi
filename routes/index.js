/*
 * GET home page.
 */
var users = require('../users.json');
exports.view = function(req, res){
  res.render('index');
};

exports.login = function(req, res){
  	var answer = null;

	for(var v in users){

	    if (users[v].username == req.param("username") && users[v].password == req.param("password")) {
	        answer = users[v];

	    }
	}
  	res.json(answer);
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

exports.createUser = function(req, res){
  
  var classes = [];
  var clArray = req.param("classes").split("\n");
  for(var x in clArray)
  {
  	classes.push({
  		"name": clArray[x]
  	})
  }

  var interests = [];
  var intArray = req.param("interests").split("\n");
  for(var x in intArray)
  {
  	interests.push({
  		"name": intArray[x]
  	})
  }

  users.push({
  	"username":req.param("username"),
		"password":req.param("password"),
		"firstname":req.param("firstname"),
		"lastname":req.param("lastname"),
		"bio":req.param("bio"),
		"languages":req.param("languages"),
		"home":req.param("home"),
		"classes":classes,
		"interests":interests
  });

  res.render('index');
};

exports.logout = function(req, res){
  res.render('logout');
};