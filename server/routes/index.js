var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require ('path');

/* GET page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/index.html'));
});

router.post('/', passport.authenticate('local', {
        successRedirect: '/users/home',
        failureRedirect: '/'
    }));

module.exports = router;

