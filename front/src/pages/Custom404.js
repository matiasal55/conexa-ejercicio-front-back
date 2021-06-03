import ErrorMessage from '../components/ErrorMessage';
import image from '../images/error-404.png';

const Custom404 = () => {
    return <ErrorMessage image={image} alt='User error' message='Lo sentimos. Te equivocaste de ruta' />;
};

export default Custom404;
