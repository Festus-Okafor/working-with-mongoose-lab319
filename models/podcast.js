
import mongoose from 'mongoose'
const schema = mongoose.Schema;
const podcastSchema = new schema({

    podcastname: {
        type: String,
        require: true,
       
    },
    title: {
        type: String,
        require: true,
        unique: true,
    },
    podcast_snippet: {
        type: String,
    },
    comments:{
     Type: String,
     index: true,
     
    }  
 },
  {timestamps: true})
 
 const Blog = mongoose.model('Blog', podcastSchema)

 export default Blog
