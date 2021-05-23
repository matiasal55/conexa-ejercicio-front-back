const { getRequest } = require('../services/requestHandler');
const { validateToken } = require('../services/validateToken');

const getPhotos = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const isValid = validateToken(token);
        const page = req.params.page;
        const limit = 10;
        const request = await getRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
        const maxSize = request.headers['x-total-count'];
        const photos = request.data;
        res.status(200).json({ photos, maxSize });
    } catch (e) {
        res.status(401).json({ message: 'Not Autorized' });
    }
};

module.exports = { getPhotos };
