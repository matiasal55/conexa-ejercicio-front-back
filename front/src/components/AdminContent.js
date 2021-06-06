import InternalError from './InternalError';
import Spinner from './Spinner';

const AdminContent = (props) => {
    const { condition, title, serverState, children } = props;

    return (
        <div>
            {condition ? (
                <>
                    <h1 className='is-size-1'>{title}</h1>
                    {children}
                </>
            ) : serverState ? (
                <Spinner />
            ) : (
                <InternalError />
            )}
        </div>
    );
};

export default AdminContent;
