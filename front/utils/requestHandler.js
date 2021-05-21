import axios from 'axios';

export const getRequest = async (route) => {
    const request = await axios.get(route);
    return request.data;
};
