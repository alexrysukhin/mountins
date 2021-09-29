const Works = require('../models/Works');
const Skills = require('../models/Skills');
const Blog = require('../models/Blog');

const mongoose = require('mongoose');

exports.pageAdmin = (request, response) => {
	response.render('admin');
};

exports.skillsSend = (request, response) => {
	console.log(request.body)
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
	let date = new Date();
	let id = `${date.getDate()}${date.getMilliseconds()}`;
	date = (`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);

	try {
		Blog.create({
			_id: id,
			title: request.body.blogTitle,
			date: date,
			content: request.body.blogText
		}, function (err, docs) {

			if (!request.body) throw new Error('Не удалось загрузить данные blog');
			console.log(docs);
		});
		response.redirect('/admin');
	} catch (err) {
		console.log(err);
	}

};

exports.worksSend = function (request, response) {
	let { title, technologies, file } = request.body;
	try {
		Works.create({
			// _id: new mongoose.Types.ObjectId(),
			progectName: title,
			technologies: technologies,
			img: request.file.originalname,
			imgPath: request.file.path,
		}, function (err, docs) {
			if (!request.body) {
				throw new Error('Не удалось загрузить данные works')
			}
			console.log(docs);
		})

		response.redirect('/admin');
	} catch (err) {
		console.log(err);
	}
}



