import React, { useRef, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import Card from '../Card.js';
import './Inicio.css';
import Heading from '../Heading';
import Button from '../Button';
import { animateScroll as scroll } from 'react-scroll';
const scrollToSection = (ref) => {
    scroll.scrollTo(ref.current.offsetTop - 80, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    });
};
function Inicio() {
    const whois = useRef(null);
    const executeScroll = () => {
        scrollToSection(whois);
    };

    let btns = (
        <>
            <Button
                buttonStyle='btn--outline'
                buttonSize={'btn--large'}
                onClick={executeScroll}
            >
                Más Info
            </Button>
            <Button buttonSize={'btn--large'} to='gtav'>
                Ver GTA V
            </Button>
        </>
    );
    return (
        <>
            <Heading
                img={
                    'https://img.freepik.com/foto-gratis/fondo-pared-ladrillo-luz-neon_117255-1838.jpg?w=900'
                }
                title='NeonX'
                subtitle="Future's neon fate"
                buttons={btns}
            />
            <div className='container'>
                <div className='whois section' ref={whois}>
                    <img
                        className='whoisimg'
                        src={require('../../images/NeonXLogoPanorámico.png')}
                        alt=''
                    />
                    <div className='whoischilds'>
                        <h1 className='whoistitle'>¿Qué es NeonX?</h1>
                        <p className='whoistxt'>
                            NeonX es un proyecto creado por unos chavales de 1º
                            de Grado Superior de Desarrollo de Aplicaciones Web
                            con la finalidad de aprender con un método
                            autodidacta y externo a las clases impartidas en un
                            centro. <br />
                            <br />
                            Por el momento está en desarrollo el servidor del
                            juego GTA V, pero hay planes para crear nuevos
                            proyectos en un futuro próximo. <br />
                            <br />
                            ¿Estás interesado en nuestras futuras ideas y
                            quieres ayudar? ¡Apoyanos con una donación!
                        </p>
                        <Button>Donar</Button>
                    </div>
                </div>
                <div className='cards-container-inicio section'>
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
            </div>
            <Footer />
        </>
    );
}
export default Inicio;
