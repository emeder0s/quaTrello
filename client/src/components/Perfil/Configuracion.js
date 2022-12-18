import React from 'react'
import { NavPerfil } from './NavPerfil'

export const Configuración = () => {



    return (
        <div className='configPerfil'>
            <NavPerfil />
            <div className='divCuenta'>
                <h2 className='detCuenta'>Detalles de la cuenta</h2>
                <hr/>
                <p>Cambiar idioma</p>
                <br/>
                <h2>Notificaciones</h2>
                <hr/>
                <p>Permitir notificaciones en el escritorio</p>
                <br/>
                <h2>Sugerencias</h2>
                <hr/>
                <p>Desactivar las Sugerencias</p>
                <br/>
                <h2>Accesibilidad</h2>
                <hr/>
                <p>Habilitar el modo óptico para daltónicos</p>
                <br/>
                </div>
        </div>
    )
}
