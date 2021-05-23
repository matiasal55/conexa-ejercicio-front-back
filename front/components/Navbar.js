import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { existsToken } from '../features/userSlice';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const tokenState = useSelector(existsToken);

    return (
        <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link href='/'>
                    <a className='navbar-item'>
                        <img src='https://conexa.ai/wp-content/uploads/2021/03/logo.svg' width={112} height={28} />
                    </a>
                </Link>
                {tokenState ? (
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
            {tokenState ? (
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
                                <a className='button is-info'>
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
