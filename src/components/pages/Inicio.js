import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import Card from '../Card.js';
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
            <div className="container">
                <Card tagColor="red" width="200px" label="Importante" path="https://google.com" text="Hola" image="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"  />
            </div>
            <Footer />
        </>
    );
}
export default Inicio;
