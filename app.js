
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var connect = require('./routes/connect');
var navigate = require('./routes/navigate');
var translate = require('./routes/translate');
var plan = require('./routes/plan');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'this is the secret'}));  
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

// General routes
app.get('/', index.view);
app.get('/menu', index.menu);
app.get('/about', index.about);
app.get('/help', index.help);
app.get('/myProfile', index.myProfile);
app.get('/mymeetups', index.mymeetups);
app.get('/signup', index.signup);
app.post('/confirmSignUp', index.createUser);
app.post('/login', index.login);
app.get('/logout', index.logout);

// Connect routes
app.get('/connect', connect.view);
app.get('/meetup', connect.meetup);
app.post('/newmeetup', connect.createMeetup);
app.get('/joinmeetup', connect.joinmeetup);
app.post('/confirmJoin', connect.addToMeetup);
app.get('/clubsOrg', connect.clubsOrg);
app.get('/tutorAdvisor', connect.tutorAdvisor);
app.get('/meetupconfirm', connect.meetupconfirm);
// app.get('/confirmation-advisor', connect.confirmation-advisor);
// app.get('/confirmation-tutor', connect.confirm);

// Navigate and Plan routes
app.get('/navigate', navigate.view);
app.get('/plan', plan.view);

// Translate routes
app.get('/translate', translate.view);
app.get('/searchDict/:word', translate.searchDict);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
