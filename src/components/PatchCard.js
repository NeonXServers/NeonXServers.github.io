import React, { useEffect } from 'react';
import './PatchCard.css';

function PatchCard({ title, label, tagColor, children, width }) {
    width = width ? width : 'auto';
    if (!tagColor) {
        tagColor = '#0095ff';
    }
    useEffect(() => {
        var cardTag = document.getElementById('patch-card-' + tagColor);

        cardTag.style.setProperty('--background-color', tagColor);
        cardTag.style.setProperty(
            '--background-opacity-color',
            tagColor + '33'
        );
    }, []);

    return (
        <li className='patch-card-container' style={{ width: width }}>
            <div
                id={'patch-card-' + tagColor}
                className='patch-cards__item__pic-wrap'
                style={{ backgroundColor: '#fff' }}
                data-category={label}
            >
                <h2>{title}</h2>
            </div>
            <div className='patch-cards__item__info'>
                <h5 className='patch-cards__item__text'>{children}</h5>
            </div>
        </li>
    );

}

export default PatchCard;
