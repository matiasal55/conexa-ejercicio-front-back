import Layout from '../components/Layout';
import { getRequest } from '../utils/requestHandler';

const Posts = (props) => {
    const posts = props.posts;

    const table = () => {
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
            {posts ? table() : <h2>Cargando...</h2>}
        </Layout>
    );
};

export const getStaticProps = async (ctx) => {
    const res = await getRequest('http://localhost:4000/posts');
    return { props: { posts: res.posts } };
};

export default Posts;
