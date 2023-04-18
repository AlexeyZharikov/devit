const PostsModel = require('../../../models').PostsModel;
const { parse } = require('rss-to-json');


const addAllPosts = async (req, res) => {
  const parsed = await parse('https://lifehacker.com/rss');
  const items = parsed.items
  console.log('hello');

  return PostsModel
  .insertMany(items)
  .then(() => res.status(201).json({result: 'DONE'}))
  .catch((err) => res.status(500).json(err.message));
  };

module.exports = addAllPosts