var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use('/', index);



//app.get('/', function(req, res){
//    res.send('Hello! I am on app.js server side');
//});

var server = app.listen(3000, function(){
        var port = server.address().port;
        console.log('Server side app.js., Listening on port: ', port);
    });

module.exports = app;

