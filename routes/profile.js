/*
 * GET home page.
 */
var users = require('../users.json');

exports.view = function(req, res) {
	res.render('myProfile');
};

exports.myProfile = function(req, res) {

	var name = null; 
	console.log(); 
	for(var u in users){
	    if (users[u].username == req.params.username) {
	        username = users[u];
	    }
	}
  	res.json(username);

  	for(var p in users){
  		if (users[p].password == req.params.password) {
  			password = users[l];
  		}
  	}
  	res.json(password);
};