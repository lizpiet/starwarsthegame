var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated);
});

router.get('/home', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/views/userHome.html'));
});

//
//app.get('/getQuestions', function(request, response, next) {
//  User.find({}, function(err, users) {
//    response.json(users);
//  })
//
//});

module.exports = router;
