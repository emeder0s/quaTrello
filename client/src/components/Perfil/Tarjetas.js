import React from 'react'
import { NavPerfil } from './NavPerfil'
import { useSelector } from 'react-redux'

export const Tarjetas = () => {

    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)

   
    return (
        <div className='info'>

            <NavPerfil />
            <h1 className='h1Info'>Tableros</h1>
            <hr className='hrAct' />

            {reduxWorkspaces
                ? reduxWorkspaces.map((element, i) => (
                    <div key={i} className='workspaceTar'>
                        <h3>{element.name_}</h3>
                        <div className='boards'>
                            {element.boards ? Object.values(element.boards).map((board, k) => (
                                <div key={k} className='boxPerfil'>{board.name_}</div>
                            )) : ""}
                        </div>
                    </div>
                )) : ""}

            
        </div>
    )
}
