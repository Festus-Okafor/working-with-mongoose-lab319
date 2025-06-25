import express from "express";
import Blog from "../models/blog.js";

const route = express.Router()
route.use(express.json())

route.get("/", async(req, res) => {
    let vlog = await Blog.find({
    })
    res.status(201).json(vlog)
});

route.post("/", async (req, res) => {
    const { vlogname, title, vlogcast_snippet, comments } = req.body;
    try{
  const vlog = new Blog({
    vlogname,
    title,
    vlog_snippet,
    comments,
  });
  const result = await vlog.save();
 return res.status(201).json({ message: 'Blog created successfully', result })
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});



route.patch("/:id", async(req, res) => {
    try{
    let {id} = req.params
    const { title,vlog_snippet, comments } = req.body;
    let podcast = await Blog.findByIdAndUpdate(id, {title,vlog_snippet,comments})
    return res.status(201).json({ message: 'Blog updated successfully', podcast})
    } catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;

route.delete("/:id", async(req, res) => {
    try{
   let {id} = req.params
   let vlog = await Blog.findByIdAndDelete(id)
 return res.status(201).json({ message: 'Blog deleted successfully', vlog})
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;
export default route