import React from 'react';
import '../App.css';
import './Heading.css';

var Heading;
export default Heading = ({ title, subtitle, img, buttons }) => {
    const background = img
        ? `url('${img}') center center/cover no-repeat`
        : `none`;
    return (
        <div className='heading-container' style={{ background: background }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className='heading-btns'>{buttons}</div>
        </div>
    );
};
