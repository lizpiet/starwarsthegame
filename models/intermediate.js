var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var intermediateSchema = new Schema({
    title: String,
    fourAnswers: [
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean}
    ]
});



var Intermediate = mongoose.model('Intermediate', intermediateSchema);

module.exports = Intermediate;
