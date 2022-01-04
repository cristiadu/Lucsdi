/**
 * Module dependencies.
 */
var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var cookieParser = require('cookie-parser')
var errorHandler = require('errorhandler')
var logger = require('morgan')
var path = require('path');
var handlebars = require('express-handlebars')

var index = require('./routes/index');
var connect = require('./routes/connect');
var navigate = require('./routes/navigate');
var translate = require('./routes/translate');
var plan = require('./routes/plan');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './public/views');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({ secret: 'this is the secret', resave: false, saveUninitialized: false }));
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// General routes
app.get('/', index.view);
app.get('/menu', index.menu);
app.get('/about', index.about);
app.get('/help', index.help);
app.get('/myProfile', index.myProfile);
app.get('/profile/:user', index.viewProfile)
app.get('/mymeetups', index.mymeetups);
app.get('/signup', index.signup);
app.post('/confirmSignUp', index.createUser);
app.post('/login', index.login);
app.get('/logout', index.logout);

// Connect routes
app.get('/connect', connect.view);
app.get('/connectTest', connect.viewTest);
app.get('/meetup', connect.meetupPage);
app.get('/meetupTest', connect.meetupTest);
app.post('/newmeetup', connect.createMeetup);
app.get('/joinmeetup', connect.joinmeetup);
app.post('/confirmJoin', connect.addToMeetup);
app.get('/clubsOrg', connect.clubsOrg);
app.get('/tutorAdvisor', connect.tutorAdvisor);
app.get('/confirmationAdvisor', connect.confirmationAdvisor);

// Navigate and Plan routes
app.get('/navigate', navigate.view);
app.get('/plan', plan.view);

// Translate routes
app.get('/translate', translate.view);
app.get('/searchDict/:word', translate.searchDict);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
