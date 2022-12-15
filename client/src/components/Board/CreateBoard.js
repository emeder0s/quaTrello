import React, { useEffect, useState } from "react";

export const CreateBoard = (props) => {


    return (
        <section className="create-board">
            <h3>Create board</h3>
            <hr></hr>
            <div className="chooseBG">
                <figure className="board-bg"></figure>
            </div>
            <h4>Background</h4>
            <form  >
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
                <label>Board title</label>
                <input type="text" />

            </form>
        </section>
    );
}