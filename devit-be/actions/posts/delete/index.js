const PostsModel = require('../../../models').PostsModel;

const deletePost = (req, res) => {
  const {id} = req.query;
  
  return PostsModel
  .findByIdAndDelete(id)
  .then(() => res.status(200).json('Deleted'))
  .catch((err) => res.status(500).json(err));
}

module.exports = deletePost;