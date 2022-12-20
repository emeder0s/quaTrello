import React from 'react'
import { NavPerfil } from './NavPerfil'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Tarjetas = () => {

    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)


    // useEffect(() => {

    //     // let token = window.location.pathname.split("/")[2];
    //     // console.log(token)

    //     // fetch(`/show-board/${token}`)
    //     fetch("/show-board/3")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setBoardsSpacesUser(res);

    //         });

    // }, [])

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

{/* 
            <div className='divSpaces'>
                
    
                    {boardsSpacesUser ? boardsSpacesUser.map((board, i) => {
                        return (
                            <tr key={i} className="trSpaces">
                                <td className='tdSpaces'>{board.name_}</td>
                                <br />
                                <td className='tdSpaces'>{board.last_access}</td>
                                <br/>
                                <td className='tdSpaces'>{board.visibility}</td>
                            </tr>
                        )
                    })
                        : <p>"No hay tableros registrados"</p>
                    }
         
            </div> */}

        </div>
    )
}
