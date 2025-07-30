import express from "express";
import podCast from "../models/podcast.js";


const routePodcast = express.Router()
routePodcast.use(express.json())

routePodcast.get("/", async(req, res) => {
    let podcast = await podCast.find({
    })
    res.status(201).json(podcast)
});

routePodcast.post("/", async (req, res) => {
    const { podcastname, title, podcast_snippet, comments } = req.body;
    try{
  const podcast = new podCast({
    podcastname,
    title,
    podcast_snippet,
    comments,
  });
  const result = await podcast.save();
 return res.status(201).json({ message: 'podcast created successfully', result })
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});



routePodcast.patch("/", async(req, res) => {
    try{
    let {id} = req.params
    const { title,podcast_snippet, comments } = req.body;
    let podcast = await podCast.findByIdAndUpdate(id, {title,podcast_snippet,comments})
    return res.status(201).json({ message: 'podcast updated successfully', podcast})
    } catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;

routePodcast.delete("/:id", async(req, res) => {
    try{
   let {id} = req.params
   let podcast = await podCast.findByIdAndDelete(id)
 return res.status(201).json({ message: 'podcast deleted successfully', podcast})
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;
export default routePodcast