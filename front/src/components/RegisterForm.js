import { useForm } from 'react-hook-form';
import Input from './Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidate } from '../utils/validations';
import { registerUser, userSelector } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';

const RegisterForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidate()),
    });
    const dispatch = useDispatch();
    const selector = useSelector(userSelector);
    const { existsToken, serverState, loading } = selector;

    const onSubmit = (data) => {
        dispatch(registerUser(data));
    };

    return (
        <>
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
                {existsToken === false ? (
                    <p className='help is-danger my-5'>El correo electrónico ya se encuentra registrado</p>
                ) : !serverState ? (
                    <p className='help is-danger my-5'>Hubo un problema interno. Intente más tarde</p>
                ) : null}
            </div>
        </>
    );
};

export default RegisterForm;
