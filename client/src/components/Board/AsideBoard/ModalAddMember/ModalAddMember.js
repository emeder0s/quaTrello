import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import ModalShowUsers from './ModalShowUsers'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUserID } from '../../../../features/users/userIds'
import { deleteUserName } from '../../../../features/users/userNames'

const ModalAddMember = ({ setIsModalAddMemberOpen }) => {

    const { board } = useParams()
    const userNames = useSelector(state => state.userNames)
    const userIds = useSelector(state => state.userIds)
    const [showUsers, setShowUsers] = useState(false)
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState({
        role: "member",
        fk_id_board: board,
        fk_id_user: [],
        email: "",
        msn: "",
    })

    // para poder actualizar los valores del formulario
    useEffect(() => {
        setFormValues({ ...formValues, fk_id_user: userIds })
    }, [userIds])

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
    }

    function deleteUserInvite(name) {
        dispatch(deleteUserName(name))
        // dispatch(deleteUserID(e))
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
                        {userNames.length > 0
                            && userNames.map((member, i) => {
                                return (
                                    <div key={i} className='addedMemberToInput'>
                                        <p>{member}</p>
                                        <button onClick={e => deleteUserInvite(e.target.attributes.datatype.value)}>
                                            <span datatype={member}>X</span>
                                        </button>
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
                    {userNames.length > 0 && <button type='submit' className='sendInvites'>Enviar Invitaciones</button>}
                </div>
                {showUsers &&
                    <ModalShowUsers email={formValues.email} />}
            </form>
        </div>
    )
}

export default ModalAddMember
