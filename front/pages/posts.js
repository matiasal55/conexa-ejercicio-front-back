import Head from 'next/head';
import { getRequest } from '../utils/requestHandler';
import 'bulma/css/bulma.min.css';

const Posts = (props) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Posts</title>
            </Head>
            <h1 className='container'>Posts</h1>
        </>
    );
};

Posts.getInitialProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/posts');
    return { posts: res.data };
};

export default Posts;
