import axios from 'axios';
import { server, users } from '../config/config';

const getUrl = (route, userRoute = false) => {
    let url;
    if (userRoute) {
        url = server + users + route;
    } else url = server + route;
    return url;
};

const getHeader = (token) => {
    let headers = {};
    if (token) {
        headers['x-access-token'] = token;
    }
    return headers;
};

const makeRequest = async (action, url, ...params) => {
    const request = await axios[action](url, ...params);
    return request.data;
};

export const getRequest = async (route, token = null, userRoute = false) => {
    const url = getUrl(route, userRoute);
    const headers = getHeader(token);
    const request = await makeRequest('get', url, { headers });
    return request;
};

export const postRequest = async (route, data, userRoute = false, token = null) => {
    const url = getUrl(route, userRoute);
    const headers = getHeader(token);
    const request = await makeRequest('post', url, data, { headers });
    return request;
};
