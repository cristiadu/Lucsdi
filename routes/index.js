/*
 * GET home page.
 */
var users = require('../users.json');
var meetups = require('../meetups.json');
exports.view = function(req, res){
  res.render('index');
};

exports.login = function(req, res){
  	var answer = null;

	for(var v in users){

	    if (users[v].username == req.param("username") && users[v].password == req.param("password")) {
	        answer = users[v];
          req.session.logged = true;
          req.session.user = users[v];

	    }
	}
  	res.json(answer);
};

exports.menu = function(req, res){
  if(req.session.logged == true)
    res.render('menu');
  else
    res.render('index');
};

exports.about = function(req, res){
  res.render('about');
};

exports.help = function(req, res){
  res.render('help');
};

exports.myProfile = function(req, res){

  console.log(req.session.user);
  if(req.session.logged == true)
    res.render('myProfile',req.session.user);
  else
    res.render('index');
};

exports.mymeetups = function(req, res){

  console.log(req.session.user);

  if(req.session.logged == true)
  {
    var myCreated = [];
    var myJoined = [];

    for(var v in meetups.meetup)
    {
      if(req.session.user.username == meetups.meetup[v].createdBy)
         myCreated.push(meetups.meetup[v]);
      else
      {
        for(var x in meetups.meetup[v].people)
        {
          
          if(req.session.user.username == meetups.meetup[v].people[x].username)
            myJoined.push(meetups.meetup[v]);
        }
      }
    }
    
    res.render('mymeetups',{"myCreated":myCreated,"myJoined":myJoined});
  }
  else
    res.render('index');
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
    "photo":req.param("photo"),
    "email":req.param("email"),
		"home":req.param("home"),
		"classes":classes,
		"interests":interests
  });
  console.log(users);

  res.render('index',{"created":"true"});
};

exports.logout = function(req, res){
  req.session.logged = false;
  req.session.user = null;
  res.render('logout');
};