const router = require('express').Router();
const addAllPoists = require('../../actions').posts.addAllPosts

router.post('/', addAllPoists);


module.exports = router;