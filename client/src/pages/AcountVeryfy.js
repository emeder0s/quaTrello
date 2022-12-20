import React, { useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { defaultFetch } from '../helpers/defaultFetch';
import { AcountVerifyWarning } from '../components/AccountVerify/AcountVerifyWarning';

export const AcountVeryfy = () => {
  const [warning, setWarning] = useState(false);
  const cookies = new Cookies();
  const { token } = useParams();
  const navigate = useNavigate();
  
  const insertUser = async e => {
   

    e.preventDefault();
    if (e.target.pass.value === e.target.confirmPass.value) {
      localStorage.setItem("user", e.target.nombre.value)
      var newUser = {
        "jwt": token,
        full_name: e.target.nombre.value,
        pass: e.target.pass.value
      }
      const res = await defaultFetch("http://localhost:5000/insert-user", "POST", newUser)
      cookies.set('session', res.jwt, { path: '/' })
      navigate("/home")
      localStorage.setItem("user", JSON.stringify(res.user));
    } else {
      setWarning(true);
    }
  }
  return (

    <div>Su email ha sido verificado.
      ¡Gracias!
      {warning ? 
      <AcountVerifyWarning />: <p>Introduce tus datos para completar el registro</p>}
      <div className='registro'>
      <form onSubmit={insertUser}>
        <p>Login</p>
        <p>Nombre completo</p>
        <input type="text" name='nombre' placeholder='Nombre Completo' required></input>
        <br />
        <p>Contraseña</p>
        <input type="password" name='pass' required></input>
        <br />
        <p>Confirma contraseña</p>
        <input type="password" name='confirmPass' required></input>
        <br />
        <button type="submit">Guardar</button>
      </form>
      </div>
    </div>
  )
}
