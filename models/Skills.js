const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skilsSchema = new Schema({
	_id: {
		type: String,
		required: true
	},
	html: {
		type: Number,
		default: 0
	},
	css: {
		type: Number,
		default: 0
	},
	js: {
		type: Number,
		default: 0
	},
	git: {
		type: Number,
		default: 0
	},
	gulp: {
		type: Number,
		default: 0
	},
	node: {
		type: Number,
		default: 0
	},
	mongo: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Skills', skilsSchema);