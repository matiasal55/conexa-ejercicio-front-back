import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../app/store';
import Navbar from './Navbar';
import 'bulma/css/bulma.min.css';

const Layout = (props) => {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <title>{props.title} - Front</title>
                </Head>

                <Navbar />
                <div className='container mt-3'>{props.children}</div>
            </Provider>
        </>
    );
};

export default Layout;
