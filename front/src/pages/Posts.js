import { useDispatch, useSelector } from 'react-redux';
import { postsList, getPosts, serverState } from '../features/postsSlice';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import InternalError from '../components/InternalError';
import { recoveryData, token, userData } from '../features/userSlice';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsList);
    const server = useSelector(serverState);
    const tokenData = useSelector(token);
    const user = useSelector(userData);
    const [cookies, setCookies] = useCookies(['loremSession']);
    const cookieSession = cookies.loremSession;
    const history = useHistory();

    useEffect(() => {
        if (!cookieSession) {
            return history.push('/');
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
        <div>
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
        </div>
    );
};

export default Posts;
