const express = require('express');
const router = express.Router();
const { getPosts } = require('../controller/posts.controller');

router.get('/:page', getPosts);

module.exports = router;
