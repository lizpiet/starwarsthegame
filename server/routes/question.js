var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var path = require('path');
var beginner = mongoose.model('beginner', {title:String});



router.get('/', function(request, response, next){
    return beginner.find({}).exec(function(err, question){
        if(err)throw new Error(err);
        //response.send(question);
        response.send(JSON.stringify(question));

        next();
    });
});

router.get('/users/home', function( req, res, next){
    res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

module.exports = router;



