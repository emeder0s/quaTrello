import React, { useState } from 'react'
import { NavPerfil } from './NavPerfil'
import { useEffect } from 'react'



export const Actividad = () => {

    const [workSpacesUser, setworkSpacesUser] = useState([])


    useEffect(() => {


        fetch("/get-workspaces-by-user")
            .then((res) => res.json())
            .then((res) => {
                setworkSpacesUser(res);

            });

    }, [])

    return (
        <div className='info'>

            <NavPerfil />

            <h1 className='h1Info'>Espacios de trabajo</h1>

            <hr className='hrAct' />
            <div className='divSpaces'>
                <table className='tableAct'>
                    <tbody className="trSpaces">
                        <td className='tdSpaces2'>Espacio de Trabajo</td>
                        <td className='tdSpaces2'>Última conexión</td>
                        <td className='tdSpaces2'>Visibilidad</td>
                    </tbody>

                    {workSpacesUser ? workSpacesUser.map((espacio, i) => {
                        return (
                            <tr key={i} className="trSpaces">
                                <td className='tdSpaces'>{espacio.name_}</td>
                                <br />
                                <td className='tdSpaces'>{espacio.last_access}</td>
                                <br/>
                                <td className='tdSpaces'>{espacio.visibility}</td>
                            </tr>
                        )
                    })
                        : <p>"No hay espacios de trabajos registrados"</p>
                    }
                </table>
            </div>

        </div>
    )
}
