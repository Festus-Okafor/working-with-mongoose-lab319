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
     
    },
    vlog_snippet: {
        type: String,
    },
    comments:{
     Type: String,
     
    }  
 },
  {timestamps: true})
 
 const Vlog = mongoose.model('Vlog', vlogSchema)

 export default Vlog
