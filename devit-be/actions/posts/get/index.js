const PostsModel = require('../../../models').PostsModel;

const getPost = (req, res) => {
  const { id, limit = 3, offset = 0} = req.query;

  if (id) {
    return PostsModel
    .findById(id)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json(err))
  }
  return PostsModel
  // {}, {limit: 10, offset: 0}
  .find()
  .skip(parseInt(offset))
  .limit(parseInt(limit))
  .then((posts) => res.status(200).json(posts))
  .catch((err) => res.status(500).json(err))

}

module.exports = getPost;