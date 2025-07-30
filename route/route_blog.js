import express from "express";
import Blog from "../models/blogs.js";

const route = express.Router()
route.use(express.json())

route.get("/", async(req, res) => {
    let blog = await Blog.find({
    })
    res.status(201).json(blog)
});

route.post("/", async (req, res) => {
    const { blogname, title, post_snippet, comments } = req.body;
    try{
  const blog = new Blog({
    blogname,
    title,
    post_snippet,
    comments,
  });
  const result = await blog.save();
 return res.status(201).json({ message: 'Blog created successfully', result })
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});



route.patch("/:id", async(req, res) => {
    try{
    let {id} = req.params
    const { title, comments } = req.body;
    let blog = await Blog.findByIdAndUpdate(id, {title,comments})
    return res.status(201).json({ message: 'Blog updated successfully', blog})
    } catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;

route.delete("/:id", async(req, res) => {
    try{
   let {id} = req.params
   let blog = await Blog.findByIdAndDelete(id)
 return res.status(201).json({ message: 'Blog deleted successfully', blog})
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;
export default route