import React from "react";


const modalContent = <form className="formModal">
    <span>Abrir Chat</span>
    <input type="text" placeholder="Dirección de correo electrónico o nombre"/>
</form>

/*
hacer el fetch para que salgan todos los usuarios que están incluidos en ese tablero
*/




export const ChatNavBoard = ({ showWindow, setIsModalShareOpen }) => {

    return (


        <div className="modalChat">
            <div >
                <button onClick={e => setIsModalShareOpen(false)} className="butModal">x</button>
                <label htmlFor="btn-modal" onClick={(e) => setIsModalShareOpen(true)}><div className="modalChat">{modalContent}</div></label>
                {setIsModalShareOpen && console.log("HOLA")}

            </div>
        </div>

    )
}