const router = require('./router');
const { getPosts } = require('../controller/posts.controller');

router.get('/', getPosts);

module.exports = router;
