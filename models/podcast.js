
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
    
     
    }  
 },
  {timestamps: true})
 
 const podCast = mongoose.model('Podcast', podcastSchema)

 export default podCast
