import React, { useEffect, useState } from "react";
import { NavPerfil } from "../../Perfil/NavPerfil";
import { useSelector } from 'react-redux'


export const NameBoard = () => {

    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)


    // const [nameBoardUser, setNameBoardUser] = useState([])

    // useEffect(() => {

    //     let token = window.location.pathname.split("/")[2];
    //      console.log(token)

    //     fetch(`/show-board/${token}`)
    //     // fetch("/show-board/3")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setNameBoardUser(res);
    //             console.log(res)
    //         });



    // }, [])




    return (

        <div className='info'>

            <NavPerfil />

            <h1 className='h1Info'>Tableros</h1>
            <hr className='hrAct' />

            {reduxWorkspaces
                ? reduxWorkspaces.map((element, i) => (
                    <div key={i}>
                        <div className='boards'>
                            {element.boards ? Object.values(element.boards).map((board, k) => (
                                <div key={k} className='box'>{board.name_}</div>
                            )) : ""}
                        </div>
                    </div>
                )) : ""}


        </div>





        //     <div>

        //     {nameBoardUser ? nameBoardUser.map((espacio) => {
        //         return (

        //             <p>{espacio.name_}</p>
        //         )
        //     })
        //     : <p>"No hay tableros registrados"</p>
        // }
        //     </div>

    )

}