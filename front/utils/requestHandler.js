import axios from 'axios';

const getRequest = async (route) => {
    const request = await axios.get(route);
    return request;
};
