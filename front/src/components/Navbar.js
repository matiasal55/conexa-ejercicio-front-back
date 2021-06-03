import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['loremSession']);
    const dispatch = useDispatch();
    const cookieSession = cookies.loremSession;
    const history = useHistory();

    const endSession = () => {
        dispatch(logout());
        removeCookies('loremSession');
        return history.push('/');
    };

    return (
        <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link to='/' className='navbar-item'>
                    Lorem Ipsum
                </Link>
                {cookieSession ? (
                    <a
                        role='button'
                        onClick={() => setIsActive(!isActive)}
                        className={`navbar-burger burger${isActive ? ' is-active' : ''}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                    </a>
                ) : null}
            </div>
            {cookieSession ? (
                <div id='navbarBasicExample' className={`navbar-menu${isActive ? ' is-active' : ''}`}>
                    <div className='navbar-start'>
                        <Link to='/posts' className='navbar-item'>
                            Posts
                        </Link>
                        <Link to='/photos' className='navbar-item'>
                            Photos
                        </Link>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <a className='button is-info' onClick={endSession}>
                                    <strong>Logout</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </nav>
    );
};

export default Navbar;
