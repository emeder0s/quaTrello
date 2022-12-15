import React, { useState } from 'react'

import { FiChevronDown } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { DropdownEspacios } from './nav/DropdownEspacios';
import { DropdownReciente } from './nav/DropdownReciente';
import { DropdownMarcado } from './nav/DropdownMarcado';
import { DropdownPlantillas } from './nav/DropdownPlantillas';
import { DropdownCrear } from './nav/DropdownCrear';
import { DropdownBuscar } from './nav/DropdownBuscar';
import { DropdownNotoficaciones } from './nav/DropdownNotoficaciones';
import { DropdownUser } from './nav/DropdownUser';
export const Nav = () => {


  const [dropdown, setDropdown] = useState("none");
  const menu1 = () => {
    (dropdown !== "menu1") ? setDropdown("menu1"):setDropdown("none")
    }
  const menu2 = () => {
    (dropdown !== "menu2") ? setDropdown("menu2"): setDropdown("none");
  }
  const menu3 = () => {
    (dropdown !== "menu3") ? setDropdown("menu3"): setDropdown("none");
  }
  const menu4 = () => {
    (dropdown !== "menu4") ? setDropdown("menu4"): setDropdown("none");
  }
  const menu5 = () => {
    (dropdown !== "menu5") ? setDropdown("menu5"): setDropdown("none");
  }
  const menu6 = () => {
    (dropdown !== "menu6") ?setDropdown("menu6"): setDropdown("none");
  }
  const menu7 = () => {
    (dropdown !== "menu7") ? setDropdown("menu7"): setDropdown("none")
  }
  const menu8 = () => {
    (dropdown !== "menu8") ? setDropdown("menu8"): setDropdown("none");
  }

  return (
    <div>
      <nav className='nav-user'>
        <div>
          <button className='logo menu'><img className='nav-logo' src={require('./quaTrello_logo.png')} alt="quaTrello logo" />
            quaTrello</button>
          <button className='menu' onClick={menu1}>Espacios de trabajo <FiChevronDown /></button>
          {dropdown==="menu1" && <DropdownEspacios />}
          <button className='menu' onClick={menu2}>Reciente <FiChevronDown /></button>
          {dropdown==="menu2" && <DropdownReciente />}
          <button className='menu' onClick={menu3}>Marcado <FiChevronDown /></button>
          {dropdown==="menu3" && <DropdownMarcado />}
          <button className='menu' onClick={menu4}>Plantillas <FiChevronDown /></button>
          {dropdown==="menu4" && <DropdownPlantillas />}
          <button className='crear menu' onClick={menu5}>Crear</button>
          {dropdown==="menu5" && <DropdownCrear />}
        </div>
        <div>
          <input placeholder='buscar' onFocus={menu6} className="buscar">
          </input>
          <button className='notificaciones menu'onClick={menu7}><FiBell /></button>
          {dropdown==="menu7" && <DropdownNotoficaciones />}
          {dropdown==="menu6" && <DropdownBuscar />}
          <button className='user menu' onClick={menu8}>JC</button>
          {dropdown==="menu8" && <DropdownUser />}
        </div>
      </nav>
    </div>
  )
}
