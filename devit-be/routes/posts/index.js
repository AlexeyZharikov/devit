const router = require('express').Router();
const deletePost = require('../../actions').posts.deletePost;
const getPost = require('../../actions').posts.getPost;
const createPost = require('../../actions').posts.createPost;
const updatePost = require('../../actions').posts.updatePost;

router.get('/', getPost);
router.post('/', createPost);
router.put('/', updatePost);
router.delete('/', deletePost);


module.exports = router;