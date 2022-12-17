import React, { useEffect, useState } from "react";
import boardPreview from '../../img/board-preview.svg';

export const CreateBoard = (props) => {

    return (
        <section className="create-board">
            <header>
                <h3>Create board</h3>
                <button className="close">X</button>
            </header>
            <hr></hr>
            <div className="chooseBG">
                <div className="board-bg"><img src={boardPreview} alt='icono'></img></div>
                
            </div>
            <h4>Background</h4>
            <form >
                <ul className="images" >
                    <li><button className="image #1"></button></li>
                    <li><button className="image #2"></button></li>
                    <li><button className="image #3"></button></li>
                    <li><button className="image #4"></button></li>
                </ul>
                <ul className="colors">
                    <li><button className="bg c1"></button></li>
                    <li><button className="bg c2"></button></li>
                    <li><button className="bg c3"></button></li>
                    <li><button className="bg c4"></button></li>
                    <li><button className="bg c5"></button></li>
                    <li><button className="bg plus"></button></li>
                </ul>
                <label><h4>Board title</h4></label>
                <input className="title" type="text" />
                <label><h4>Workspaces</h4></label>
                <select className="actualWorkSpaces">
                    <option>Workspace 1</option>
                    <option>Workspace 2</option>
                    <option>Workspace 3</option>
                </select>
                <label><h4>Visibility</h4></label>
                <select>
                    <option>Workspace</option>
                    <option>Private</option>
                    <option>Public</option>
                </select>
                <div>
                <button className="submit" type="submit">Create</button>
                </div>
            </form>
        </section>
    );
}