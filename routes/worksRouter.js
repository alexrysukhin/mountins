const express = require('express');
const worksRouter = express.Router();
const bodyParser = require('body-parser');
const worksController = require('../controllers/worksController');

const urlencodedParser = bodyParser.urlencoded({
	extended: false,
})


worksRouter.use('/emailsend', urlencodedParser, worksController.sendEmail);
worksRouter.use('/', worksController.pageWorks);


module.exports = worksRouter;
