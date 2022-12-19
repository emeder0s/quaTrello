import React, { useState } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
export const CardDescription = (description, setDescription) => {
    const [showInput, setShowInput] = useState(false);
    const add = () => {
        setShowInput(!showInput);
    }

    const addDescription = e => {
        e.preventDefault();

        setShowInput(!showInput)
        setDescription(e.target.title.value)

    }
    return (
        <div><div><h6><span><FiAlignLeft /></span>Descripción</h6>
            <form onSubmit={addDescription}>
                <input className='inputCard' type="text" required name="title" />
                <button type="submit" className='guardar'>Guardar</button>
                <button className='cancelar' >Cancelar</button>
            </form>
        </div></div>
    )
}
