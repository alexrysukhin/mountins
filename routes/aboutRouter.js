const express = require('express');
const aboutRouter = require('express').Router();
const aboutController = require('../controllers/aboutController');


aboutRouter.use('/', aboutController.pageAbout);


module.exports = aboutRouter;