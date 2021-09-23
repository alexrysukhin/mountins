const Blog = require("../models/Blog");
const mongoose = require('mongoose');

exports.pageBlog = (request, response) => {
	Blog.find({}, function (err, allBlogs) {
		if (err) {
			response.status(400);
			return console.log('err');
		} else {
			response.render('blog', {
				blogs: allBlogs
			})
		}
	});
}
// exports.pageBlog = (request, response) => {
// 	response.render('blog');
// }