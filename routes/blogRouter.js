const express = require('express');
const blogRouter = require('express').Router();
const blogController = require('../controllers/blogController');

blogRouter.use('/', blogController.pageBlog,);


module.exports = blogRouter;