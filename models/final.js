var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var finalSchema = new Schema({
    title: String,
    fourAnswers: [
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean},
        {text: String, answer: Boolean}
    ]
});


var Final = mongoose.model('Final', finalSchema);

module.exports = Final;

