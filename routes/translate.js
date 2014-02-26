/*
 * GET home page.
 */
var dictionary = require('../dictionary.json');

exports.view = function(req, res){
	if(req.session.logged == true)
  		res.render('translate');
  	else
    	res.render('index');
};

exports.searchDict = function(req, res){
	if(req.session.logged == true)
	var answer = null;

	for(var v in dictionary){
	    if (dictionary[v].name == req.params.word) {
	        answer = dictionary[v];
	    }
	}

  	res.json(answer);
};
