import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidate } from '../utils/validations';

const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidate()),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

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
            </div>
        </Layout>
    );
};

export default Register;
