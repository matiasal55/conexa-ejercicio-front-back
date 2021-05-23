import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { postsList, getPosts, serverState } from '../features/postsSlice';
import { token } from '../features/userSlice';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);
    const server = useSelector(serverState);
    const userToken = useSelector(token);
    const router = useRouter();

    useEffect(() => {
        dispatch(getPosts(userToken));
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
        </div>
    );

    if (!userToken) {
        router.push('/');
    }

    return (
        <Layout title='Posts'>
            <h1 className='is-size-1'>Posts</h1>
            {posts.length > 0 ? table() : server ? <Spinner /> : <InternalError />}
        </Layout>
    );
};

export default Posts;
