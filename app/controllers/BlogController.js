const blogService = require("../services/BlogService");

exports.getAllBlogsFromMongoDb = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.json({ data: blogs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBlogToMongoDb = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBlogByIdFromMongoDb = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBlogIntoMongoDb = async (req, res) => {
    try {
        const blog = await blogService.updateBlog(req.params.id, req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBlogIntoMongoDb = async (req, res) => {
    try {
        const blog = await blogService.deleteBlog(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
