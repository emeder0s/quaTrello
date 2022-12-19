import React, { useEffect, useState } from "react";
import { NameBoard } from "./NameBoard";
import { VisibilityNavBoard } from "./VisibilityNavBoard";
import { ShareNavBoard } from "./ShareNavBoard";
import { MembersNavBoard } from "./MembersNavBoard";
import { ChatNavBoard } from "./ChatNavBoard";



export const LinkNavBoard = () => {

    const [navBoard, setNavBoard] = useState(false);
    const [isModalShareOpen, setIsModalShareOpen] = useState(false)

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
                <input type="text" defaultValue={titleBoard} className="butNavBoard" />
                {navBoard === "menu1" && <NameBoard />}

                <button className='butNavBoard' onClick={() => showWindow("menu2")}>visibilidad</button>
                {navBoard === "menu2" && <VisibilityNavBoard />}
        
                <button className="butNavBoard lbl-modal" onClick={e => setIsModalShareOpen(!isModalShareOpen)}>Compartir</button>
                {isModalShareOpen && <ShareNavBoard showWindow={showWindow} setIsModalShareOpen={setIsModalShareOpen}/>}

                <button className='butNavBoard' onClick={() => showWindow("menu4")}>Miembros</button>
                {navBoard === "menu4" && <MembersNavBoard />}

                <button className='butNavBoard' onClick={e => setIsModalShareOpen(!isModalShareOpen)}>Chat</button>
                {navBoard === "menu5" && <ChatNavBoard/>}
            </nav>
        </div>
    )

}