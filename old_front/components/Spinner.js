import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='columns is-centered mt-5'>
            <Loader type='Grid' color='#00BFFF' height={100} width={100} />
        </div>
    );
};

export default Spinner;
