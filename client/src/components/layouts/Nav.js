import React, { useState } from 'react'

import { FiChevronDown } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { DropdownEspacios } from './nav/DropdownEspacios';
import { DropdownReciente } from './nav/DropdownReciente';
import { DropdownMarcado } from './nav/DropdownMarcado';
import { DropdownPlantillas } from './nav/DropdownPlantillas';
import { DropdownCrear } from './nav/DropdownCrear';
export const Nav = () => {


  const [dropdown, setDropdown] = useState("none");
  const menu1 = () => {
    if (dropdown !== "menu1") {
      setDropdown("menu1");
    } else {
      setDropdown("none");
    }
  }
  const menu2 = () => {
    if (dropdown !== "menu2") {
      setDropdown("menu2");
    } else {
      setDropdown("none");
    }
  }
  const menu3 = () => {
    if (dropdown !== "menu3") {
      setDropdown("menu3");
    } else {
      setDropdown("none");
    }
  }
  const menu4 = () => {
    if (dropdown !== "menu4") {
      setDropdown("menu4");
    } else {
      setDropdown("none");
    }
  }
  const menu5 = () => {
    if (dropdown !== "menu5") {
      setDropdown("menu5");
    } else {
      setDropdown("none");
    }
  }
  const menu6 = () => {
    if (dropdown !== "menu6") {
      setDropdown("menu6");
    } else {
      setDropdown("none");
    }
  }


  return (
    <div>
      <nav>
        <div>
          <button><img src={require('./quaTrello_logo.png')} alt="quaTrello logo" />
            quaTrello</button>
          <button className='logo' onClick={menu1}>Espacios de trabajo <FiChevronDown /></button>
          {dropdown==="menu1" && <DropdownEspacios />}
          <button className='menu' onClick={menu2}>Reciente <FiChevronDown /></button>
          {dropdown==="menu2" && <DropdownReciente />}
          <button className='menu' onClick={menu3}>Marcado <FiChevronDown /></button>
          {dropdown==="menu3" && <DropdownMarcado />}
          <button className='menu' onClick={menu4}>Plantillas <FiChevronDown /></button>
          {dropdown==="menu4" && <DropdownPlantillas />}
          <button className='crear' onClick={menu5}>Crear</button>
          {dropdown==="menu5" && <DropdownCrear />}
        </div>
        <div>
          <input placeholder='buscar'>
          </input>
          <button className='notificaciones'><FiBell /></button>
          <button className='user'>JC</button>
        </div>
      </nav>
    </div>
  )
}
