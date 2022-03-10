import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import Card from '../Card.js';
import './Inicio.css';
import { Heading } from '../Heading';

function Inicio() {
    return (
        <>
            <Heading
                img={
                    'https://img.freepik.com/foto-gratis/fondo-pared-ladrillo-luz-neon_117255-1838.jpg?w=900'
                }
                title='NeonX'
                subtitle='El slogan de NeonX'
                btnTxt1='Botón 1'
                btnTxt2='Botón 2'
                buttons='2'
            />
            <div className='container'>
                <div className='cards-container'>
                    <Card
                        isUrl
                        tagColor='#ff2828'
                        width='30%'
                        label='New'
                        path='https://neonx.page.link/discord'
                        text='Nuevo servidor de discord de NeonX (GTA V)'
                        image='https://i.blogs.es/760434/discordportada/1366_2000.jpeg'
                    />
                    <Card
                        isUrl
                        tagColor='blue'
                        width='30%'
                        label='Hot'
                        path='https://google.com'
                        text='Nuevo servidor de discord de NeonX (GTA V)'
                        image='https://larepublica.pe/resizer/xr757tkwMqyNRTMX1tdsiOQ2pZU=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/3SXXEFW7IVG5JF4H7WSA3ZYEVE.png'
                    />
                    <Card
                        isUrl
                        tagColor='#ff2828'
                        width='30%'
                        label='New'
                        path='https://google.com'
                        text='Nuevo servidor de discord de NeonX (GTA V)'
                        image='https://larepublica.pe/resizer/xr757tkwMqyNRTMX1tdsiOQ2pZU=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/3SXXEFW7IVG5JF4H7WSA3ZYEVE.png'
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Inicio;
