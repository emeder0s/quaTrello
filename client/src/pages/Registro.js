import React, { useState } from 'react'
import { NavLogin } from '../components/layouts/NavLogin'
import FirstWorkSpace from '../components/registro/FirstWorkSpace'
import { MetodoRegistro } from '../components/registro/MetodoRegistro'
import Premium from '../components/registro/Premium'

export const Registro = () => {
  const [email, setEmail] = useState("")
  const [display, setDisplay] = useState("landing")

  const sendEmail = e => {
    e.preventDefault();
    var userEmail = e.target.email.value;
    console.log(userEmail)
    setEmail(userEmail)
    setDisplay("metodo")
  }

  console.log(display)
  if (display === "metodo") {
    return <MetodoRegistro email={email} setEmail={setEmail} setDisplay={setDisplay}/>
  } 
  if (display==="first") { return <FirstWorkSpace setDisplay={setDisplay}/>}
  if (display==="premium") { return <Premium setDisplay={setDisplay}/>}

    
    return (
      <div>
        <NavLogin/>
        <h1>
          quaTrello unifica tus tareas, compañeros de equipo y herramientas
        </h1>
        <p>Mantenlo todo en el mismo lugar, aunque tu equipo no lo esté.</p>
        <div   className='registro'>
        <form onSubmit={sendEmail}>
          <input type="email" name='email' placeholder='Correo electrónico' required></input>
          <button type="submit">Regístrate es gratuito</button>
        </form>
        </div>
      </div>
    )
  }


