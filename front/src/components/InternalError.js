import ErrorMessage from './ErrorMessage';
import image from '../images/server.png';

const InternalError = () => {
    return <ErrorMessage image={image} alt='Internal error' message='Tuvimos un problema. Vuelva en unos instantes. Sepa disculpar la molestia ocasionada.' />;
};

export default InternalError;
