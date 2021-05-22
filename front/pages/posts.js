import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { postsList, getPosts, lengthList } from '../features/postsSlice';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);
    const lengthPosts = useSelector(lengthList);

    useEffect(() => {
        dispatch(getPosts(1));
    }, []);

    const table = () => {
        return (
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
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
            <Pagination length={lengthPosts} goToPage={(page) => dispatch(getPosts(page))} />
        </Layout>
    );
};

export default Posts;
