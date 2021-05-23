import Image from 'next/image';
import Link from 'next/link';

const ErrorMessage = (props) => {
    const { image, alt, message } = props;
    return (
        <>
            <div className='has-text-centered my-3'>
                <Image src={image} className='image is-square is-128x128' alt={alt} width='200' height='200' />
                <p className='is-size-3'>{message}</p>
                <Link href='/'>
                    <a className='button is-info mt-5'>Volver a Home</a>
                </Link>
            </div>
        </>
    );
};

export default ErrorMessage;
