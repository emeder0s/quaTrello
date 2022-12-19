import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs';
import { defaultFetch } from '../../../helpers/defaultFetch';
import { Activities } from './Activities';

import { CardDescription } from './CardDescription';
export const CardEdit = ({ showCardEdit, setShowCardEdit, currentCard }) => {

    const [cardEdition, setCardEdition] = useState({ id: 0, title: "", description_: "", checklist_: "", configuration_: "", date_: "" })
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        //Info de la tarjeta 

        /*
        fetch(`/lists/${board}`).then((res) => res.json())
            .then((res) => {
                setUserLists(res);
            })*/
            console.log(currentCard)
        setCardData({});
    }, [])

    const add = () => {
        setShowCardEdit(!showCardEdit);
    }

    const changeName = e => {
        setTitle(e.target.value)
    }

    const updateCard = () => {

    }
    return (
        <div className='carEditMenu'>
            
                <div className='listTitle'>
                    <input className='cardName' name="MiarTú" placeholder='Nombre tarjeta' onChange={changeName}></input>
                    <button className='close' onClick={add}>&#x2715;</button>
                </div>
                <CardDescription description={description} setDescription={setDescription}/>
                <br />
                <Activities />
                <br />
            
        </div>
    )
}
