import React, { useEffect, useState } from 'react'
import { getInitial } from '../../../../helpers/getInitial'
import { findUsers } from '../../../../helpers/findUsers'

const ModalShowUsers = ({ email, setAddedMembersToInput, addedMembersToInput}) => {

  const [userExists, setUserExists] = useState(false)
  const [users, setUsers] = useState([])

  var formData = new FormData()
  useEffect(() => {
    formData = {
      "user": email,
    }
    findUsers(formData, setUserExists, setUsers)
  }, [email])

  function addUserToList(user) {
      setAddedMembersToInput({...addedMembersToInput, [user]: user})
  }

  if (!userExists) {
    return (
      <div className='modalShowUsers'>
        <p>
          Parece que esa persona no es miembro de Trello todavía. Añada su dirección de correo electrónico para invitarla.
        </p>
      </div>
    )
  }

  return (
    <div className='modalShowUsers'>
      <ul className='usersFound'>
        {/* Hay que hacer un map de los usuarios recogidos en el fetch */}
        {/* {users} */}
        {users.length && users.map((user, i) => {
          return (
            <div key={i} className='userFound' onClick={e => addUserToList(user)}>
              <div className='userFoundAvatar'>
                {getInitial(user)}
              </div>
              <div>{user}</div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ModalShowUsers
