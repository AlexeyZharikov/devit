const PostsModel = require('../../../models').PostsModel;

const createPost = (req, res) => {
  const {
    title, 
    description, 
    link, 
    author, 
    category,
    enclosures,
    media 
  } = req.body;
  const newPost = new PostsModel({
    title: title,
    description: description,
    link: link,
    author: author,
    category: category,
    enclosures: enclosures,
    'media.thumbnail.url': media.thumbnail.url,
    published: new Date(),
    created: new Date()
  })

  return newPost.save()
    .then(() => {
      res.status(201).json({
        message: 'Post created',
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

module.exports = createPost;
