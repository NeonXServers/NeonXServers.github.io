import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { Heading } from '../Heading';

function Inicio() {
    return (
        <>
            <Heading
                img={
                    'https://img.freepik.com/foto-gratis/fondo-pared-ladrillo-luz-neon_117255-1838.jpg?w=900'
                }
                title='NeonX'
                subtitle='Esto es un subtítulo OLE'
                btnTxt1='Botón 1'
                btnTxt2='Botón 2'
                buttons='2'
            />
            <div>Inicio</div>
            <div>Inicio</div>
            <div>Inicio</div>
            <div>Inicio</div>
            <Footer />
        </>
    );
}
export default Inicio;
