import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import Card from '../Card.js';
import './Inicio.css';
import Heading from '../Heading';
import Button from '../Button';

function Inicio() {
    let btns = (
        <>
            <Button buttonStyle='btn--outline' buttonSize={'btn--large'}>
                Botón 1
            </Button>
            <Button buttonSize={'btn--large'}>Botón 2</Button>
        </>
    );
    return (
        <>
            <Heading
                img={
                    'https://img.freepik.com/foto-gratis/fondo-pared-ladrillo-luz-neon_117255-1838.jpg?w=900'
                }
                title='NeonX'
                subtitle='El slogan de NeonX'
                buttons={btns}
            />
            <div className='container'>
                <div className='cards-container section'>
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
                        path='https://twitter.com/search?q=%23StopTheWar&src=typeahead_click&f=top'
                        children='#StopTheWar'
                        image='https://ak.picdn.net/shutterstock/videos/20242933/thumb/12.jpg'
                    />
                </div>
                <div className="whois section">
                    <h1 className="whoistitle">¿Qué es NeonX?</h1>
                    <p className="whoistxt">NeonX es un proyecto creado por unos chavales de 1º de Grado Superior de Desarrollo de Aplicaciones Web
                        con la finalidad de aprender con un método autodidacta y externo a las clases impartidas en un centro. <br />
                        Por el momento está en desarrollo el servidor del juego GTA V, pero hay planes para crear nuevos proyectos en un futuro próximo. <br />
                        ¿Estás interesado en nuestras futuras ideas y quieres ayudar? ¡Apoyanos con una donación!</p>
                    <Button>Donar</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Inicio;
