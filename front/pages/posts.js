import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { postsList, getPosts, serverState } from '../features/postsSlice';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';
import { cookieProvider } from '../utils/cookieProvider';
import { recoveryData, token, userData } from '../features/userSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);
    const server = useSelector(serverState);
    const tokenData = useSelector(token);
    const user = useSelector(userData);
    const router = useRouter();
    const cookieSession = cookieProvider('loremSession');

    useEffect(() => {
        if (!cookieSession) {
            return router.push('/');
        }
        dispatch(getPosts(cookieSession));
        if (!tokenData) dispatch(recoveryData(cookieSession));
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

    return (
        <Layout title='Posts'>
            {posts.length > 0 ? (
                <>
                    <h1 className='is-size-1'>Posts</h1>
                    {table()}
                </>
            ) : server ? (
                <Spinner />
            ) : (
                <InternalError />
            )}
        </Layout>
    );
};

export default Posts;
