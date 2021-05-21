import Layout from '../components/Layout';
import { getRequest } from '../utils/requestHandler';

const Posts = (props) => {
    return (
        <Layout title='Posts'>
            <h1 className='container'>Posts</h1>
        </Layout>
    );
};

Posts.getInitialProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/posts');
    return { posts: res.data };
};

export default Posts;
