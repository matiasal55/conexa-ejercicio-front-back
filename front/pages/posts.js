import Layout from '../components/Layout';
import Loader from 'react-loaders';
import { getRequest } from '../utils/requestHandler';

const Posts = (props) => {
    const posts = props.posts;

    const table = (posts) => {
        return (
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        {
                            console.log(post);
                        }
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

    return (
        <Layout title='Posts'>
            <h1 className='container'>Posts</h1>
            {posts ? table(posts) : <h2>Cargando...</h2>}
        </Layout>
    );
};

Posts.getInitialProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/posts');
    return { posts: res.posts };
};

export default Posts;
