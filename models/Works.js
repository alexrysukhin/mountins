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
	picture: {}
});

module.exports = mongoose.model('Skills', worksSchema);