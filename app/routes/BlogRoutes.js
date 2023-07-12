const express = require('express');
const BlogsController = require('../controllers/BlogController');
const route = express.Router();

route.get('/get-all-blogs', BlogsController.getAllBlogsFromMongoDb);
route.get('/:id', BlogsController.getBlogByIdFromMongoDb);
route.post('/create-blog', BlogsController.createBlogToMongoDb);
route.patch('/:id', BlogsController.updateBlogIntoMongoDb);
route.delete('/:id', BlogsController.deleteBlogIntoMongoDb);

module.exports = route