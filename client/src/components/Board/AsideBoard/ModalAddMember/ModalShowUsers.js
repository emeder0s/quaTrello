import React, { useEffect, useState } from 'react'
import { getInitial } from '../../../../helpers/getInitial'
import { findUsers } from '../../../../helpers/findUsers'
import { useDispatch, useSelector } from 'react-redux'
import { addUserName } from '../../../../features/users/userNames'
import { addUserID } from '../../../../features/users/userIds'

const ModalShowUsers = ({ email }) => {

  const [userExists, setUserExists] = useState(false)
  const [users, setUsers] = useState([])


  const dispatch = useDispatch()
  const userNames = useSelector(state => state.userNames)


  
  var formData = new FormData()
  useEffect(() => {
    formData = {
      "user": email,
    }
    findUsers(formData, setUserExists, setUsers)
  }, [email])

  function addUserToList(user) {
    const find = userNames.find(name => {
      if (name === user.full_name ) {
        return true
      }
    })
    if(!find){
      dispatch(addUserName(user.full_name))
      dispatch(addUserID(user.id))
    }
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
        {users.length && users.map((user, i) => {
          return (
            <div key={i} className='userFound' datatype={user.id} onClick={e => addUserToList(user)}>
              <div className='userFoundAvatar'>
                {getInitial(user.full_name)}
              </div>
              <div>{user.full_name}</div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ModalShowUsers
