import React, { useEffect, useState } from "react";
import { NameBoard } from "./NameBoard";
import { VisibilityNavBoard } from "./VisibilityNavBoard";
import { ShareNavBoard } from "./ShareNavBoard";
import { MembersNavBoard } from "./MembersNavBoard";



export const LinkNavBoard = () => {

    const [navBoard, setNavBoard] = useState(false);

    //traemos todos los usuarios cuando se cargue la pantalla
    useEffect(() => {
        let Metadatos = {
            method: 'POST',
            body: JSON.stringify({
                //"fk_id_card": "id_card"
            }),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        }

        fetch('http://localhost:5000/getactivities', Metadatos)
            .then(res => console.log(res))
    }, [])


    const showWindow = (menu) => {
        navBoard !== menu ? setNavBoard(menu) : setNavBoard(false);
    }


    return (
        <div>
            <nav>
                <button className='menu' onClick={() => showWindow("menu1")}>Nombre del tablero</button>
                {navBoard === "menu1" && <NameBoard />}
                <button className='menu' onClick={() => showWindow("menu2")}>visibilidad</button>
                {navBoard === "menu2" && <VisibilityNavBoard />}
                <button className='menu' onClick={() => showWindow("menu3")}>Miembros</button>
                {navBoard === "menu3" && <ShareNavBoard />}
                <button className='menu' onClick={() => showWindow("menu4")}>Compartir</button>
                {navBoard === "menu4" && <MembersNavBoard />}
            </nav>
        </div>

    )

}