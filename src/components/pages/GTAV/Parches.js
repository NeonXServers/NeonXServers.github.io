import React from 'react';
import '../../../App.css';
import PatchCard from '../../PatchCard';
import './Parches.css';

function GTAParches() {
    function patchCards(cards) {

    }
    return (
        <>
            <div className="container">
                <h1 className="title">Notas de Parches</h1>
                <div className='patch-cards-container-patch'>
                    <PatchCard
                        tagColor='#ff2828'
                        width='30vw'
                        title="v0.0.5"
                        label='📅 31/12/28'
                        children={(
                            <>
                                <ul>
                                    <li className="patch-cards-li">🔶 Funciones Añadidas</li>
                                    <ul>
                                        <li className="patch-cards-sub-li">🔹 Armas: Añadido Recoil a  las armas de fuego</li>
                                        <li className="patch-cards-sub-li">🔹 Coches: Los coches</li>
                                        <li className="patch-cards-sub-li">🔹 Otra cosa</li>
                                        <li className="patch-cards-sub-li">🔹 Otra cosa</li>
                                        <li className="patch-cards-sub-li">🔹 Otra cosa</li>
                                    </ul>
                                </ul>

                            </>
                        )}
                    />
                    <PatchCard
                        title="v0.0.4"
                        width='30vw'
                        label='📅 31/12/28'
                        children='La salida de NeonX GTA V se retrasa'
                    />
                    <PatchCard
                        title="v0.0.3"
                        width='30vw'
                        label='📅 31/12/28'
                        children='La salida de NeonX GTA V se retrasa'
                    />
                    {/* <PatchCard
                        title="v0.0.2"
                        width='30vw'
                        label='📅 31/12/28'
                        children='La salida de NeonX GTA V se retrasa'
                    />
                    <PatchCard
                        title="v0.0.1"
                        width='30vw'
                        label='📅 31/12/28'
                        children='La salida de NeonX GTA V se retrasa'
                    /> */}
                </div>
            </div>
        </>
    );
}

export default GTAParches;