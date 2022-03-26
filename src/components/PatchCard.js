import React, { useEffect } from 'react';
import './PatchCard.css';
import Button from './Button';
function PatchCard({
    title,
    date,
    tagColor,
    tagLabel,
    children,
    width,
    current,
}) {
    if (!tagColor) {
        tagColor = '#0095ff';
    }
    useEffect(() => {
        if (tagLabel) {
            var cardTag = document.getElementById('patch-card-' + tagColor);

            cardTag.style.setProperty('--background-color', tagColor);
            cardTag.style.setProperty(
                '--background-opacity-color',
                tagColor + '33'
            );
        }
    }, []);
    function tagsContainer() {
        let tag;
        if (tagLabel) {
            tag = (
                <div
                    className='patch-card-tag'
                    id={'patch-card-' + tagColor}
                    style={{
                        marginLeft: '5px',
                    }}
                >
                    {tagLabel}
                </div>
            );
        }
        let currentTag;
        if (current) {
            currentTag = (
                <div
                    className='patch-card-tag'
                    style={{
                        boxShadow: '0px 0px 1vmin #b200e7',
                        backgroundColor: '#b200e733',
                        color: '#b200e7',
                        border: '3px solid #b200e7',
                        marginRight: '5px',
                        marginLeft: '5px',
                    }}
                >
                    ⌚ Current
                </div>
            );
        }
        return (
            <>
                <div className='patch-card-tags-container'>
                    <div
                        className='patch-card-tag'
                        style={{
                            boxShadow: '0px 0px 1vmin #ff2828',
                            backgroundColor: '#ff282833',
                            color: '#ff2828',
                            border: '3px solid #ff2828',
                            marginRight: '5px',
                        }}
                    >
                        {date}
                    </div>
                    {currentTag}
                    {tag}
                </div>
            </>
        );
    }

    return (
        <div className='patch-card-container' style={{ width: width }}>
            <div className='patch-cards__item__title'>
                <h2>{title}</h2>
                {tagsContainer()}
            </div>
            <div className='patch-cards__item__text'>{children}</div>
            <div className='patch-cards-button'>
                <Button buttonStyle={'btn--outline'} to='/'>
                    Más Información
                </Button>
            </div>
        </div>
    );
}

export default PatchCard;
