import axios from 'axios';
import { server, users } from '../config/config';

export const getRequest = async (route, headers = {}, userRoute = false) => {
    let url;
    if (userRoute) {
        url = server + users + route;
    } else url = server + route;
    console.log(url);
    const request = await axios.get(url, { headers });
    return request.data;
};

export const postRequest = async (route, data, userRoute = false) => {
    let url;
    if (userRoute) {
        url = server + users + route;
    } else url = server + route;
    console.log(url);

    const request = await axios.post(url, data);
    return request.data;
};
