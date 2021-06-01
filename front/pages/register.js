import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidate } from '../utils/validations';
import { registerUser, serverState, existsToken, registerState } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { cookieProvider } from '../utils/cookieProvider';

const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidate()),
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const tokenState = useSelector(existsToken);
    const server = useSelector(serverState);
    const registerFlag = useSelector(registerState);
    const cookieSession = cookieProvider('loremSession');

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };

    if (cookieSession) router.push('/posts');

    if (registerFlag) router.push('/');

    return (
        <Layout title='Register'>
            <div className='has-text-centered'>
                <form onSubmit={handleSubmit(onSubmit)} className='container has-text-left'>
                    <Input
                        label='Nombre'
                        placeholder='Ingrese su primer nombre'
                        icon='fas fa-user'
                        error={errors.firstName}
                        register={register}
                        name='firstName'
                    />
                    <Input label='Apellido' placeholder='Ingrese su apellido' icon='fas fa-user' error={errors.lastName} register={register} name='lastName' />
                    <Input
                        label='Email'
                        register={register}
                        name='email'
                        type='email'
                        placeholder='Ingrese su email'
                        icon='fas fa-envelope'
                        error={errors.email}
                    />
                    <Input
                        label='Password'
                        register={register}
                        name='password'
                        type='password'
                        placeholder='Ingrese su password'
                        icon='fas fa-lock'
                        error={errors.password}
                    />
                    <Input
                        label='Reingrese su password'
                        register={register}
                        name='repassword'
                        type='password'
                        placeholder='Vuelva a ingresar su password'
                        icon='fas fa-lock'
                        error={errors.repassword}
                    />
                    <button className='button is-info'>Login</button>
                </form>
                <div>
                    {tokenState == false ? (
                        <p className='help is-danger my-5'>El correo electrónico ya se encuentra registrado</p>
                    ) : !server ? (
                        <p className='help is-danger my-5'>Hubo un problema interno. Intente más tarde</p>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
};

export default Register;
