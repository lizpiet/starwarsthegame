var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beginnerSchema = new Schema({
    title: String,
    question: [
        {text_a: String, Answer_a: Boolean},
        {text_b: String, Answer_b: Boolean},
        {text_c: String, Answer_c: Boolean},
        {text_d: String, Answer_d: Boolean}
    ]
});




var Beginner = mongoose.model('Assignment', beginnerSchema);

module.exports = Beginner;