const { getRequest } = require('../services/requestHandler');
const { validateToken } = require('../services/validateToken');
const { success } = require('../messages/general.messages');
const { possibleUnathorizedAccess } = require('../messages/resMessages');

const getPosts = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const request = await getRequest('https://jsonplaceholder.typicode.com/posts');
        const posts = request.data;
        return success(res, posts);
    } catch (e) {
        return possibleUnathorizedAccess(res, e.message);
    }
};

module.exports = { getPosts };
