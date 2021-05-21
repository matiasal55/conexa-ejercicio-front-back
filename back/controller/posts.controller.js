const { getRequest } = require('../utils/requestHandler');

const getPosts = async (req, res) => {
    const request = await getRequest('https://jsonplaceholder.typicode.com/posts');
    const posts = request.data;
    res.json({ posts });
};

module.exports = { getPosts };
