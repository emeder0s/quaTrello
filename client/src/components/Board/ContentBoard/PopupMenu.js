import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { defaultFetch } from '../../../helpers/defaultFetch';
import { BoardContext } from '../../../providers/boardProvider';
export const PopupMenu = ({setPopupShow, popupShow}) => {
    const [listss, setListss] = useState();
    const { setRefresh } = useContext(BoardContext)
    const { board } = useParams();
    let currentCard2 = JSON.parse(localStorage.getItem('currentCard'));
    useEffect(() => {
        //Listas y sus tarjetas
        console.log(currentCard2)
        fetch(`http://localhost:5000/lists/${board}`).then((res) => res.json())
            .then((res) => {
                console.log(res[0].id)
                setListss(res)
                console.log(res)
                console.log(listss)
            })
    }, [])

    const add = () => {
        setPopupShow(!popupShow)
    }

    const moveCard = e => {
        console.log(e.target.id)
        defaultFetch("http://localhost:5000/move-to-list", "POST", { id: currentCard2, fk_id_list:e.target.id}).then((res) => { console.log(res) });
        setRefresh(e.target.id)
        setPopupShow(!popupShow)
    }

    if (listss) { return (
        <div className='cardEdit'>
        <div className='carEditMenu2'>
            <div className='listTitle'>
                <h6></h6>
                <button className='close' onClick={add}>&#x2715;</button>
            </div>
            <br/>
            <h6>Mover la tarjeta a:</h6>
            <div className='listMove'>

            {listss.map((list, index)=>{ 
                return(<p key={index} id={list.id} onClick={moveCard}>{list.name_}</p>) 
            })}
            </div>
        </div>
        </div>
    )}
   
}
