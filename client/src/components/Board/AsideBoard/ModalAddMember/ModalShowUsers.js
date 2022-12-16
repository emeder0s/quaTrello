import React, { useState } from 'react'
import { getFetch } from '../../../../helpers/defaultFetch'

const ModalShowUsers = ({ email }) => {

  const [userExists, setUserExists] = useState(false)
  
  // Lo que devuelva este fetch lo mapeamos y lo pintamos en el segundo return
  // getFetch('endpoint', email) 

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
      <ul>
        {/* Hay que hacer un map de los usuarios recogidos en el fetch */}
        {email}
      </ul>
    </div>
  )
}

export default ModalShowUsers
