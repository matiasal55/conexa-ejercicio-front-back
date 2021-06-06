import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import logo from '../images/cloud-service.png';
import LoginForm from '../components/LoginForm';

const Index = () => {
    const selector = useSelector(userSelector);
    const { existsToken, token } = selector;
    const [cookies, setCookies] = useCookies(['loremSession']);
    const cookieSession = cookies.loremSession;
    const history = useHistory();

    if (existsToken) {
        setCookies('loremSession', token, {
            maxAge: 60 * 60,
        });
    }

    if (cookieSession) {
        history.push('/posts');
    }

    return (
        <div className='has-text-centered'>
            <div>
                <img src={logo} alt='logo' width='200' height='200' />
                <h1 className='is-size-3'>Lorem Ipsum</h1>
            </div>
            <h2 className='is-size-5'>Ejercicio Front / Back</h2>
            <LoginForm />
        </div>
    );
};

export default Index;
