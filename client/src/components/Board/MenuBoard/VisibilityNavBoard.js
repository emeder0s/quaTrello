import React, { useState } from "react";



export const VisibilityNavBoard = () => {

    return (

        <div className="navBoard2">
            
            <ul className="ulNavBoard">
            <p className="pNavBoard">Cambiar visibilidad</p>
                <hr />
                <li className="liVisibility">Privado</li>
                <li className="liVisibility">Espacios de trabajo</li>
                <li className="liVisibility">Público</li>
            </ul>
        </div>

    )

}