import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from '../app/store';

const MyApp = ({ Component, pageProps }) => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </CookiesProvider>
    );
};

export default MyApp;
