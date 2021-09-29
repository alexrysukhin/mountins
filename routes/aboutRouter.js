const express = require('express');
const aboutRouter = express.Router();
const aboutController = require('../controllers/aboutController');


aboutRouter.use('/', aboutController.pageAbout);


module.exports = aboutRouter;