const express = require('express');
const welcomeRouter = require('express').Router();
const welcomeController = require('../controllers/welcomeController');

welcomeRouter.use('/', welcomeController.pageWelcome);


module.exports = welcomeRouter;