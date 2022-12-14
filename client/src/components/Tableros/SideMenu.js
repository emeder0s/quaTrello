import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddWorkSpace from './AddWorkSpace'

export const SideMenu = ({ setIsFormOpen }) => {

  // Crear una funcion que busque espacios de trabajo. Si existen se cambia el estado a true y se muestran los que sean en el listado
  // const [isWorkSpaceCreated, setIsWorkSpaceCreated] = useState(false)

  return (
    <aside className='asideHome'>
      <ul>
        <li><NavLink to='#'>Tableros</NavLink></li>
        <li><NavLink to='#'>Plantillas</NavLink></li>
        <li><NavLink to='#'>Inicio</NavLink></li>
      </ul>
      <ul>
        <li className='addWorkSpaceLi'>
          <span>Espacios de trabajo</span>
          <button className='addWorkSpaceButton' onClick={() => setIsFormOpen(true)}>+</button>
        </li>
        <li><NavLink to='#'>Cargar espacio 1</NavLink></li>
        <li><NavLink to='#'>Cargar espacio 2</NavLink></li>
      </ul>
    </aside>
  )
}
