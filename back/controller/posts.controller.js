const { getRequest } = require('../services/requestHandler');
const { validateToken } = require('../services/validateToken');
const { success, possibleNotAutorizedAccess, error } = require('../messages/resMessages');

const getPosts = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const request = await getRequest('https://jsonplaceholder.typicode.com/posts');
        const posts = request.data;
        success(res, posts);
    } catch (e) {
        possibleNotAutorizedAccess(res, e.message, 'jwt');
    }
};

module.exports = { getPosts };
