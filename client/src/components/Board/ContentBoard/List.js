import React, { useState, useContext } from 'react'
import { FiMoreHorizontal } from "react-icons/fi";
import { BoardContext } from '../../../providers/boardProvider';
import { CardEdit } from './CardEdit';
import { ListMenu } from './ListMenu';
import { PopupMenu } from './PopupMenu';

export const List = ({ title, cards, listId }) => {
    const [showInput2, setShowInput2] = useState(false);
    const [showCardEdit, setShowCardEdit] = useState(false);
    const { setNewCardTitle, setCurrentListId, setRefresh } = useContext(BoardContext)
    const [currentCard, setCurrentcard] = useState();
    const [popupShow, setPopupShow] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const add = () => {
        setShowInput2(!showInput2);
    }
    localStorage.setItem("CurrentList",listId)
    const addCard = e => {
        e.preventDefault();
        setCurrentListId(e.target.title.id)
        let newCard = { title: e.target.title.value, fk_id_list: e.target.title.id }
        setNewCardTitle(newCard)
        setShowInput2(!showInput2);
    }

    const cardEdit = (e) => {
        setCurrentcard(e.target.id)
        localStorage.setItem("currentCard", JSON.stringify(e.target.id))
        setShowCardEdit(!showCardEdit)
    }

    const popup = (e) => {
        console.log(e.target.id)
        setPopupShow(!popupShow)
    }

    const showListConfig = (e) => {
        console.log(e.target.id)
        setMenuShow(!menuShow)
    }


    if (showInput2) {
        return (
            <div className='list' key={title}>
                <div className='listTitle'>
                    <h6>{title}</h6>
                    <button className='btnMenuList'><FiMoreHorizontal /></button>
                </div>
                {cards.length !== 0 ? cards.map((card, i) => (
                    <div className='cardTitle' key={i} id={card.id} onClick={cardEdit()}><p key={card.title}>{card.title}</p>
                        <button className='btnMenuCard' onClick={popup} id={card.id}>&#x270E;</button></div>
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
        <>
            {popupShow &&
            <PopupMenu setPopupShow={setPopupShow} popupShow={popupShow}/>}
            {menuShow &&
            <ListMenu setMenuShow={setMenuShow} menuShow={menuShow} id={listId}/>}
            {(showCardEdit) ?
                <div className='cardEdit'>
                    <CardEdit setShowCardEdit={setShowCardEdit} showCardEdit={showCardEdit} currentCard={currentCard} setCurrentcard={setCurrentcard} />
                </div>
                : console.log()}

            <div className='list' key={title}>
                <div className='listTitle'>
                    <h6>{title}</h6>
                    <button className='btnMenuList' onClick={showListConfig}><FiMoreHorizontal /></button>
                </div>
                {cards.length !== 0 ? cards.map((card, i) => (
                    <div key={i} className='cardTitle'>
                        <div key={(i * 7)}  >
                            <button className='cardTitle2' id={card.id} onClick={cardEdit} key={card.title}>{card.title}</button>
                        </div>
                        <button className='btnMenuCard' onClick={popup} id={card.id}>&#x270E;</button>
                    </div>
                ))
                    : console.log("no tiene tarjetas")}
                <button type="submit" className='addCard' onClick={add}>&#10010; Añada una tarjeta</button>
            </div>
        </>
    )
}
