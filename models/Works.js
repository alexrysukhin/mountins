const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worksSchema = new Schema({
	progectName: {
		type: String,
		required: true
	},
	technologies: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	imgPath: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('Works', worksSchema);