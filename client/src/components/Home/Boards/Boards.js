import React, { useState, useEffect } from 'react';
import { Popover } from "@mui/material"
import { CreateBoard } from './CreateBoard';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const Boards = () => {
    const [anchor, setAnchor] = useState(null);
    const [navigate, setNavigate] = useState(false);
    const [toBoard, setToBoard] = useState('');
    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)
    const openPopover = (e) => {
        setAnchor(e.currentTarget)
    }
    const handleBoardClick = (link) => {
        setToBoard(`/board/${link}`)
        setNavigate(true)
    }
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
    // console.log(JSON.parse(orderedBoards[0].configuration).background);
    return (
        <div className="boards-container">
            {navigate && (<Navigate to={toBoard} replace={true} />)}
            <div className='recent'>
                <h2><span><AiOutlineClockCircle /></span><span>Visto Recientemente</span></h2>
                <div className='boards-recent'>
                    {orderedBoards
                        ? orderedBoards.slice(0, 3).map((e, k) => (
                            // console.log((JSON.parse(e.configuration)).background)
                            <button 
                            type ="button" 
                            key={k}
                            style= {e.configuration ? 
                                { backgroundImage: `url(${(JSON.parse(e.configuration)).background})` } :{ backgroundColor: `${(JSON.parse(e.configuration))}.color` }}
                            onClick ={() => handleBoardClick(e.id)} 
                            className='box'>{e.name_}</button>
                        )) : ""
                    }
                </div>
            </div>
            <div className='userWorkspaces'>
                <h2>YOUR WORKSPACES</h2>
                {reduxWorkspaces
                    ? reduxWorkspaces.map((element, i) => (
                        <div key={i} className='workspace'>
                            <h3>{element.name_}</h3>
                            <div className='boards'>
                                {element.boards ? Object.values(element.boards).map((board, k) => (
                                    // console.log(JSON.parse(element.boards[k].configuration).background)
                                    <button
                                    type ="button"
                                    key={k}
                                    style= {element.boards[k].configuration ? 
                                        { backgroundImage: `url(${(JSON.parse(element.boards[k].configuration).background)})` } :{ backgroundColor: `${(JSON.parse(element.boards[k].configuration))}.color` }}
                                    // style= {element.boards[k].configuration ? { backgroundImage: `url(${background})` } :{ backgroundColor: color }}
                                    onClick ={() => handleBoardClick(element.boards[k].id)} 
                                    className='box'>{board.name_}</button>
                                )) : ""}
                                <button type="button" onClick={openPopover} className='add box'>Create new board</button>
                                <Popover
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
                    )) : ""}
            </div>

        </div>
    )
}
