var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var Princess = mongoose.model('Luke', {name:String});


mongoose.connect('mongodb://localhost/starwarsthegame');


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../public/views/index.html'));
    //var file = req.params[0] || 'views/index.html';
    //res.sendFile(path.join(__dirname,'../public', file));
    //console.log('console: I am on routes/index.js');
    //res.send('I am on routes/index.js');
    //next();
});

router.post('/add', function(request, response, next) {
    var princess = new Princess({name: request.body.name});
    princess.save(function(err){
    if (err)console.log('princess error, index.js', err);
    response.send(princess.toJSON());
    next();
});
});

router.get('/luke', function(request, response, next){
    return Princess.find({}).exec(function(err, lukes){
        if(err)throw new Error(err);
        response.send(JSON.stringify(lukes));
        next();
    });
});

module.exports = router;

