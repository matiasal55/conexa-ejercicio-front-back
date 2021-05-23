const express = require('express');
const router = express.Router();
const { getPosts } = require('../controller/posts.controller');

router.get('/', getPosts);

module.exports = router;
