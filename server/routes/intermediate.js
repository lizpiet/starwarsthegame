var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Intermediate = require('../../models/intermediate');

router.get('/', function(request, response, next){
    Intermediate.find({},function(err, intermediate){
        console.log(intermediate);
        //if(err)throw new Error(err);
        //response.send('hello');
        //response.send(JSON.stringify(beginner));
        response.json(intermediate);
        next();
    });
    //response.send(200);
});

router.get('/home', function( req, res, next){
//    router.get('/question', function( req, res, next){

    res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

router.post('/', function(req, res, next){
    Intermediate.create(req.body, function(err, post){
        if (err)
            next(err);
        else
            res.sendStatus(200);
    });
});

router.get('/:id', function(request, response, next){
    Intermediate.find({id: request.params.id},function(err, question){
        console.log(response);
        //if(err)throw new Error(err);
        //response.send('hello');
        //response.send(JSON.stringify(beginner));
        response.json(question);


        next();
    });
    //response.send(200);
});

module.exports = router;