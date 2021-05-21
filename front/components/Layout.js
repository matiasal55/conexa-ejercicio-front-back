import Head from 'next/head';
import 'bulma/css/bulma.min.css';

const Layout = (props) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{props.title} - Front</title>
            </Head>
            <div className='container'>{props.children}</div>
        </>
    );
};

export default Layout;
