import React, { useEffect } from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import PatchCard from '../../PatchCard';
import './Parches.css';

function GTAParches() {
    useEffect(() => {
        patchCards();
    }, []);

    window.addEventListener('resize', function () {
        patchCards();
    });

    const parche1 = {
        tagColor: '#1A8700',
        title: 'Notas de la versión V0.0.1',
        tagLabel: '🔥 HOLA',
        date: '📅 1/12/28',
        added: ['Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas'],
        modified: [
            'Cosas modificadas',
            'Cosas modificadas',
            'Cosas modificadas',
            'Cosas modificadas',
        ],
        removed: [
            'Cosas eliminadas',
            'Cosas eliminadas',
            'Cosas eliminadas',
            'Cosas eliminadas',
        ],
        events: ['Eventos', 'Eventos', 'Eventos', 'Eventos'],
        others: ['Otras cosas', 'Otras cosas', 'Otras cosas', 'Otras cosas'],
        ideas: [
            'Cosas en el punto de mira',
            'Cosas en el punto de mira',
            '(Se harán en el futuro)',
            '(Se harán en el futuro)',
        ],
    };
    const parche2 = {
        title: 'Notas de la versión V0.0.2',
        date: '📅 11/12/28',
        added: ['Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas'],
        events: ['Eventos', 'Eventos', 'Eventos', 'Eventos'],
        ideas: [
            'Cosas en el punto de mira',
            'Cosas en el punto de mira',
            '(Se harán en el futuro)',
            '(Se harán en el futuro)',
        ],
    };
    const parche3 = {
        title: 'Notas de la versión V0.0.3',
        date: '📅 21/12/28',
        removed: [
            'Cosas eliminadas',
            'Cosas eliminadas',
            'Cosas eliminadas',
            'Cosas eliminadas',
        ],
        events: ['Eventos', 'Eventos', 'Eventos', 'Eventos'],
        others: ['Otras cosas', 'Otras cosas', 'Otras cosas', 'Otras cosas'],
        ideas: [
            'Cosas en el punto de mira',
            'Cosas en el punto de mira',
            '(Se harán en el futuro)',
            '(Se harán en el futuro)',
        ],
    };

    const parche4 = {
        title: 'Notas de la versión V0.0.4',
        date: '📅 31/12/28',
        added: ['Cosas nuevas'],
        modified: ['Cosas modificadas'],
        removed: ['Cosas eliminadas'],
        events: ['Eventos'],
        others: ['Otras cosas'],
        ideas: ['Cosas en el punto de mira', '(Se harán en el futuro)'],
    };
    const parche5 = {
        tagLabel: '👋 Wenas',
        title: 'Notas de la versión V0.0.5',
        date: '📅 51/12/28',
        added: ['Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas', 'Cosas nuevas'],
        others: ['Otras cosas'],
    };

    const parches = [parche1, parche2, parche3, parche4, parche5];

    function patchCards() {
        let cardList = [];
        for (let index = 0; index < parches.length; index++) {
            let parche = parches[index];
            let addEmoji = (emoji, text) => {
                if (text) {
                    for (let i = 0; i < text.length; i++) {
                        text[i] = emoji + ' ' + text[i];
                    }
                    let x = [];
                    for (let i = 0; i < text.length; i++) {
                        x.push(<p key={'parcheText' + i}>{text[i]}</p>);
                    }
                    return (
                        <>
                            {x} <br />
                        </>
                    );
                }
            };
            if (index === parches.length - 1) {
                cardList.push(
                    <PatchCard
                        key={'cardList' + index}
                        current
                        tagLabel={parche.tagLabel}
                        tagColor={parche.tagColor}
                        title={parche.title}
                        date={parche.date}
                        children={
                            <>
                                {addEmoji('🔶', parche.added)}
                                {addEmoji('🔨', parche.modified)}
                                {addEmoji('❌', parche.removed)}
                                {addEmoji('🎭', parche.events)}
                                {addEmoji('📚', parche.others)}
                                {addEmoji('💡', parche.ideas)}
                            </>
                        }
                    />
                );
            } else {
                cardList.push(
                    <PatchCard
                        key={'cardList' + index}
                        tagLabel={parche.tagLabel}
                        tagColor={parche.tagColor}
                        title={parche.title}
                        date={parche.date}
                        children={
                            <>
                                {addEmoji('🔶', parche.added)}
                                {addEmoji('🔨', parche.modified)}
                                {addEmoji('❌', parche.removed)}
                                {addEmoji('🎭', parche.events)}
                                {addEmoji('📚', parche.others)}
                                {addEmoji('💡', parche.ideas)}
                            </>
                        }
                    />
                );
            }
        }

        function addCardsToContainer() {
            let cardListContainer = [];

            for (let i = 0; i < cardList.length; i++) {
                cardListContainer.push(cardList[i]);
            }
            cardListContainer.reverse();
            return (
                <div
                    className='patch-cards-container-patch'
                    key='cardListContainer'
                >
                    {cardListContainer}
                </div>
            );
        }

        return addCardsToContainer();
    }

    return (
        <>
            <div className='container'>
                <h1 className='parches-title'>Notas de Parches</h1>
                {patchCards()}
            </div>
            <Footer />
        </>
    );
}

export default GTAParches;
