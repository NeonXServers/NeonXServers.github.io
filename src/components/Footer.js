import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link className="footer-link" to='/'><i className="bi-envelope-fill" /><p>Email</p></Link>
                        <Link className="footer-link" to='/'><i className="bi-youtube" /><p>Youtube</p></Link>
                    </div>
                        <div className='social-media-wrap'>
                            <Link to='/' className='social-logo'>
                                NeonX
                            </Link>

                            <small className='website-rights'>NeonX © 2022</small>
                        </div>
                    <div className='footer-link-items'>
                        <Link className="footer-link" to='/'><i className="bi-twitter" /><p>Twitter</p></Link>
                        <a className="footer-link" href='https://neonx.page.link/discord'><i className="bi-discord" /><p>Discord</p></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
