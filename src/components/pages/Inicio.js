import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import Card from '../Card.js';
import './Inicio.css';
import { Heading } from '../Heading';
import { Button } from '../Button';

function Inicio() {
    let btns = () => {
        return (
            <>
                <Button buttonStyle='btn--outline' buttonSize={'btn--large'}>
                    Botón 1
                </Button>
                <Button buttonSize={'btn--large'}>Botón 2</Button>
            </>
        );
    };
    return (
        <>
            <Heading
                img={
                    'https://img.freepik.com/foto-gratis/fondo-pared-ladrillo-luz-neon_117255-1838.jpg?w=900'
                }
                title='NeonX'
                subtitle='El slogan de NeonX'
                buttons={btns()}
            />
            <div className='container'>
                <div className='cards-container'>
                    <Card
                        isUrl
                        width='30vw'
                        label='⭐ New'
                        path='https://neonx.page.link/discord'
                        children='Nuevo servidor de discord de NeonX (GTA V)'
                        image='https://i.blogs.es/760434/discordportada/1366_2000.jpeg'
                    />
                    <Card
                        tagColor='#ff2828'
                        width='30vw'
                        label='🔥 Hot'
                        path='/news'
                        children='La salida de NeonX GTA V se retrasa'
                        image='https://media.discordapp.net/attachments/894645474513014914/952254026001563679/unknown.png'
                    />
                    <Card
                        isUrl
                        width='30vw'
                        label='⭐ New'
                        path='https://google.com'
                        children='Evento Sorpresa'
                        image='https://larepublica.pe/resizer/xr757tkwMqyNRTMX1tdsiOQ2pZU=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/3SXXEFW7IVG5JF4H7WSA3ZYEVE.png'
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Inicio;
