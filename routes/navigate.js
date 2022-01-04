exports.view = function (req, res) {
	if (req.session.logged == true)
		res.render('navigate', { layout: false });
	else
		res.render('index', { layout: false });
};
