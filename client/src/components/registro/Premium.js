import React, {useState} from 'react'
//import premiumFormIMG from '../../img/premiumFormIMG.svg'

const Premium = ({setDisplay}) => {

const [isUserPremium, setIsUserPremium] = useState(false)

//* idea de funciones para conectar con el back y enviar datos del premium
function premiumUser(){
  setIsUserPremium(true)
  setDisplay('landing')
  // aqui añadimos una funcion que guarde si es premium o no en el back
}
function basicUser(){
  setIsUserPremium(false)
  setDisplay('landing')
   // aqui añadimos una funcion que guarde si es premium o no en el back
}

  return (
    <div className='registro'>
      {/*<img src={premiumFormIMG} alt="icono" />*/}
      <h1>Pruebe Trello Premium gratis durante 30 días</h1>
      <h4>Con la confianza de los equipos de <img /><img /><img /></h4>
      <div>
        <img />
        <p>Tableros ilimitados y comandos de automatización</p>
        <p>Cree tableros y añada integraciones de forma ilimitada para que su equipo pueda gestionar cualquier trabajo independientemente del volumen que tenga.</p>
      </div>

      <div>
        <img />
        <p>Configuración avanzada de administración y seguridad</p>
        <p>Obtenga permisos de administrador y controle quién tiene acceso a su Espacio de trabajo en todo momento.</p>
      </div>

      <div>
        <img />
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