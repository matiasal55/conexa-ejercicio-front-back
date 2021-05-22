import Head from 'next/head';
import Navbar from './Navbar';
import 'bulma/css/bulma.min.css';

const Layout = (props) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{props.title} - Front</title>
            </Head>

            <Navbar />
            <div className='container is-fluid my-6'>{props.children}</div>
        </>
    );
};

export default Layout;
