import React, { useState } from 'react'
import { NavPerfil } from './NavPerfil'
import { useEffect } from 'react'




export const Actividad = () => {

    const [workSpacesUser, setworkSpacesUser] = useState ([])
    

    useEffect(() => {

        fetch("http://localhost:5000/show-workspace/{:id")
            .then((res) => res.json())
            .then(spaceUser => setworkSpacesUser(spaceUser))


    }, [])

    return (
        <div className='info'>

            <NavPerfil />

            <h3>Espacios de trabajo</h3>

            <hr />

            {workSpacesUser.map(eachWorkSpace => {
                return (
                    <p>{eachWorkSpace.name_}</p>
                )
            }

            )}


        </div>
    )
}
