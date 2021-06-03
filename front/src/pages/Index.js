import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import Input from '../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { existsToken, login, serverState, token, registerState, loadingState, setRegister } from '../features/userSlice';
import { Link, useHistory } from 'react-router-dom';
import { loginValidate } from '../utils/validations';
import logo from '../images/cloud-service.png';

const Index = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginValidate()) });

    const dispatch = useDispatch();
    const tokenState = useSelector(existsToken);
    const server = useSelector(serverState);
    const registerFlag = useSelector(registerState);
    const userToken = useSelector(token);
    const [cookies, setCookies] = useCookies(['loremSession']);
    const cookieSession = cookies.loremSession;
    const loading = useSelector(loadingState);
    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(login(data));
    };

    if (tokenState) {
        setCookies('loremSession', userToken, {
            maxAge: 60 * 60,
        });
    }

    if (cookieSession) {
        history.push('/posts');
    }

    console.log(registerFlag);

    return (
        <div className='has-text-centered'>
            <div>
                <img src={logo} alt='logo' width='200' height='200' />
                <h1 className='is-size-3'>Lorem Ipsum</h1>
            </div>
            <h2 className='is-size-5'>Ejercicio Front / Back</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='container has-text-left'>
                <Input
                    label='Email'
                    register={register}
                    name='email'
                    type='email'
                    placeholder='Ingrese su email'
                    icon='fas fa-envelope'
                    error={errors.email}
                    disabled={loading}
                />
                <Input
                    label='Password'
                    register={register}
                    name='password'
                    type='password'
                    placeholder='Ingrese su password'
                    icon='fas fa-lock'
                    error={errors.password}
                    disabled={loading}
                />
                {tokenState === false ? (
                    <p className='help is-danger my-5'>El usuario y/o contraseña es incorrecta</p>
                ) : !server ? (
                    <p className='help is-danger my-5'>Hubo un problema interno. Intente más tarde</p>
                ) : registerFlag ? (
                    <p className='help is-danger my-5'>El registro se llevó a cabo con éxito</p>
                ) : null}
                <Button loading={loading} value='Login' />
            </form>
            <div>
                <p>
                    ¿No tenés cuenta? Registrate{' '}
                    <Link to='/register' onClick={() => dispatch(setRegister(false))}>
                        aquí
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Index;
