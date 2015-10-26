var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Beginner = require('../../models/beginner');

//var beginner = mongoose.model('beginner', {title:String});

router.get('/', function(request, response, next){
  Beginner.find({},function(err, beginner){
      console.log(beginner);
        //if(err)throw new Error(err);
        //response.send('hello');
        //response.send(JSON.stringify(beginner));
      response.json(beginner);


      next();
    });
    //response.send(200);
});

router.get('/home', function( req, res, next){
//    router.get('/question', function( req, res, next){

        res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

router.post('/', function(req, res, next){
    Beginner.create(req.body, function(err, post){
        if (err)
            next(err);
        else
            res.sendStatus(200);
    });
});


module.exports = router;