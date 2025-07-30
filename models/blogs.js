

import mongoose from 'mongoose'
const schema = mongoose.Schema;
const blogSchema = new schema({

    blogname: {
        type: String,
        require: true,
       
    },
    title: {
        type: String,
        require: true,
        unique: true,
    },
    post_snippet: {
        type: String,
    },
    comments:{
     Type: String,
     
    }  
 },
  {timestamps: true})
 
 const Blog = mongoose.model('Blog', blogSchema)

 export default Blog
