import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdownButton, setDropdownButton] = useState(false);
    const handleDropdownButton = () => setDropdownButton(!dropdownButton);
    const closeDropdowns = () => {
        gtav.current.classList.remove('active');
        contacto.current.classList.remove('active');
    };
    const openDropdown = (id) => {
        handleDropdownButton();
        if (!id.current.className.includes('active')) {
            closeDropdowns();
            id.current.classList.add('active');
        } else {
            id.current.classList.remove('active');
        }
    };
    const handleClick = () => {
        setClick(!click);
        closeDropdowns();
        if (!click) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'overlay';
        }
    };
    const closeMobileMenu = () => {
        setClick(false);
        document.body.style.overflowY = 'overlay';
        closeDropdowns();
    };
    const closeMobileMenuOnResize = () => {
        if (window.innerWidth > 960) {
            closeMobileMenu();
        }
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        closeMobileMenuOnResize();
        showButton();
    }, []);
    const gtav = useRef();
    const contacto = useRef();

    window.addEventListener('resize', function () {
        showButton();
        closeMobileMenuOnResize();
    });

    return (
        <>
            <div className='navbar-space'></div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='logo-container'>
                        <Link to='/' className='navbar-logo'>
                            <img
                                className='logo-image'
                                src={require('../images/NeonXLogo.png')}
                                alt='NeonX'
                            />
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <button className='menu-button'>
                            <div
                                className={
                                    click
                                        ? 'button-hamburguer active'
                                        : 'button-hamburguer'
                                }
                            ></div>
                        </button>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                className='nav-links'
                                to='/'
                                onClick={closeMobileMenu}
                            >
                                INICIO
                            </Link>
                        </li>
                        <li ref={gtav} className={'nav-item dropdown'}>
                            <div className='nav-div'>
                                <Link
                                    className='nav-links'
                                    to='/gtav'
                                    onClick={closeMobileMenu}
                                >
                                    GTA V
                                </Link>
                                <button
                                    onClick={() => openDropdown(gtav)}
                                    className='dropdown-button'
                                >
                                    &#8227;
                                </button>
                            </div>

                            <ul className='dropdown-content'>
                                <li className='dropdown-item'>
                                    <Link
                                        className='dropdown-links'
                                        to='/gtav/patch-notes'
                                        onClick={closeMobileMenu}
                                    >
                                        <i className='bi bi-journal-code'></i>{' '}
                                        Parches
                                    </Link>
                                </li>
                                <li className='dropdown-item'>
                                    <a
                                        className='dropdown-links'
                                        href='https://neonx.tebex.io/'
                                        onClick={closeMobileMenu}
                                    >
                                        <i className='bi bi-cart3'></i> Tienda
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li ref={contacto} className={'nav-item dropdown'}>
                            <div className='nav-div'>
                                <Link
                                    className='nav-links'
                                    to='/contacto'
                                    onClick={closeMobileMenu}
                                >
                                    CONTACTO
                                </Link>
                                <button
                                    onClick={() => openDropdown(contacto)}
                                    className='dropdown-button'
                                >
                                    &#8227;
                                </button>
                            </div>
                            <ul className='dropdown-content'>
                                <li className='dropdown-item'>
                                    <a
                                        href='https://discord.gg/eC9XntUgtN'
                                        className='dropdown-links'
                                        onClick={closeMobileMenu}
                                    >
                                        <i className='bi-discord' /> Discord
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <div className='nav-item'>
                            <a
                                href='https://discord.com/api/oauth2/authorize?client_id=940266552106835968&redirect_uri=http%3A%2F%2Fneonx.sytes.net&response_type=code&scope=email%20identify%20guilds'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Iniciar Sesión
                            </a>
                        </div>
                    </ul>
                    {button && (
                        <Button
                            isUrl
                            to={
                                'https://discord.com/api/oauth2/authorize?client_id=940266552106835968&redirect_uri=http%3A%2F%2Fneonx.sytes.net&response_type=code&scope=email%20identify%20guilds'
                            }
                            buttonSize={'btn--large'}
                            buttonStyle={'btn--outline'}
                        >
                            Iniciar Sesión
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
