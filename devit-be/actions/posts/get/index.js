const PostsModel = require('../../../models').PostsModel;

const getPost = (req, res) => {
  const { id, limit = 3, offset = 0, search} = req.query;
  console.log(req.query)

  if (id) {
    return PostsModel
    .findById(id)
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json(err))
  } else if (search) {
    const regex = new RegExp(search, "i");
    return PostsModel
      .find({ title: regex }) 
      .then((posts) => res.status(200).json(posts))
      .catch((err) => res.status(500).json(err));
  } else {
    return PostsModel
    .find()
    .skip(parseInt(offset))
    .limit(parseInt(limit))
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(500).json(err))
  }
}

module.exports = getPost;