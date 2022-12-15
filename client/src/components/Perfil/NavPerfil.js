import React from "react";
import { NavLink } from "react-router-dom";

export const NavPerfil = () => {

    return (

        <nav className="navPerfil">
            <ul className="ulPerfil">
                <li className="liPerfil"><NavLink to="/perfil">Perfil y visibilidad</NavLink></li>
                <li className="liPerfil"><NavLink to="/perfil/actividad" >Actividad</NavLink></li>
                <li className="liPerfil"><NavLink to="/perfil/tarjetas">Tarjetas</NavLink></li>
                <li className="liPerfil"><NavLink to="/perfil/configuracion">Configuración</NavLink></li>
            </ul>
        </nav>

    )

}