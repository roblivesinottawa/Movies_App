const mongoose = require('mongoose')
const Schema = mongoose.Schema

let movieSchema = new Schema({
	name: {type: String, required: true, max: 100},
	year: {type: Number, required: true},

});


module.exports = mongoose.model('Movie', movieSchema);
