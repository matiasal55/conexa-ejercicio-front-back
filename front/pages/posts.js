import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { postsList, getPosts, lengthList } from '../features/postsSlice';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);
    const lengthPosts = useSelector(lengthList);

    useEffect(() => {
        dispatch(getPosts(1));
    }, []);

    const table = () => (
        <div>
            <table className='table mt-5 is-hoverable is-fullwidth'>
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
                                <td className='is-vcentered'>{post.id}</td>
                                <td className='is-vcentered'>{post.title}</td>
                                <td className='is-vcentered'>{post.body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination length={lengthPosts} goToPage={(page) => dispatch(getPosts(page))} />
        </div>
    );

    return (
        <Layout title='Posts'>
            <h1 className='is-size-1'>Posts</h1>
            {posts.length > 0 ? table() : <Spinner />}
        </Layout>
    );
};

export default Posts;
