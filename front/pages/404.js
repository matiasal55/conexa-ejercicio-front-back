import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';

const Custom404 = () => {
    return (
        <Layout title='Página erronea'>
            <ErrorMessage image='/img/error-404.png' alt='User error' message='Lo sentimos. Te equivocaste de ruta' />
        </Layout>
    );
};

export default Custom404;
