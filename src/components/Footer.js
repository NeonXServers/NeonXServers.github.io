import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contáctanos</h2>
                        <Link to='/contacto'>Contacto</Link>
                        <Link to='/'>Email</Link>
                        <Link to='/'>Teléfono</Link>
                        <Link to='/'>Pito</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Redes Sociales</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Discord</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <Link to='/' className='social-logo'>
                        NeonX
                    </Link>
                    <small className='website-rights'>NeonX © 2022</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;
