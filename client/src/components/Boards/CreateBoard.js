import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import boardPreview from '../../img/board-pw.svg';


export const CreateBoard = () => {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');
    const [Background, setBackground] = useState('')
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?client_id=JMjfYjVegEZWmnba38YxaDVZaPQx4fH75Dnxq3mUN1E&count=4`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
                console.log(data);
            });
    }, []);
    const changeColor = (color) => {
        setColor(color)
    }
    useEffect(() => {
        console.log(color);
        console.log(title);
    }, [color, title])
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    const getBackgrounds = async () => {
        await fetch("https://api.unsplash.com/photos/random?client_id=JMjfYjVegEZWmnba38YxaDVZaPQx4fH75Dnxq3mUN1E&count=4")
            .then(res => res.json())
            .then(json => {let datos = json})
        console.log(data)
    }
    useEffect(() => {
        getBackgrounds();
    }, [getBackgrounds])
    return (
        <section className="create-board">
            <header>
                <h3>Create board</h3>
                <button className="close">X</button>
            </header>
            <hr></hr>
            <div className="chooseBG">
                <div className="board-bg" style={{ backgroundColor: color }}><img src={boardPreview}></img></div>

            </div>
            <h4>Background</h4>
            <form onSubmit={handleSubmit}>
                <ul className="images" >
                    {/* <li><button className="image #1" style={{ backgroundImage: `url(${data[0].urls.thumb})` }}></button></li>
                    <li><button className="image #2" style={{ backgroundImage: `url(${data[1].urls.thumb})` }}></button></li>
                    <li><button className="image #3" style={{ backgroundImage: `url(${data[2].urls.thumb})` }}></button></li>
                    <li><button className="image #4" style={{ backgroundImage: `url(${data[3].urls.thumb})` }}></button></li> */}
                </ul>
                <ul className="colors">
                    <li><button type="button" onClick={() => changeColor('#0079bf')} className="c1"></button></li>
                    <li><button type="button" onClick={() => changeColor('#d29034')} className="c2"></button></li>
                    <li><button type="button" onClick={() => changeColor('#519839')} className="c3"></button></li>
                    <li><button type="button" onClick={() => changeColor('#b04632')} className="c4"></button></li>
                    <li><button type="button" onClick={() => changeColor('#89609e')} className="c5"></button></li>
                </ul>
                <label><h4>Board title</h4></label>
                <input onChange={(e) => setTitle(e.target.value)} className="title" type="text" />
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