var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeginnerSchema = new Schema({
    title: String,
    fourAnswers: [
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean}
    ]
});


var Beginner = mongoose.model('Beginner', BeginnerSchema);

module.exports = Beginner;


