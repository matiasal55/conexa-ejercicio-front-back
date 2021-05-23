import axios from 'axios';

export const getRequest = async (route) => {
    const request = await axios.get(route);
    return request.data;
};

export const postRequest = async (route, data) => {
    const request = await axios.post(route, data);
    return request.data;
};
