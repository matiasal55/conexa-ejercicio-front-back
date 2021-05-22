const { getRequest } = require('../services/requestHandler');

const getPhotos = async (req, res) => {
    try {
        const page = req.params.page;
        const limit = 10;
        const request = await getRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
        const maxSize = request.headers['x-total-count'];
        const photos = request.data;
        res.status(200).json({ photos, maxSize });
    } catch (e) {
        res.status(500).json({ message: 'Internal error' });
    }
};

module.exports = { getPhotos };
