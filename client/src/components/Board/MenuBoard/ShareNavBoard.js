import React, { useState } from "react";



export const ShareNavBoard = ({showWindow, setIsModalShareOpen}) => {

    return (


                    <div className="modal">
                        <div className="contenedor">
                            <header>Compartir Tablero</header>
                            <label htmlFor="btn-modal" onClick={(e) => setIsModalShareOpen(false)}>X</label>
                            <div className="contenido">
                                
                            </div>
                        </div>
                    </div>

    )
}