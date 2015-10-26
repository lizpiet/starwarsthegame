var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

var beginner = mongoose.model('beginner', {title:String});



router.get('/', function(request, response, next){
    return beginner.find({}).exec(function(err, beginner){
        if(err)throw new Error(err);
        //response.send('hello');
        response.send(JSON.stringify(beginner));

        next();
    });
    //response.send(200);
});

router.get('/home', function( req, res, next){
//    router.get('/question', function( req, res, next){

        res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

module.exports = router;



