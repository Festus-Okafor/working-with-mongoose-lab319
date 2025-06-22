import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import Blog from './models/blog.js'





const app = express()
app.use(express.json())
const PORT = process.env.PORT
await mongoose.connect(process.env.MONGO_URL)

app.get("/", (req, res)=>{
   // let membership = await()
    res.send(`working`)
})
app.get('/add.blog', async(req, res) =>{
    const blog = new Blog({
     blogname: 'MexSktech Tech News Updates',
     title: 'New updates about Nano-engineering',
     post_snippet:'Have you heard?',
     comments: 'I am excited this information is comming to us'
    })
     const result = await  blog.save()
     res.json(result)
})
 

app.listen(PORT, () =>{
    console.log(`Now listening on port: `, PORT)
})

