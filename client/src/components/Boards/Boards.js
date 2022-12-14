import React, { useState, useEffect } from 'react';
import user from "./userData.json"

export const Boards = () => {
    let workSpaces = Object.values(user)[2]

    return (
        <div>
            <div className="espacios">
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
                                <div className='add box'>Create new board</div>
                            </div>  
                        </div>    
                    )): ""}
                    
            </div>
        </div>
    )
}
