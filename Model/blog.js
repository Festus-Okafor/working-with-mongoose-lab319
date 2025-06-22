
const blogSchema = new mongoose.Schema({

    blogname: {
        type: String,
        default: 'Example',
        required: true,// an username must be entered.
        unique: true, //unique cannot be the same as other users info
    },
    title: {
        type: String,
        required: true,
        unique: true, //can't be same as other users' emails.
    },
    post_snippet: {
        type: String,
        required: true,
        minLength: 12, //has to be 12 characters long or won't be accepted
    },
    comments:{
     Type: String,
     required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
 })
 export default mongoose.model('', membershipSchema) 