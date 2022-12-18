import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SideMenu = ({ setIsFormOpen }) => {

  // Crear una funcion que busque espacios de trabajo. Si existen se cambia el estado a true y se muestran los que sean en el listado
  // const [isWorkSpaceCreated, setIsWorkSpaceCreated] = useState(false)
  
  // Intentando hacer un GET de los workspaces (no funciona)
  const [workspaces, setWorkspaces] = useState([])
  const [workspaceExists, setWorkspaceExists] = useState(false)

  useEffect(() => {
    fetch('/all-workspaces')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWorkspaces(data);
        console.log(workspaces)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <aside className='asideHome'>
      <ul>
        <li><NavLink to='/home'>Tableros</NavLink></li>
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
