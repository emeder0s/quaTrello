import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getInitial } from '../../helpers/getInitial'

export const SideMenu = ({ setIsFormOpen }) => {

  const [navigate, setNavigate] = useState(false)
  const [isButtonBoardActive, setIsButtonBoardActive] = useState('active')
  // const [getWorkSpace, setGetWorkSpace] = useState('')
  const [goToBoard, setGoToBoard] = useState('')
  const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)

  async function goToWS(e) {
    // setGetWorkSpace(`/show-workspace/${e.target.attributes.datatype.value}`)
    const getWorkSpace = await fetch(`/show-workspace/${e.target.attributes.datatype.value}`)
      .then(res => res.json())
      .then(data => { return data })
    if (getWorkSpace) {
      const getBoard = await fetch(`/show-boardByWs/${getWorkSpace.id}`)
        .then(res => res.json())
        .then(data => { return data })
      if (getBoard) {
        setGoToBoard(`/board/${getBoard[0].id}`)
        setNavigate(true)
      }
    }
  }

  return (
    <aside className='asideHome'>
      <ul className='asideOptions'>
        <li onClick={e => setIsButtonBoardActive('active')} className={isButtonBoardActive}>
          <NavLink to='/home'>Tableros</NavLink>
        </li>
        <li onClick={e => setIsButtonBoardActive('inactive')}><NavLink to='#'>Plantillas</NavLink></li>
        <li onClick={e => setIsButtonBoardActive('inactive')}><NavLink to='#'>Inicio</NavLink></li>
      </ul>
      <div>
        <div className='addWorkSpaceLi'>
          <span>Espacios de trabajo</span>
          <button className='addWorkSpaceButton' onClick={() => setIsFormOpen(true)}>+</button>
        </div>
        {reduxWorkspaces.length > 0
          ? (
            <ul>{
              reduxWorkspaces.map((element) => {
                return (
                  <li key={element.id} onClick={e => goToWS(e)}>
                    <div className='wsAvatar'>
                      {getInitial(element.name_)}
                    </div>
                    <span datatype={element.id}>{element.name_}</span>
                  </li>
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
      {navigate && (
        <Navigate to={goToBoard} replace={true} />
      )}
    </aside>
  )
}
