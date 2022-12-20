import React from "react";


const modalContent = <form className="formModal">
    <span>Compartir Tablero</span>
    <input type="email" placeholder="Dirección de correo electrónico o nombre"/>
</form>

/*
hacer el fetch para que salgan todos los usuarios que están incluidos en ese tablero
*/




export const ShareNavBoard = ({ showWindow, setIsModalShareOpen }) => {

    return (


        <div className="modal">
            <div >
                <button onClick={e => setIsModalShareOpen(false)} className="butModal">x</button>
                <label htmlFor="btn-modal" onClick={(e) => setIsModalShareOpen(true)}><div className=".modal">{modalContent}</div></label>
                {setIsModalShareOpen}

            </div>
        </div>

    )
}