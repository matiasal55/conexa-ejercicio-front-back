const { getRequest } = require('../services/requestHandler');
const { validateToken } = require('../services/validateToken');
const { success, possibleNotAutorizedAccess } = require('../messages/resMessages');

const getPhotos = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const page = req.params.page;
        const limit = 10;
        const request = await getRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
        const maxSize = request.headers['x-total-count'];
        const photos = request.data;
        success(res, { photos, maxSize });
    } catch (e) {
        possibleNotAutorizedAccess(res, e.message, 'jwt');
    }
};

module.exports = { getPhotos };
