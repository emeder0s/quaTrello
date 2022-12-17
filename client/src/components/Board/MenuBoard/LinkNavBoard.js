import React, { useEffect, useState } from "react";
import { NameBoard } from "./NameBoard";
import { VisibilityNavBoard } from "./VisibilityNavBoard";
import { ShareNavBoard } from "./ShareNavBoard";
import { MembersNavBoard } from "./MembersNavBoard";



export const LinkNavBoard = () => {

    const [navBoard, setNavBoard] = useState(false);

    //traemos todos los usuarios cuando se cargue la pantalla
    // useEffect(() => {
    //     let Metadatos = {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             //"fk_id_card": "id_card"
    //         }),
    //         mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Content-type": "application/json",
    //         },
    //     }

    //     fetch('http://localhost:5000/getactivities', Metadatos)
    //         .then(res => console.log(res))
    // }, [])


    const showWindow = (menu) => {
        
        navBoard !== menu ? setNavBoard(menu) : setNavBoard(false);
        console.log('eee', navBoard)
    }

    const titleBoard = "Nombre del tablero"

    return (
        <div className="divNavBoard">
            <nav className="navNBoard">
            <input type="text" value={titleBoard} className="butNavBoard"/>
                {navBoard === "menu1" && <NameBoard />}
                <button className='butNavBoard' onClick={() => showWindow("menu2")}>visibilidad</button>
                {navBoard === "menu2" && <VisibilityNavBoard />}
                    <input type="checkbox" id="btn-modal"/>
                    <label for="btn-modal" class="butNavBoard lbl-modal" onClick={() => showWindow("menu3")}>Compartir</label>
                {/* <button className='butNavBoard lbl-modal' onClick={() => showWindow("menu3")}>Compartir</button> */}
                {navBoard === "menu3" && <ShareNavBoard showWindow={showWindow} />}
                <button className='butNavBoard' onClick={() => showWindow("menu4")}>Miembros</button>
                {navBoard === "menu4" && <MembersNavBoard />}
            </nav>
        </div>
    )

}