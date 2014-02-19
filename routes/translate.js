/*
 * GET home page.
 */
var dictionary = require('../dictionary.json');

exports.view = function(req, res){
  res.render('translate');
};

exports.searchDict = function(req, res){

	var answer = null;
	console.log("eita");
	for(var v in dictionary){
	    if (dictionary[v].name == req.params.word) {
	        answer = dictionary[v];
	    }
	}

  	res.json(answer);
};
