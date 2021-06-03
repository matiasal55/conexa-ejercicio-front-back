import Layout from '../components/Layout';
import ErrorMessage from '../components/ErrorMessage';

const Custom500 = () => {
    return (
        <Layout title='Página erronea'>
            <ErrorMessage
                image='/img/server.png'
                alt='Internal error'
                message='Tuvimos un problema. Vuelva en unos instantes. Sepa disculpar la molestia ocasionada.'
            />
        </Layout>
    );
};

export default Custom500;
