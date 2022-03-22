import React from 'react';
import '../../../App.css';
import PatchCard from '../../PatchCard';
import './Parches.css';

function GTAParches() {
    return (
        <>
            <div className="container">
                <h1 className="title">Notas de Parches</h1>
                <div className='cards-container-patch'>
                    <PatchCard
                        width='30vw'
                        title="ñ"
                        label='⭐ New'
                        children='Nuevo servidor de discord de NeonX (GTA V)'
                    />
                    <PatchCard
                        tagColor='#ff2828'
                        title="ñ"
                        width='30vw'
                        label='🔥 Hot'
                        children='La salida de NeonX GTA V se retrasa'
                    />
                    <PatchCard
                        width='30vw'
                        title="ñ"
                        label='⭐ New'
                        children='#StopTheWar'
                    />
                </div>
            </div>
        </>
    );
}

export default GTAParches;