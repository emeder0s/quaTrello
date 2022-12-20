import React, { useState, useEffect } from 'react';
import { Popover } from "@mui/material"
import { CreateBoard } from './CreateBoard';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
/**
 * Componente funcional Boards
 * @returns 
 * Devuelve los workspaces del usuario logeado, con los boards de cada WS y la posibilidad de 
 * crear un tablero nuevo
 */
export const Boards = () => {
    const [anchor, setAnchor] = useState(null);
    const [navigate, setNavigate] = useState(false);
    const [toBoard, setToBoard] = useState('');
    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)
    /**
     * maneja la apertura del popover 
     * @param {*} e Establece el parametro como el ancla para el popover
     */
    const openPopover = (e) => {
        setAnchor(e.currentTarget)
    }
    /**
     * Crea los enlaces y dirige hacia la pagina del board clicado
     * @param {*} link id del board
     */
    const handleBoardClick = (link) => {
        setToBoard(`/board/${link}`)
        setNavigate(true)
    }
    /// Con esto ordenamos los tableros recientes por fecha, para que se actualiceen correctamente
    const allUserBoards = reduxWorkspaces.map(element => (
        (Object.values(element.boards).map((board) => (board)))
    ));
    const orderedBoards = allUserBoards.flatMap((board) => (board));
    orderedBoards.sort(function (a, b) {
        var keyA = new Date(a.last_access), keyB = new Date(b.last_access);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    }) 
    return (
        <div className="boards-container">
            {navigate && (<Navigate to={toBoard} replace={true} />)}
            <div className='recent'>
                <h2><span><AiOutlineClockCircle /></span><span>Visto Recientemente</span></h2>
                <div className='boards-recent'>
                    {orderedBoards.length > 0
                        ? orderedBoards.slice(0, 3).map((e, k) => (
                            <button 
                            type ="button" 
                            key={k}
                            style= { (JSON.parse(e.configuration)).background ? 
                                { backgroundImage: `url(${(JSON.parse(e.configuration)).background})` } :{ backgroundColor: `${(JSON.parse(e.configuration)).color}` }
                            }
                            onClick ={() => handleBoardClick(e.id)} 
                            className='box'>{e.name_}</button>
                        )) : <p>Aun no tienes historial de trabajo</p>
                    }
                </div>
            </div>
            <div className='userWorkspaces'>
                <h2>YOUR WORKSPACES</h2>
                {reduxWorkspaces.length > 0
                    ? reduxWorkspaces.map((element, i) => (
                        <div key={i} className='workspace'>
                            <h3>{element.name_}</h3>
                            <div className='boards'>
                                {console.log(element)}
                                {element.boards ? Object.values(element.boards).map((board, k) => (
                                    <button
                                    type ="button"
                                    key={k}
                                    style= {JSON.parse(element.boards[k].configuration).background ? 
                                        { backgroundImage: `url(${(JSON.parse(element.boards[k].configuration).background)})` } :{ backgroundColor: `${(JSON.parse(element.boards[k].configuration)).color}` }}
                                    onClick ={() => handleBoardClick(element.boards[k].id)} 
                                    className='box'>{board.name_}</button>
                                )) : ""}
                                <button type="button" id ={element.id}  onClick={openPopover} className='add box'>Create new board</button>
                                <Popover
                                    id = {element.id}
                                    open={Boolean(anchor)}
                                    anchorEl={anchor}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }}
                                    transformOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }}
                                    onClose={() => setAnchor(null)}
                                >
                                    <CreateBoard />
                                </Popover>

                            </div>
                        </div>
                    )) : <p>Aun no tienes espacios de trabajo, crea alguno para empezar a trabajar con tu equipo</p>}
            </div>

        </div>
    )
}
