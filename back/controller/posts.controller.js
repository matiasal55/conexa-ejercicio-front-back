const { getRequest } = require('../services/requestHandler');

const getPosts = async (req, res) => {
    try {
        const page = req.params.page;
        const limit = 10;
        const request = await getRequest(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        const maxSize = request.headers['x-total-count'];
        const posts = request.data;
        res.status(200).json({ posts, maxSize });
    } catch (e) {
        res.status(500).json({ message: 'Internal error' });
    }
};

module.exports = { getPosts };
