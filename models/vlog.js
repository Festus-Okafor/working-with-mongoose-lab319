import mongoose from 'mongoose'
const schema = mongoose.Schema;
const vlogSchema = new schema({

    vlogname: {
        type: String,
        require: true,
       
    },
    title: {
        type: String,
        require: true,
        unique: true,
        index: true,
    },
    vlog_snippet: {
        type: String,
    },
    comments:{
     Type: String,
     index: true,
     
    }  
 },
  {timestamps: true})
 
 const Blog = mongoose.model('Blog', vlogSchema)

 export default Blog
