const { getRequest } = require('../utils/requestHandler');

const getPhotos = async (req, res) => {
    const page = req.params.page;
    const limit = 10;
    const request = await getRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const photos = request.data;
    res.json({ photos });
};

module.exports = { getPhotos };
