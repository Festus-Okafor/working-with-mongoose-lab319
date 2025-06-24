import express from "express";
import Blog from "../models/blog.js";

const route = express.Router()
route.use(express.json())

route.get("/", async(req, res) => {
    let blog = await Blog.find({
    })
    res.status(201).json(blog)
});

route.post("/", async (req, res) => {
    const { blogname, title, post_snippet, comments } = req.body;
  const blog = new Blog({
    blogname,
    title,
    post_snippet,
    comments,
  });
  const result = await blog.save();
 return res.status(201).json({ message: 'Blog created successfully', result })
});



route.patch("/:id", async(req, res) => {
    let {id} = req.params
    const { title, comments } = req.body;
    let blog = await Blog.findByIdAndUpdate(id, {title,comments})
    return res.status(201).json({ message: 'Blog updated successfully', blog})
});

route.delete("/:id", async(req, res) => {
   let {id} = req.params
   let blog = await Blog.findByIdAndDelete(id)
 return res.status(201).json({ message: 'Blog deleted successfully', blog})

});
export default route