var express = require('express');
var router = express.Router();
var path = require ('path');
var User = require ('../../models/user');

/* GET scoreboard. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/scoreBoard.html'));

});




module.exports = router;
