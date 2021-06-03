import ErrorMessage from './ErrorMessage';

const InternalError = () => {
    return (
        <ErrorMessage
            image='/img/server.png'
            alt='Internal error'
            message='Tuvimos un problema. Vuelva en unos instantes. Sepa disculpar la molestia ocasionada.'
        />
    );
};

export default InternalError;
