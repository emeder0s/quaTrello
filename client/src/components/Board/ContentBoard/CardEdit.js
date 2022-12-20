import React, { useEffect, useState, useContext } from 'react'
import { defaultFetch } from '../../../helpers/defaultFetch';
import { BoardContext } from '../../../providers/boardProvider';
import { Activities } from './Activities';

import { CardDescription } from './CardDescription';
export const CardEdit = ({ showCardEdit, setShowCardEdit, currentCard, setCurrentCard}) => {

    const [cardEdition, setCardEdition] = useState({ id: 0, title: "", description_: "", checklist_: "", configuration_: "", date_: "" })
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cardData, setCardData] = useState();
    const { setRefresh} = useContext(BoardContext);

    useEffect(() => {
        //Info de la tarjeta 

             fetch(`http://localhost:5000/show-card/${currentCard}`).then((res) => res.json())
            .then((res) => {
                console.log(res)
                setCardData(res);
                localStorage.setItem("cardData", JSON.stringify(res))
            })

    }, [])

    const add = () => {
        setShowCardEdit(!showCardEdit);
    }

    const changeName = e => {
        setTitle(e.target.value)
        console.log(e.target.value)
        defaultFetch("http://localhost:5000/update-card", "POST", {id: currentCard, title:e.target.value}).then((res) => { console.log(res) });
        setRefresh(e.target.value)
    }

    const deleteCard = () => {
        defaultFetch("http://localhost:5000/delete-card", "DELETE", {id: currentCard}).then((res) => { console.log(res) });
        setRefresh("Borrar")
        setShowCardEdit(!showCardEdit);
    }
    if (cardData) {return (
        ( 
        
        <div className='carEditMenu'>
                 <div className='listTitle'>
                     <input className='cardName' name="title" defaultValue={cardData.title} onBlur={changeName}></input>
                     <button onClick={deleteCard}className='borrar'>Borrar</button>
                     <button className='close' onClick={add}>&#x2715;</button>
                 </div>
                 {description ?
                 <CardDescription description={description} setDescription={setDescription} currentCard={currentCard}/>
                : <CardDescription description={null} setDescription={setDescription} currentCard={currentCard}/>
                }
                 
                 <br />
                 <Activities />
                 <br />
         </div>)
     )}
    
}
