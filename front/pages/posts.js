import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { postsList, getPosts } from '../features/postsSlice';
import { useEffect } from 'react';

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

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
            {posts.length > 0 ? table() : <h2>Cargando...</h2>}
        </Layout>
    );
};

export default Posts;
