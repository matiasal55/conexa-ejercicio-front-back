import Navbar from './Navbar';
import 'bulma/css/bulma.min.css';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className='container is-fluid my-6'>{props.children}</div>
        </>
    );
};

export default Layout;
