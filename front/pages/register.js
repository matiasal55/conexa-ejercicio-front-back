import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    firstName: yup.string('Sólo caracteres alfabéticos').required('El campo no puede estar vacío'),
    lastName: yup.string('Sólo caracteres alfabéticos').required('El campo no puede estar vacío'),
    email: yup.string().email('El formato de email es inválido').required('Debe ingresar un email válido'),
    password: yup.string().required('Debe ingresar una contraseña').min(4, 'La contraseña debe poseer más de 4 caracteres').max(20),
    repassword: yup.string().required('Debe ingresar nuevamente la contraseña').min(4, 'La contraseña debe poseer más de 4 caracteres').max(20),
});

const Register = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
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
