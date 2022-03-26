import React, { useEffect, useState } from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import PatchCard from '../../PatchCard';
import './Parches.css';
import { firebase } from '../../../initFirebase';

function GTAParches() {
    const [patches, setPatches] = useState(Array);
    const db = firebase.database();
    useEffect(() => {
        const parcheRef = db.ref('parches');
        parcheRef.on('value', (snapshot) => {
            setPatches(snapshot.val());
        });
        return () => parcheRef.off();
    }, []);

    //         {
    //             "title": "",
    //             "date": "",
    //             "tag": {
    //                 "label": "",
    //                 "color": ""
    //             },
    //             "description": {
    //                 "added": [],
    //                 "modified": [],
    //                 "removed": [],
    //                 "events": [],
    //                 "others": [],
    //                 "ideas": []
    //             }
    //         }

    function patchCards() {
        let cardList = [];
        const parches = patches.filter((element) => {
            return element !== null;
        });
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
                            {x} <hr />
                        </>
                    );
                }
            };
            if (index === parches.length - 1) {
                cardList.push(
                    <PatchCard
                        key={'cardList' + index}
                        current
                        tagLabel={parche.tag ? parche.tag.label : null}
                        tagColor={parche.tag ? parche.tag.color : null}
                        title={parche.title}
                        date={parche.date}
                        children={
                            <>
                                {addEmoji('🔶', parche.description.added)}
                                {addEmoji('🔨', parche.description.modified)}
                                {addEmoji('❌', parche.description.removed)}
                                {addEmoji('🎭', parche.description.events)}
                                {addEmoji('📚', parche.description.others)}
                                {addEmoji('💡', parche.description.ideas)}
                            </>
                        }
                    />
                );
            } else {
                cardList.push(
                    <PatchCard
                        key={'cardList' + index}
                        tagLabel={parche.tag ? parche.tag.label : null}
                        tagColor={parche.tag ? parche.tag.color : null}
                        title={parche.title}
                        date={parche.date}
                        children={
                            <>
                                {addEmoji('🔶', parche.description.added)}
                                {addEmoji('🔨', parche.description.modified)}
                                {addEmoji('❌', parche.description.removed)}
                                {addEmoji('🎭', parche.description.events)}
                                {addEmoji('📚', parche.description.others)}
                                {addEmoji('💡', parche.description.ideas)}
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
