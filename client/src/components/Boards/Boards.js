import React, { useState, useEffect } from 'react';
import { Popover } from "@mui/material"
import { CreateBoard } from './CreateBoard';
import user from "./userData.json"

export const Boards = () => {
    const [anchor,setAnchor] = useState(null);
    let workSpaces = Object.values(user)[2]
    const openPopover = (e) => {
        setAnchor(e.currentTarget)
    }
    return (
        <div>
            <div className="boards-container">
                <h3>Recently viewed</h3>
                <h3>YOUR WORKSPACES</h3>
                {workSpaces
                    ? workSpaces.map((element, i) => (
                        <div key={i}>
                            <h3>{element.ws_name}</h3>
                             <div className='boards'>
                                {element.boards ? Object.values(element.boards).map((board, k) => (
                                    <div key={k} className='box'>{board.name}</div>
                                )):""}
                                <button type="button" onClick = {openPopover} className='add box'>Create new board</button>
                                <Popover 
                                    open = {Boolean(anchor)}
                                    anchorEl ={anchor}
                                    anchorOrigin ={{
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }}
                                    transformOrigin  ={{
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }}
                                    onClose ={() => setAnchor(null)} 
                                >
                                    <CreateBoard/>
                                </Popover>
                                
                            </div>  
                        </div>    
                    )): ""}
                    
            </div>
        </div>
    )
}
