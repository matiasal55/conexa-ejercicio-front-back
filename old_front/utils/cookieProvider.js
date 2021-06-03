import { useCookies } from 'react-cookie';

export const cookieProvider = (name) => {
    const [cookies, setCookies] = useCookies([name]);
    return cookies[name];
};
