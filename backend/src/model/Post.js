const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type:Number,
        default:0
    }
}, {
    timestamps: true
});

/*
    timestamp = true , significa que será criado os campos createdAt e updatedAt (data de criação e data da última atualização)
*/

module.exports = mongoose.model('Post', PostSchema);