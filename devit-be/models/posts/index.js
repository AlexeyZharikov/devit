const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostsSchema = new Schema({
  id: {
    type: Number
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  author: {
    type: String,
  },
  published: {
    type: Date,
  },
  created:{
    type: Date,
  },
  category: [String],
  enclosures: [
    {
      url: String
    }
  ],
  media: {
    thumbnail: {
      url: String
    }  
  },


})

const PostsModel = mongoose.model('posts', PostsSchema);

module.exports = PostsModel;