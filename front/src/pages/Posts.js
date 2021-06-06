import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postsSelector } from '../features/postsSlice';
import { useEffect } from 'react';
import { recoveryData, token } from '../features/userSlice';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import Table from '../components/tables/Table';
import AdminContent from '../components/AdminContent';

const Posts = () => {
    const dispatch = useDispatch();
    const selector = useSelector(postsSelector);
    const { postsList, serverState } = selector;
    const tokenData = useSelector(token);
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

    return (
        <AdminContent condition={postsList.length > 0} title='Posts' serverState={serverState}>
            <Table theads={['Id', 'Title', 'Body']}>
                {postsList.map((post) => (
                    <tr key={post.id}>
                        <td className='is-vcentered'>{post.id}</td>
                        <td className='is-vcentered'>{post.title}</td>
                        <td className='is-vcentered'>{post.body}</td>
                    </tr>
                ))}
            </Table>
        </AdminContent>
    );
};

export default Posts;
