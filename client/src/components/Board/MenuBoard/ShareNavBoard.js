import React, { useState } from "react";



export const ShareNavBoard = (props) => {

    return (


                    <div class="modal">
                        <div class="contenedor">
                            <header>Compartir Tablero</header>
                            <label for="btn-modal" onClick={() => props.showWindow("menu3")}>X</label>
                            <div class="contenido">
                                
                            </div>
                        </div>
                    </div>

    )
}