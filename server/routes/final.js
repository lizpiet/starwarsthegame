var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Final = require('../../models/final');

//var beginner = mongoose.model('beginner', {title:String});

router.get('/', function(request, response, next){
    Final.find({},function(err, final){
        console.log(final);
        //if(err)throw new Error(err);
        //response.send('hello');
        //response.send(JSON.stringify(beginner));
        response.json(final);

        next();
    });
    //response.send(200);
});

router.get('/home', function( req, res, next){
//    router.get('/question', function( req, res, next){

    res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

router.post('/', function(req, res, next){
    Final.create(req.body, function(err, post){
        if (err)
            next(err);
        else
            res.sendStatus(200);
    });
});

router.get('/:id', function(request, response, next){
    Final.find({id: request.params.id},function(err, final){
        console.log(response);
        //if(err)throw new Error(err);
        //response.send('hello');
        //response.send(JSON.stringify(beginner));
        response.json(final);


        next();
    });
    //response.send(200);
});

module.exports = router;