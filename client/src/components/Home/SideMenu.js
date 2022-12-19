import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SideMenu = ({ setIsFormOpen }) => {

  // Crear una funcion que busque espacios de trabajo. Si existen se cambia el estado a true y se muestran los que sean en el listado
  // const [isWorkSpaceCreated, setIsWorkSpaceCreated] = useState(false)

  // Intentando hacer un GET de los workspaces (no funciona)
  const [workspaces, setWorkspaces] = useState([])
  const [workspaceExists, setWorkspaceExists] = useState(false)

  const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)

  useEffect(() => {
    setWorkspaces(reduxWorkspaces)
    if (workspaces.length > 0) {
      setWorkspaceExists(true)
    }
  }, [])

  return (
    <aside className='asideHome'>
      <ul>
        <li><NavLink to='/home'>Tableros</NavLink></li>
        <li><NavLink to='#'>Plantillas</NavLink></li>
        <li><NavLink to='#'>Inicio</NavLink></li>
      </ul>
      <div>
        <div className='addWorkSpaceLi'>
          <span>Espacios de trabajo</span>
          <button className='addWorkSpaceButton' onClick={() => setIsFormOpen(true)}>+</button>
        </div>
        {workspaceExists
          ? (
            <ul>{
              workspaces.map((element) => {
                return (
                  <li key={element.id}><NavLink to='#'>{element.name_}</NavLink></li>
                )
              })}
            </ul>
          )
          : (
            <div>
              <li>Aun no tienes espacios de trabajo</li>
            </div>
          )
        }
      </div>
    </aside>
  )
}
