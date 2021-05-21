import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='navbar is-warning' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link href='/'>
                    <a className='navbar-item'>
                        <img src='https://conexa.ai/wp-content/uploads/2021/03/logo.svg' width={112} height={28} />
                    </a>
                </Link>
                <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                </a>
            </div>
            <div id='navbarBasicExample' className='navbar-menu'>
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
        </nav>
    );
};

export default Navbar;
