/*
 * GET home page.
 */
var meetups = require('../public/json/meetups.json');
exports.view = function (req, res) {
	if (req.session.logged == true)
		res.render('connect', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.viewTest = function (req, res) {
	if (req.session.logged == true)
		res.render('connectTest', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.meetupPage = function (req, res) {
	if (req.session.logged == true) {
		res.render('meetup', { meetups, layout: false });
	}
	else
		res.render('index', { layout: false });
};

exports.meetupTest = function (req, res) {
	if (req.session.logged == true) {
		res.render('meetupTest', { meetups, layout: false });
	}
	else
		res.render('index', { layout: false });
};

exports.clubsOrg = function (req, res) {
	if (req.session.logged == true)
		res.render('clubsOrg', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.tutorAdvisor = function (req, res) {
	if (req.session.logged == true)
		res.render('tutorAdvisor', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.confirmationAdvisor = function (req, res) {
	if (req.session.logged == true)
		res.render('confirm', { layout: false });
	else
		res.render('index', { layout: false });
};

exports.joinmeetup = function (req, res) {
	if (req.session.logged == true)
		res.render('joinmeetup', { meetups, layout: false });
	else
		res.render('index', { layout: false });
};

exports.createMeetup = function (req, res) {
	if (req.session.logged == true) {
		meetups.push({
			"id": meetups.length + 1,
			"title": req.params.title,
			"host": req.params.host,
			"location": req.params.local,
			"image": "http://lorempixel.com/579/380/",//req.params.image,
			"date": req.params.date,
			"email": req.params.email,
			"phone": req.params.phone,
			"people": [],
			"active": "",
			"createdBy": req.session.user.username

		});


		res.render('meetup', { created: "true", meetups, layout: false });
	}
	else
		res.render('index', { layout: false });
};

exports.addToMeetup = function (req, res) {
	var id = req.params.id;
	var result = null;

	for (var v in meetups) {

		if (id == meetups[v].id) {
			var alreadyIn = false;
			for (var x in meetups[v].people) {
				if (meetups[v].people[x].username == req.session.user.username)
					alreadyIn = true;

				break;
			}

			if (!alreadyIn)
			meetups[v].people.push(req.session.user);

			result = meetups[v];

			break;
		}
	}

	res.json(result);
};

