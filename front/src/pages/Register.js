import { useEffect } from 'react';
import { setToken, userSelector } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Redirect, useHistory } from 'react-router';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const dispatch = useDispatch();
    const selector = useSelector(userSelector);
    const { registerState } = selector;
    const [cookies, setCookies] = useCookies('loremSession');
    const cookieSession = cookies.loremSession;
    const history = useHistory();

    if (cookieSession) history.push('/posts');

    useEffect(() => {
        dispatch(setToken(null));
    }, []);

    if (registerState) return <Redirect to='/' />;

    return (
        <div className='has-text-centered'>
            <RegisterForm />
        </div>
    );
};

export default Register;
