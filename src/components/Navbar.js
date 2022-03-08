import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdownButton, setDropdownButton] = useState(false);
    const handleDropdownButton = () => setDropdownButton(!dropdownButton);
    const closeDropdowns = () => {
        gtav.current.className = gtav.current.className.replace(' active', '');
        contacto.current.className = contacto.current.className.replace(
            ' active',
            ''
        );
    };
    const openDropdown = (id) => {
        handleDropdownButton();
        if (!id.current.className.includes('active')) {
            closeDropdowns();
            id.current.className = id.current.className + ' active';
        } else {
            id.current.className = id.current.className.replace(' active', '');
        }
    };
    const handleClick = () => {
        setClick(!click);
        closeDropdowns();
        if (!click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'overlay';
        }
    };
    const closeMobileMenu = () => {
        setClick(false);
        document.body.style.overflow = 'overlay';
        closeDropdowns();
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    const gtav = useRef();
    const contacto = useRef();

    window.addEventListener('resize', showButton);

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
                                        to='/gtav'
                                        onClick={closeMobileMenu}
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li className='dropdown-item'>
                                    <Link
                                        className='dropdown-links'
                                        to='/gtav/algo'
                                        onClick={closeMobileMenu}
                                    >
                                        Algo
                                    </Link>
                                </li>
                                <li className='dropdown-item'>
                                    <a
                                        className='dropdown-links'
                                        href='https://neonx.tebex.io/'
                                        onClick={closeMobileMenu}
                                    >
                                        Tienda
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
                                        href='https://neonx.page.link/discord'
                                        className='dropdown-links'
                                        onClick={closeMobileMenu}
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                            <div className='nav-item'>
                                <Link
                                    to='/'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    Cualquier Vaina
                                </Link>
                            </div>
                        </li>
                    </ul>
                    {button && (
                        <Button
                            to={'/'}
                            buttonSize={'btn--large'}
                            buttonStyle={'btn--outline'}
                        >
                            Cualquier Vaina
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
