const axios = require('axios');

const getPosts = async (req, res) => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = request.data;
    res.json({ posts });
};

module.exports = { getPosts };
