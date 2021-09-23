// const Works = require('../models/Works');
const Skills = require('../models/Skills');
const Blog = require('../models/Blog');

const mongoose = require('mongoose');

exports.pageAdmin = (request, response) => {
	response.render('admin');
};

exports.skillsSend = (request, response) => {

	try {
		if (!request.body) throw new Error('Ошибка при получении скилов');
		Skills.findByIdAndUpdate(1, {
			_id: 1,
			html: request.body.htmlSkill,
			css: request.body.cssSkill,
			js: request.body.jsSkill,
			gulp: request.body.gulpSkill,
			git: request.body.gitSkill,
			node: request.body.nodeSkill,
			mongo: request.body.mongoSkill,
		}, (err, doc) => {
			mongoose.disconnect();
			if (err) throw new Error('Ошибка при изменении данных.');
			console.log(doc);
			response.redirect('/admin')
		});
	} catch (err) {
		cosole.log(err);
	}


};


exports.blogSend = function (request, response) {

	try {
		Blog.create({ title: request.body.blogTitle, date: request.body.blogDate, content: request.body.blogText }, function (err, docs) {
			mongoose.disconnect();

			if (err) throw new Error('Не удалось загрузить данные blog');

			mongoose.disconnect();

			console.log(docs);
		});
		response.redirect('/admin');
	} catch (err) {
		console.log(err);
	}

};

exports.worksSend = function (request, response) {
	try {
		if (!request.body) { throw new Error('Не удалось загрузить данные works') }
		console.log(request.body.title);
		console.log(request.body.technologies);
		console.log(request.file);
		response.redirect('/admin');
	} catch (err) {
		console.log(err);
	}
}



