import React from 'react'
import {useParams, Link} from 'react-router-dom'
export const AcountVeryfy = () => {

    const {token} = useParams();
    console.log(token);
  return (
    
    <div>Su email ha sido verificado.
        ¡Gracias!
        <Link to="/perfil">Continuar al registro</Link>
    </div>
  )
}
