var express = require('express');
var router = express.Router();
//var passport = require('passport');
var path = require ('path');
var User = require ('../../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/main.html'));

});


//// added wednesday night
///adds points to the database
router.post('/points', function(req, res, next){
    console.log(req.isAuthenticated());
    console.log(req.user);
    User.findOne({username:req.user.username}, function(err, user){
        if(!user.score){
            user.score=0;
            console.log('what?');
        }
        user.score+=req.body.points;
        user.save();
        var toSend = {score: user.score};
        res.send(toSend);
    })
});



router.get('/logout', function(req, res){
    req.logout();
    res.sendFile(path.join(__dirname, "../server/public/views/main.html"));
});

module.exports = router;
