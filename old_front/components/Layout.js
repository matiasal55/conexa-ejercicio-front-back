import Head from 'next/head';
import Navbar from './Navbar';
import 'bulma/css/bulma.min.css';

const Layout = (props) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{props.title} - Front</title>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
                    integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
                    crossorigin='anonymous'
                    referrerpolicy='no-referrer'
                />
            </Head>

            <Navbar />
            <div className='container is-fluid my-6'>{props.children}</div>
        </>
    );
};

export default Layout;
