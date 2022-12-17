import React, { useState, useContext } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { BoardContext } from '../../../providers/boardProvider';

export const List = ({ title, cards }) => {
    const [showInput2, setShowInput2] = useState(false);
    const {setNewCardTitle, setCurrentListId} = useContext(BoardContext)
    const add = () => {

        setShowInput2(!showInput2);
        console.log(showInput2)
    }

    const addCard = e => {
        e.preventDefault();
        setNewCardTitle(e.target.title.value)
        setCurrentListId(e.target.title.id)
        console.log(e.target.title.value)
        console.log(e.target.title.id);
    
    }

    if (showInput2) {
        return (
            <div className='list' key={title}>
                <div className='listTitle'>
                    <h6>{title}</h6>
                    <button className='btnMenuList'><FiMoreHorizontal /></button>
                </div>
                {cards!=="none" ? cards.map((cardTitle, i) => (
                <div key={i} className='cardTitle' ><p key={cardTitle}>{cardTitle}</p>
                <button className='btnMenuCard' >&#x270E;</button></div>
            ))               
                 : console.log("no tiene tarjetas")}
                <form onSubmit={addCard}>
                    <input className='inputCard' id={title} type="text" required name="title"/>
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
            {cards!=="none" ? cards.map((cardTitle, i) => (
                <div className='cardTitle' key={i}><p key={cardTitle}>{cardTitle}</p>
                <button className='btnMenuCard' >&#x270E;</button></div>
            ))               
                 : console.log("no tiene tarjetas")}
            <button type="submit" className='addCard' onClick={add}>&#10010; Añada una tarjeta</button>
        </div>
    )

}
