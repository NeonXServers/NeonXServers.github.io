import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    buttonStyle,
    buttonSize,
    to,
    isUrl,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (isUrl) {
        return (
            <a href={to ? to : 'https://google.com'} className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    type={type}
                >
                    {children}
                </button>
            </a>
        );
    } else {
        return (
            <Link to={to ? to : '/'} className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    type={type}
                >
                    {children}
                </button>
            </Link>
        );
    }
};
