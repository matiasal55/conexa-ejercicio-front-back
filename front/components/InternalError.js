import Image from 'next/image';

const InternalError = () => {
    return (
        <>
            <div className='has-text-centered my-3'>
                <Image src='/server.png' className='image is-square is-128x128' alt='Internal error' width='200' height='200' />
                <p className='is-size-3'>Tuvimos un problema. Vuelva en unos instantes. Sepa disculpar la molestia ocasionada.</p>
            </div>
        </>
    );
};

export default InternalError;
