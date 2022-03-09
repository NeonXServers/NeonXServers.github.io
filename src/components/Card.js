import React,{useRef} from 'react';//Todo
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ path, label, image, text, width, isUrl, tagColor  }) {
    width = width ? width : "auto";
    const tag = useRef();
    if(tagColor){
        var r = document.querySelector('tag');
            tag.current.style.setProperty('--background-color', tagColor);
    }
    return (
        <li className="card-container" style={{ maxWidth: width }}>
            <Link className='cards__item__link' to={path}>
                <figure ref={tag} className='cards__item__pic-wrap' style={{backgroundColor: '#fff'}} data-category={label}>
                    <img
                        className='cards__item__img'
                        src={image}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{text}</h5>
                </div>
            </Link>
        </li>
    );
}

export default Card;