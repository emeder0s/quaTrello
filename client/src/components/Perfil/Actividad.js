import React from 'react'
import { NavPerfil } from './NavPerfil'
import { useEffect } from 'react'
import { getFetch } from '../../helpers/defaultFetch'


export const Actividad = () => {

    const [workSpacesUser, setworkSpacesUser] = ([])


    useEffect(() => {

        getFetch("/show-workspace/:id")
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
