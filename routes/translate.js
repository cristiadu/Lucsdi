var dictionary = require('../public/json/dictionary.json');

exports.view = function (req, res) {
	if (req.session.logged == true)
		res.render('translate', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.searchDict = function (req, res) {
	if (req.session.logged == true)
		var answer = null;

	for (var v in dictionary) {
		if (dictionary[v].name == req.params.word) {
			answer = dictionary[v];
		}
	}

	res.json(answer);
};
