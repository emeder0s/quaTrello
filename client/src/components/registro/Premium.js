import React, { useState } from 'react'
import premiumFormIMG from '../../img/premiumFormIMG.svg'
import { AiFillAppstore } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'
import { MdOutlineViewCarousel } from 'react-icons/md'

const Premium = ({ setDisplay }) => {

  const [isUserPremium, setIsUserPremium] = useState(false)

  //* idea de funciones para conectar con el back y enviar datos del premium
  function premiumUser() {
    setIsUserPremium(true)
    setDisplay('landing')
    // aqui añadimos una funcion que guarde si es premium o no en el back
  }
  function basicUser() {
    setIsUserPremium(false)
    setDisplay('landing')
    // aqui añadimos una funcion que guarde si es premium o no en el back
  }

  return (
    <div className='registro premiumInfo'>
      <img src={premiumFormIMG} alt="icono" />
      <h1>Pruebe Trello Premium gratis durante 30 días</h1>
      <h4>Con la confianza de los equipos de <BsPinterest /> <FaGoogle /> <FaFacebook /></h4>
      <div className='premiumInfoEl'>
        <span className='icon'><AiFillAppstore /></span>
        <p>Tableros ilimitados y comandos de automatización</p>
        <p>Cree tableros y añada integraciones de forma ilimitada para que su equipo pueda gestionar cualquier trabajo independientemente del volumen que tenga.</p>
      </div>

      <div className='premiumInfoEl'>
        <span className='icon'><SiReadthedocs /></span>
        <p>Configuración avanzada de administración y seguridad</p>
        <p>Obtenga permisos de administrador y controle quién tiene acceso a su Espacio de trabajo en todo momento.</p>
      </div>

      <div className='premiumInfoEl'>
        <span className='icon'><MdOutlineViewCarousel /></span>
        <p>Vistas de Cronograma, Tabla, Panel y Calendario</p>
        <p>Trabaje en los tableros de proyectos propios de Trello o utilice un diseño diferente para organizar sus tareas.</p>
      </div>

      <div>
        <button onClick={basicUser}>Omitir</button>
        <button onClick={premiumUser}>Inicie la prueba gratuita de 30 días Premium</button>
      </div>

    </div>
  )
}

export default Premium