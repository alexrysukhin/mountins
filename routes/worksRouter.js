const express = require('express');
const worksRouter = require('express').Router();
const worksController = require('../controllers/worksController');



worksRouter.use('/', worksController.pageWorks);


module.exports = worksRouter;
