const PostsModel = require('../../../models').PostsModel;

const updatePost = (req, res) => {
  const { id } = req.query;
  const {
    title,
    description,
    link,
    author,
    category,
    enclosures,
    media
  } = req.body;

  return PostsModel.findByIdAndUpdate(id, {
    title,
    description,
    link,
    author,
    category,
    enclosures,
    'media.thumbnail.url': media.thumbnail.url
  } , { new: true })
    .then(() => res.status(200).json({ data: 'Updated' }))
    .catch(err => res.status(500).json(err));
};

module.exports = updatePost;