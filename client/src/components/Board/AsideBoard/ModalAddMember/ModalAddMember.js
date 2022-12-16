import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ModalShowUsers from './ModalShowUsers'

const ModalAddMember = ({ setIsModalAddMemberOpen }) => {

    const [formValues, setFormValues] = useState({
        email: "",
        msn: "",
    })

    const [showUsers, setShowUsers] = useState(false)

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        // console.log(formValues.name)
        if (value) {
            setShowUsers(true)
        }else{
            setShowUsers(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...formValues })
    }

    // on keypress hacer que haga el fetch de todos los usuarios por nombre e email y que los muestre en una lista
    // la lista debe contener los usuarios con su nombre completo y debe se un boton que al hacer click lo añada al valor del input

    return (
        <div className='modalAddMember'>
            <div className='form'>
                <h2>
                    <span>Invitar al espacio de trabajo</span>
                    <button onClick={e => setIsModalAddMemberOpen(false)}><AiOutlineClose /></button>
                </h2>
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='direccion de correo electrónico o nombre'
                        name='email'
                        onChange={handleChange}
                        value={formValues.email}
                    />
                </div>
                {showUsers && <ModalShowUsers email={formValues.email}/>}
            </div>
        </div>
    )
}

export default ModalAddMember
