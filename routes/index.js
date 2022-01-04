var users = require('../public/json/users.json');
var meetups = require('../public/json/meetups.json');
exports.view = function (req, res) {
  res.render('index', { layout: false });
};

exports.viewProfile = function (req, res) {
  if (req.session.logged == true) {
    for (var v in users) {

      if (users[v].username == req.params.user) {
        answer = users[v];
      }
    }
    res.render('profile', { ...answer, layout: false });
  }
  else
    res.render('index', { layout: false });
};

exports.login = function (req, res) {
  var answer = null;

  for (var v in users) {
    if (users[v].username == req.body.username && users[v].password == req.body.password) {
      answer = users[v];
      req.session.logged = true;
      req.session.user = users[v];
    }
  }
  res.json(answer);
};

exports.menu = function (req, res) {
  if (req.session.logged == true)
    res.render('menu', { layout: false });
  else
    res.render('index', { layout: false });
};

exports.about = function (req, res) {
  res.render('about', { layout: false });
};

exports.help = function (req, res) {
  res.render('help', { layout: false });
};

exports.myProfile = function (req, res) {
  if (req.session.logged == true) {
    const user = req.session.user;
    res.render('myProfile', { ...user, layout: false });
  }
  else
    res.render('index', { layout: false });
};

exports.mymeetups = function (req, res) {
  if (req.session.logged == true) {
    var myCreated = [];
    var myJoined = [];

    for (var v in meetups) {
      if (req.session.user.username == meetups[v].createdBy)
        myCreated.push(meetups[v]);
      else {
        for (var x in meetups[v].people) {

          if (req.session.user.username == meetups[v].people[x].username)
            myJoined.push(meetups[v]);
        }
      }
    }

    if (myCreated.length > 0 && myJoined.length > 0)
      res.render('mymeetups', { myCreated, myJoined, layout: false });
    else if (myCreated.length > 0)
      res.render('mymeetups', { myCreated, layout: false });
    else if (myJoined.length > 0)
      res.render('mymeetups', { myJoined, layout: false });
    else
      res.render('mymeetups', { layout: false });

  }
  else
    res.render('index', { layout: false });
};

exports.signup = function (req, res) {
  res.render('signup', { layout: false });
};

exports.createUser = function (req, res) {

  var classes = [];
  var clArray = req.body.classes ? req.params.classes.split("\n") : [];
  for (var x in clArray) {
    classes.push({
      "name": clArray[x]
    })
  }

  var interests = [];
  var intArray = req.body.interests ? req.params.interests.split("\n") : [];
  for (var x in intArray) {
    interests.push({
      "name": intArray[x]
    })
  }

  users.push({
    "username": req.body.username,
    "password": req.body.password,
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "bio": req.body.bio,
    "languages": req.body.languages,
    "photo": "http://lorempixel.com/579/380/",//req.body.photo,
    "email": req.body.email,
    "home": req.body.home,
    "classes": classes,
    "interests": interests
  });

  res.render('index', { created: "true", layout: false });
};

exports.logout = function (req, res) {
  req.session.logged = false;
  req.session.user = null;
  res.render('logout', { layout: false });
};
