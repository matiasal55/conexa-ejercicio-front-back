import Button from './Button';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { loginValidate } from '../utils/validations';
import { useSelector, useDispatch } from 'react-redux';
import { login, setRegister, userSelector } from '../features/userSlice';

const LoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginValidate()) });
    const dispatch = useDispatch();
    const selector = useSelector(userSelector);
    const { existsToken, serverState, registerState, loading } = selector;

    const onSubmit = (data) => {
        dispatch(login(data));
    };

    return (
        <>
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
                {existsToken === false ? (
                    <p className='help is-danger my-5'>El usuario y/o contraseña es incorrecta</p>
                ) : !serverState ? (
                    <p className='help is-danger my-5'>Hubo un problema interno. Intente más tarde</p>
                ) : registerState ? (
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
        </>
    );
};

export default LoginForm;
