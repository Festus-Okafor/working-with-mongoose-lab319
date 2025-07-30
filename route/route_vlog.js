import express from "express";
import Vlog from "../models/vlog.js";

const routeVlog = express.Router()
routeVlog.use(express.json())

routeVlog.get("/", async(req, res) => {
    let vlog = await Vlog.find({
    })
    res.status(201).json(vlog)
});

routeVlog.post("/", async (req, res) => {
    const { vlogname, title, vlog_snippet, comments } = req.body;
    try{
  const vlog = new Vlog({
    vlogname,
    title,
    vlog_snippet,
    comments,
  });
  const result = await vlog.save();
 return res.status(201).json({ message: 'vlog created successfully', result })
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});



routeVlog.patch("/:id", async(req, res) => {
    try{
    let {id} = req.params
    const { title,vlog_snippet, comments } = req.body;
    let vlog = await Vlog.findByIdAndUpdate(id, {title,vlog_snippet,comments})
    return res.status(201).json({ message: 'vlog updated successfully', vlog})
    } catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;

routeVlog.delete("/:id", async(req, res) => {
    try{
   let {id} = req.params
   let vlog = await Vlog.findByIdAndDelete(id)
   return res.status(201).json({ message: 'vlog deleted successfully', vlog})
} catch{
    (error) =>{
        res.status(500).json({message: `There is an error, unsuccessfull!` });
    }
}});
;
export default routeVlog