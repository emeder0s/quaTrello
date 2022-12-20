import React, { useState, useEffect, useContext } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import { defaultFetch } from '../../../helpers/defaultFetch';
import { BoardContext } from '../../../providers/boardProvider';
export const CardDescription = (description, currentCard, setDescription) => {
    const [showInput, setShowInput] = useState(false);
    const [cardData2, setCardData2] = useState(false);
    const { setRefresh } = useContext(BoardContext);
    let descrip = (JSON.parse(localStorage.getItem("cardData"))).description_

    useEffect(() => {
        //Info de la tarjeta 

        fetch(`http://localhost:5000/show-card/${currentCard}`).then((res) => res.json())
            .then((res) => {
                setCardData2(res);
            })

    }, [])

    const add = () => {
        setShowInput(!showInput);
    }

    const addDescription = e => {
        e.preventDefault();
        console.log(currentCard)
        console.log(e.target.title.value)

        let currentCardExtra = JSON.parse(localStorage.getItem('currentCard'));
        console.log(currentCardExtra)
        defaultFetch("http://localhost:5000/update-card", "POST", { id: currentCardExtra, description_: e.target.title.value }).then((res) => { console.log(res) });
        setRefresh(e.target.title.value)
    }
    return (
        <div><div><h6><span><FiAlignLeft /></span>Descripción</h6>
            <form onSubmit={addDescription}>
                {description ?
                    <input className='inputCard' type="text" required name="title" defaultValue={descrip} />
                    : <input className='inputCard' type="text" required name="title" defaultValue="Escribe tu descripción" />
                }
                <button type="submit" className='guardar'>Guardar</button>
                <button className='cancelar' >Cancelar</button>
            </form>
        </div></div>
    )
}
