const { getRequest } = require('../services/requestHandler');

const getPosts = async (req, res) => {
    const page = req.params.page;
    const limit = 10;
    const request = await getRequest(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const maxSize = request.headers['x-total-count'];
    const posts = request.data;
    res.json({ posts, maxSize });
};

module.exports = { getPosts };
