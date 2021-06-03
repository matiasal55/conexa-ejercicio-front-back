import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidate } from '../utils/validations';
import { registerUser, serverState, existsToken, registerState, loadingState, setExistsToken } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { useCookies } from 'react-cookie';
import { Redirect, useHistory } from 'react-router';

const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidate()),
    });
    const dispatch = useDispatch();
    const tokenState = useSelector(existsToken);
    const server = useSelector(serverState);
    const registerFlag = useSelector(registerState);
    const loading = useSelector(loadingState);
    const [cookies, setCookies] = useCookies('loremSession');
    const cookieSession = cookies.loremSession;
    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };

    if (cookieSession) history.push('/posts');

    useEffect(() => {
        dispatch(setExistsToken(null));
    }, []);

    if (registerFlag) return <Redirect to='/' />;

    return (
        <div className='has-text-centered'>
            <form onSubmit={handleSubmit(onSubmit)} className='container has-text-left'>
                <Input
                    label='Nombre'
                    placeholder='Ingrese su primer nombre'
                    icon='fas fa-user'
                    error={errors.firstName}
                    register={register}
                    name='firstName'
                    disabled={loading}
                />
                <Input
                    label='Apellido'
                    placeholder='Ingrese su apellido'
                    icon='fas fa-user'
                    error={errors.lastName}
                    register={register}
                    name='lastName'
                    disabled={loading}
                />
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
                <Input
                    label='Reingrese su password'
                    register={register}
                    name='repassword'
                    type='password'
                    placeholder='Vuelva a ingresar su password'
                    icon='fas fa-lock'
                    error={errors.repassword}
                    disabled={loading}
                />
                <Button value='Registrar' loading={loading} />
            </form>
            <div>
                {tokenState == false ? (
                    <p className='help is-danger my-5'>El correo electrónico ya se encuentra registrado</p>
                ) : !server ? (
                    <p className='help is-danger my-5'>Hubo un problema interno. Intente más tarde</p>
                ) : null}
            </div>
        </div>
    );
};

export default Register;
