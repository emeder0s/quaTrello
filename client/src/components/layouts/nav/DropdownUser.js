import React from 'react'
import { NavLink, Routes, Route, BrowserRouter, Link } from 'react-router-dom'
export const DropdownUser = () => {

  //Bajamos nombre usuario del LocalStorage
  var user = JSON.parse(localStorage.getItem('user'))
  console.log(user.full_name)

  //Declaramos rutas
  let rutaPerfil = `/perfil/${user.id}`
  let rutaActividad = `/perfil/actividad/${user.id}`
  let rutaTarjetas = `/perfil/tarjetas/${user.id}`
  let rutaConfiguracion = `/perfil/configuracion/${user.id}`


  return (
    <BrowserRouter>
      <div className='dropdown8'>
        <h6 className='title'>{user.full_name}</h6>
        <hr />
        <p><NavLink to={rutaPerfil}> y visibilidad</NavLink></p>
        <p><NavLink to={rutaActividad} >Actividad</NavLink></p>
        <p><NavLink to={rutaTarjetas}>Tarjetas</NavLink></p>
        <p><NavLink to={rutaConfiguracion}>Configuración</NavLink></p>
        <ul>
          <li ><NavLink to="/perfil">Perfil y visibilidad</NavLink></li>
          <li><NavLink to="/perfil/actividad" >Actividad</NavLink></li>
          <li><NavLink to="/perfil/tarjetas">Tarjetas</NavLink></li>
          <li ><NavLink to="/perfil/configuracion">Configuración</NavLink></li>
        </ul>

      </div>
    </BrowserRouter>
  )
}