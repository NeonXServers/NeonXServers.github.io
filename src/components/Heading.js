import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Heading.css';

export const Heading = ({
    title,
    subtitle,
    img,
    buttons,
    btnTxt1,
    btnTo1,
    btnIsUrl1,
    btnStyle1,
    btnSize1,
    btnOnClick1,
    btnTxt2,
    btnTo2,
    btnIsUrl2,
    btnStyle2,
    btnSize2,
    btnOnClick2
}) => {
    var btns = () => { };
    switch (buttons) {
        case '1':
            btns = () => {
                return (
                    <Button
                        className='btns'
                        buttonStyle={btnStyle1 ? btnStyle1 : 'btn--outline'}
                        buttonSize={btnSize1 ? btnSize1 : 'btn--large'}
                        to={btnTo1 ? btnTo1 : '/'}
                        isUrl={btnIsUrl1}
                        onClick={btnOnClick1}
                    >
                        {btnTxt1}
                    </Button>
                );
            };

            break;
        case '2':
            btns = () => {
                return (
                    <>
                        <Button
                            className='btns'
                            buttonStyle={btnStyle1 ? btnStyle1 : 'btn--outline'}
                            buttonSize={btnSize1 ? btnSize1 : 'btn--large'}
                            to={btnTo1 ? btnTo1 : '/'}
                            isUrl={btnIsUrl1}
                            onClick={btnOnClick1}
                        >
                            {btnTxt1}
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle={btnStyle2 ? btnStyle2 : 'btn--primary'}
                            buttonSize={btnSize2 ? btnSize2 : 'btn--large'}
                            to={btnTo2 ? btnTo2 : '/'}
                            isUrl={btnIsUrl2}
                            onClick={btnOnClick2}
                        >
                            {btnTxt2}
                        </Button>
                    </>
                );
            };
            break;
        default:
            break;
    }

    const background = img
        ? `url('${img}') center center/cover no-repeat`
        : `none`;
    return (
        <div className='heading-container' style={{ background: background }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className='heading-btns'>{btns()}</div>
        </div>
    );
};
