const { getRequest } = require('../services/requestHandler');

const getPhotos = async (req, res) => {
    const page = req.params.page;
    const limit = 10;
    const request = await getRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const maxSize = request.headers['x-total-count'];
    const photos = request.data;
    res.json({ photos, maxSize });
};

module.exports = { getPhotos };
