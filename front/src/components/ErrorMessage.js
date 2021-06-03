import { Link } from 'react-router-dom';

const ErrorMessage = (props) => {
    const { image, alt, message } = props;
    return (
        <div className='has-text-centered my-3'>
            <img src={image} className='is-square' alt={alt} />
            <p className='is-size-3'>{message}</p>
            <Link to='/' onClick={() => (window.location.href = '/')} className='button is-info mt-3'>
                Volver a Home
            </Link>
        </div>
    );
};

export default ErrorMessage;
