import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { token, userData, login } from '../features/userSlice';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
    email: yup.string().email('El formato de email es inválido').required('Debe ingresar un email válido'),
    password: yup.string().required('Debe ingresar una contraseña'),
});

const Index = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const router = useRouter();
    const dispatch = useDispatch();
    const tokenState = useSelector(token);

    const onSubmit = (data) => {
        dispatch(login(data));
    };

    if (tokenState) router.push('/posts');

    return (
        <Layout title='Home'>
            <div className='has-text-centered'>
                <div>
                    <img src='https://conexa.ai/wp-content/uploads/2021/03/logo.svg' alt='logo-conexa' />
                </div>
                <h1 className='is-size-5'>Ejercicio Front / Back</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='container has-text-left'>
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
                    {tokenState == false ? <p className='help is-danger my-5'>El usuario y/o contraseña es incorrecta</p> : null}
                    <button className='button is-info'>Login</button>
                </form>
            </div>
        </Layout>
    );
};

export default Index;
