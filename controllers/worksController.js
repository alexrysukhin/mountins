require('dotenv').config();
const Works = require('../models/Works');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');


exports.sendEmail = function (request, response) {
	try {
		if (!request.body) return
		console.log(request.body);
		const output = `
			<p>You have a new contact request</p>
			<h3>Contaact details</h3>
			<ul style="list-style-item: none">
				<li>Name: ${request.body.name}</li>
				<li>Email: ${request.body.email}</li>
			</ul>
			<h3>Message</h3>
			<p>${request.body.message}</p>
		`
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,

			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD
			},

		});

		let mailOptions = {
			from: "'rysukhinoleksandr@gmail.com' <kruziatus@gmail.com>",
			to: 'kruziatus@gmail.com',
			subject: 'Mountins-form',
			// text: 'it Works',
			html: output
		}

		transporter.sendMail(mailOptions, function (err, data) {
			if (err) {
				console.log(err)
			} else {
				console.log('Email sent!');

			}
		})

	} catch (err) { }
	response.redirect('/works')
}
exports.pageWorks = (request, response) => {
	Works.find({}, function (err, allWorks) {
		if (err) {
			response.status(400);
			return console.log('err');
		} else {
			response.render('works', {
				works: allWorks
			})
		}
	});
}
