import React from "react";


const modalContent = <form className="formModal">
    <span>Compartir Tablero</span>
    <input type="text" placeholder="Dirección de correo electrónico o nombre"/>
</form>



export const ShareNavBoard = ({ showWindow, setIsModalShareOpen }) => {

    return (


        <div className="modal">
            <div >
                <button onClick={e => setIsModalShareOpen(false)} className="butModal">x</button>
                <label htmlFor="btn-modal" onClick={(e) => setIsModalShareOpen(true)}><div className=".modal">{modalContent}</div></label>
                {setIsModalShareOpen && console.log("HOLA")}

            </div>
        </div>

    )
}