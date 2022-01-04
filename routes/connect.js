/*
 * GET home page.
 */
var meetup = require('../public/json/meetups.json');
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
		meetup.test = false;
		res.render('meetup', { meetups: meetup, layout: false });
	}
	else
		res.render('index', { layout: false });
};

exports.meetupTest = function (req, res) {
	if (req.session.logged == true) {
		meetup.test = true;
		res.render('meetupTest', { meetups: meetup, layout: false });
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
		res.render('joinmeetup', { meetup, layout: false });
	else
		res.render('index', { layout: false });
};

exports.createMeetup = function (req, res) {
	if (req.session.logged == true) {
		meetup.meetup.push({
			"id": meetup.meetup.length + 1,
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


		res.render('meetup', { created: "true", meetups: meetup, layout: false });
	}
	else
		res.render('index', { layout: false });
};

exports.addToMeetup = function (req, res) {
	var id = req.params.id;
	var result = null;

	for (var v in meetup.meetup) {

		if (id == meetup.meetup[v].id) {
			var alreadyIn = false;
			for (var x in meetup.meetup[v].people) {
				if (meetup.meetup[v].people[x].username == req.session.user.username)
					alreadyIn = true;

				break;
			}

			if (!alreadyIn)
				meetup.meetup[v].people.push(req.session.user);

			result = meetup.meetup[v];

			break;
		}
	}

	res.json(result);
};

