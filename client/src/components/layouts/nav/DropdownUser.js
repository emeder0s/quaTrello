import React from 'react'
import { NavLink } from 'react-router-dom'

export const DropdownUser = () => {
  return (
    <div className='dropdown8'>
      <h6 className='title'>Usuario</h6>
      <NavLink to='/perfil' className='espacio'>Perfil</NavLink>
      <hr />
      <h6 className='title'>Espacios de trabajo</h6>
      <p className='espacio'>Mi espacio 2</p>
      <hr />
      <h6 className='title'>Tableros</h6>
      <p className='espacio'>Mi tablero 1</p>
      <p className='espacio'>Mi tablero 2</p>
    </div>
  )
}

