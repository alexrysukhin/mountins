const Skills = require('../models/Skills');
const mongoose = require('mongoose');


exports.pageAbout = (request, response) => {
	Skills.find({}, function (err, allSkills) {
		if (err) {
			response.status(400);
			return consoele.log('err');
		} else {
			response.render('about', {
				skills: allSkills
			})
			console.log(allSkills)
		}
	})
}