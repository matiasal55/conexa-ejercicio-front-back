const axios = require('axios');

const getRequest = async (route) => {
    const request = await axios.get(route);
    return request;
};

module.exports = { getRequest };
