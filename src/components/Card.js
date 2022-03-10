import React, { useEffect } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ path, label, image, text, width, isUrl, tagColor }) {
    width = width ? width : 'auto';
    useEffect(() => {
        var cardTag = document.getElementById('card-tag');
        if (tagColor) {
            cardTag.style.setProperty('--background-color', tagColor);
        }
    }, []);

    if (isUrl) {
        return (
            <li className='card-container' style={{ width: width }}>
                <a className='cards__item__link' href={path}>
                    <div
                        id='card-tag'
                        className='cards__item__pic-wrap'
                        style={{ backgroundColor: '#fff' }}
                        data-category={label}
                    >
                        <img className='cards__item__img' src={image} />
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>
                    </div>
                </a>
            </li>
        );
    } else {
        return (
            <li className='card-container' style={{ width: width }}>
                <Link className='cards__item__link' to={path}>
                    <div
                        id='card-tag'
                        className='cards__item__pic-wrap'
                        style={{ backgroundColor: '#fff' }}
                        data-category={label}
                    >
                        <img className='cards__item__img' src={image} />
                    </div>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>
                    </div>
                </Link>
            </li>
        );
    }
}

export default Card;
