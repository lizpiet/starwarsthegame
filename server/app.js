var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var localStrategy = require('passport-local').Strategy;
var register = require('./routes/register');


var User = require('../models/user');
var beginner = require('../models/beginner');
//var intermediate = require('../models/intermediate');
//var advanced = require('../models/advanced');

var routes = require('./routes/main');
var users = require('./routes/users');
var index = require('./routes/index');
var question = require('./routes/question');
var app = express();

//mongoose set up
var mongoURI = 'mongodb://localhost:27017/starwarsthegame';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err){
    console.log('Crap, mongodb connection error, app.js server side', err);
});

MongoDB.once('open', function (){
    console.log('mongodb connection open, app.js server side');
});

 //view engine setup // added 10/29
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: { maxAge: 60000, secure:false}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({
        passReqToCallback:true,
        usernameField:'username',
        //added 10/21
        passwordField:'password'},
    function(req, username, password, done) {

       User.findOne({ username: username}, function(err, user){
           if (err) throw err;
           if (!user)
            return done (null, false, {message: 'These are not the droids youre looking for.'});
                //test matching passwords
                user.comparePassword(password, function(err, isMatch){
                if (err) throw err;
                if(isMatch)
                    return done(null, user);
                else
                    done(null, false, { message:'These are not the droids youre looking for.'
                    });
                 });
              });
        }));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, callback){
    User.findById(id, function(err, user){
        if(err) callback(err);
        callback(null, user)
    })
});



app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);
app.use('/users', users);
app.use('/register', register);
app.use('/index', index);
app.use('/question', question);


//app.get('/', function(req, res){
//    res.send('Hello! I am on app.js server side');
//});

var server = app.listen(3000, function(){
        var port = server.address().port;
        console.log('Server side app.js., Listening on port: ', port);
    });
//
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// //development error handler
// //will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.send('error SERIOUSLY', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
// //production error handler
// //no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.send('error FOR REAL', {
//        message: err.message,
//        error: {}
//    });
//});

module.exports = app;

