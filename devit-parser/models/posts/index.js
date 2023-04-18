const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostsSchema = new Schema({}, { strict: false }, {_id : false})

const PostsModel = mongoose.model('posts', PostsSchema);

module.exports = PostsModel;