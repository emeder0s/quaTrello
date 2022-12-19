import React from 'react'
import { NavLink } from 'react-router-dom'
export const DropdownUser = () => {

  //Bajamos nombre usuario del LocalStorage
  var user = JSON.parse(localStorage.getItem('user'))
  console.log(user.full_name)

  return (
      <div className='dropdown8'>
        <h6 className='title'>{user.full_name}</h6>
        <hr />
        <p><NavLink to="/perfil">Perfil y visibilidad</NavLink></p>
        <p><NavLink to="/perfil/actividad"  >Actividad</NavLink></p>
        <p><NavLink to="/perfil/tarjetas">Tarjetas</NavLink></p>
        <p><NavLink to="/perfil/configuracion">Configuración</NavLink></p>
      </div>
  )
}