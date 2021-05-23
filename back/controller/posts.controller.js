const { getRequest } = require('../services/requestHandler');
const { validateToken } = require('../services/validateToken');

const getPosts = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const request = await getRequest('https://jsonplaceholder.typicode.com/posts');
        const posts = request.data;
        res.status(200).json(posts);
    } catch (e) {
        res.status(401).json({ message: 'Not Autorized' });
    }
};

module.exports = { getPosts };
