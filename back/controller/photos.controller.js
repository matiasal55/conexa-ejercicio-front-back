const { getRequest } = require('../utils/requestHandler');

const getPhotos = async (req, res) => {
    const request = await getRequest('https://jsonplaceholder.typicode.com/photos');
    const photos = request.data;
    res.json({ photos });
};

module.exports = { getPhotos };
