import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['loremSession']);
    const dispatch = useDispatch();
    const router = useRouter();
    const cookieSession = cookies.loremSession;

    const endSession = () => {
        dispatch(logout());
        removeCookies('loremSession');
        router.push('/');
    };

    return (
        <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link href='/'>
                    <a className='navbar-item'>Lorem Ipsum</a>
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
                        <Link href='/posts'>
                            <a className='navbar-item'>Posts</a>
                        </Link>
                        <Link href='/photos'>
                            <a className='navbar-item'>Photos</a>
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
