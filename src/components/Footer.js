import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Contáctanos</h2>
                        <Link to='/contacto'>Contacto</Link>
                        <Link to='/'>Email</Link>
                        <Link to='/'>Teléfono</Link>
                        <Link to='/'>Pito</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Redes Sociales</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Discord</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <Link to='/' className='social-logo'>
                        NeonX
                        <i class='fab fa-typo3' />
                    </Link>
                    <small class='website-rights'>NeonX © 2022</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
