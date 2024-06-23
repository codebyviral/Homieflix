import { Blog } from "../models/blog-model.js"

const createBlog = async (req, res) => {
    try {
        const { title, blog, owner } = req.body;

        const blogCreated = await Blog.create({
            title,
            blog,
            owner
        })
        res.status(201).json({
            message: 'Blog posted successfully',
            blog: blogCreated
        })
        if (!owner) {
            res.status(401).json({
                message: "Are you Logged in?"
            })
        }
    } catch (error) {
        console.log(`createBlog error: ${error}`)
    }
}

export { createBlog }