import React, { useState, useEffect } from 'react';
import { Popover } from "@mui/material"
import { CreateBoard } from './CreateBoard';
import user from "./userData.json"
import {AiOutlineClockCircle} from 'react-icons/ai'

export const Boards = () => {
    const [anchor, setAnchor] = useState(null);
    let workSpaces = Object.values(user)[2]
    const openPopover = (e) => {
        setAnchor(e.currentTarget)
    }
    return (
        <div className="boards-container">
            <div className='recent'>
                <h2><span><AiOutlineClockCircle/></span><span>Visto Recientemente</span></h2>
            </div>
            <div className='userWorkspaces'>
                <h2>YOUR WORKSPACES</h2>
                {workSpaces
                    ? workSpaces.map((element, i) => (
                        <div key={i} className='workspace'>
                            <h3>{element.ws_name}</h3>
                            <div className='boards'>
                                {element.boards ? Object.values(element.boards).map((board, k) => (
                                    <div key={k} className='box'>{board.name}</div>
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
