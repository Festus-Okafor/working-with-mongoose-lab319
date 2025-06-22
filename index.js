import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'





const app = express()
const PORT = process.env.PORT
await mongoose.connect(process.env.MONGO_URL)

app.get("/", (req, res)=>{
   // let membership = await()
    res.send(`working`)
})


app.listen(PORT, () =>{
    console.log(`Now listening on port: `, PORT)
})

