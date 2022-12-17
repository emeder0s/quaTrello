import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ModalShowUsers from './ModalShowUsers'

const ModalAddMember = ({ setIsModalAddMemberOpen }) => {

    const [formValues, setFormValues] = useState({
        email: "",
        msn: "",
    })

    const [addedMembersToInput, setAddedMembersToInput] = useState({})
    const [membersAddedArray, setMembersAddedArray] = useState([])

    useEffect(() => {
        setMembersAddedArray(Object.values(addedMembersToInput))
    }, [addedMembersToInput])

    const [showUsers, setShowUsers] = useState(false)

    // para poder actualizar los valores del formulario
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        if (value) {
            setShowUsers(true)
        } else {
            setShowUsers(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(membersAddedArray)
    }

    return (
        <div className='modalAddMember'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>
                    <span>Invitar al espacio de trabajo</span>
                    <button onClick={e => setIsModalAddMemberOpen(false)}><AiOutlineClose /></button>
                </h2>
                <div className='input-button-Container'>
                    <div className='inputContainer'>
                        {membersAddedArray.length > 0
                            && membersAddedArray.map((member, i) => {
                                return (
                                    <div key={i} className='addedMemberToInput'>
                                        <p datatype={member}>{member}</p>
                                        <button datatype={member} onClick={e=>console.log(e)}><AiOutlineClose /></button>
                                    </div>
                                )
                            })
                        }
                        <input
                            type='text'
                            placeholder='direccion de correo electrónico o nombre'
                            name='email'
                            onChange={handleChange}
                            value={formValues.email}
                        />
                    </div>
                    {membersAddedArray.length > 0 && <button type='submit' className='sendInvites'>Enviar Invitaciones</button>}
                </div>
                {showUsers && <ModalShowUsers email={formValues.email} setAddedMembersToInput={setAddedMembersToInput} addedMembersToInput={addedMembersToInput} />}
            </form>
        </div>
    )
}

export default ModalAddMember
