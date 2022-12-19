import React, { useState, useContext } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { BoardContext } from '../../../providers/boardProvider';

export const List = ({ title, cards, listId }) => {
    const [showInput2, setShowInput2] = useState(false);
    const { setNewCardTitle, setCurrentListId } = useContext(BoardContext)
    const add = () => {
        setShowInput2(!showInput2);
    }

    const addCard = e => {
        e.preventDefault();
        setCurrentListId(e.target.title.id)
        let newCard = { title: e.target.title.value, fk_id_list: e.target.title.id}
        setNewCardTitle(newCard)
    }

    if (showInput2) {
        return (
            <div className='list' key={title}>
                <div className='listTitle'>
                    <h6>{title}</h6>
                    <button className='btnMenuList'><FiMoreHorizontal /></button>
                </div>
                {cards.length!==0 ? cards.map((card, i) => (
                <div className='cardTitle' key={i} id={card.id} ><p key={card.title}>{card.title}</p>
                <button className='btnMenuCard' >&#x270E;</button></div>
            ))               
                 : console.log("no tiene tarjetas")}
                <form onSubmit={addCard}>
                    <input className='inputCard' id={listId} type="text" required name="title" />
                    <button type="submit" className='addList' >Añadir tarjeta </button>
                    <button className='close' onClick={add}>&#x2715;</button>
                </form>
            </div>
        )
    }
    return (
        <div className='list' key={title}>
            <div className='listTitle'>
                <h6>{title}</h6>
                <button className='btnMenuList'><FiMoreHorizontal /></button>
            </div>
            {cards.length!==0 ? cards.map((card, i) => (
                <div className='cardTitle' key={(i)} id={card.id} ><p key={card.title}>{card.title}</p>
                <button className='btnMenuCard' >&#x270E;</button></div>
            ))               
                 : console.log("no tiene tarjetas")}
            <button type="submit" className='addCard' onClick={add}>&#10010; Añada una tarjeta</button>
        </div>
    )

}
