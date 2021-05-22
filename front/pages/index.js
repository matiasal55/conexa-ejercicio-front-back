import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';

const Index = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

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
                    <button className='button is-info'>Login</button>
                    {console.log(errors)}
                </form>
            </div>
        </Layout>
    );
};

export default Index;
