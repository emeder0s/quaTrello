import React, { useEffect, useState } from "react";
import boardPreview from '../img/board-pw.svg';
import { Popover } from "@mui/material"
import Select from "react-select"
import { useSelector } from 'react-redux'

export const CreateBoard = () => {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');
    const [background, setBackground] = useState('')
    const [disable, setDisable] = useState('true');
    const [visibility, setVisibility] = useState('Workspace');
    // const [workspace, setWorkspace] = useState('');

    const backgroundIMG = useSelector(state => state.boardBackground.backgrounds)

    const changeColor = (color) => {
        setColor(color);
        setBackground('');
    }
    const changeBg = (bg) => {
        setBackground(bg);
        setColor('');
    }
    useEffect(() => {
    }, [color, title, background, disable, visibility])
    const workspacesFromUser = [
        { label: 'Workspace 1', value: 'Workspace 1' }, { label: 'Workspace 2', value: 'Workspace 2' }, { label: 'Workspace 3', value: 'Workspace 3' }
    ];
    const boardVisibility = [
        { label: 'Private', value: 'Private' }, { label: 'Workspace', value: 'Workspace' }, { label: 'Public', value: 'Public' }
    ];
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleInputChange = (event) => {
        if (event.target.value) {
            setTitle(event.target.value)
            setDisable(false)
        } else {
            setDisable(true)
        }
    }
    const handleVisibility = ({ value }) => {
        setVisibility(value)
    }
    
    
    return (
        <section className="create-board">
            <header>
                <h3>Create board</h3>
                <button className="close" onClick={e=>{}}>x</button>
            </header>
            <hr></hr>
            <div className="chooseBG">
                <div className="board-bg" style={background ? { backgroundImage: `url(${background})` } : { backgroundColor: color }}><img src={boardPreview}></img></div>

            </div>
            <h4>Background</h4>
            <form onSubmit={handleSubmit}>
                {backgroundIMG && backgroundIMG.length > 0 &&
                    <ul className="images" >
                        <li><button type="button" className="image #1" onClick={() => changeBg(backgroundIMG[0].urls.thumb)} style={{ backgroundImage: `url(${backgroundIMG[0].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #2" onClick={() => changeBg(backgroundIMG[1].urls.thumb)} style={{ backgroundImage: `url(${backgroundIMG[1].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #3" onClick={() => changeBg(backgroundIMG[2].urls.thumb)} style={{ backgroundImage: `url(${backgroundIMG[2].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #4" onClick={() => changeBg(backgroundIMG[3].urls.thumb)} style={{ backgroundImage: `url(${backgroundIMG[3].urls.thumb})` }}></button></li>
                    </ul>}
                <ul className="colors">
                    <li><button type="button" onClick={() => changeColor('#0079bf')} className="c1"></button></li>
                    <li><button type="button" onClick={() => changeColor('#d29034')} className="c2"></button></li>
                    <li><button type="button" onClick={() => changeColor('#519839')} className="c3"></button></li>
                    <li><button type="button" onClick={() => changeColor('#b04632')} className="c4"></button></li>
                    <li><button type="button" onClick={() => changeColor('#89609e')} className="c5"></button></li>
                </ul>
                <label><h4>Board title</h4></label>
                <input required onChange={handleInputChange} className="title" type="text" />
                <label><h4>Workspaces</h4></label>
                <Select className="user-workspaces"
                    defaultValue={{ label: 'Workspace 1', value: 'Workspace 1' }}
                    options={workspacesFromUser}
                />
                <label><h4>Visibility</h4></label>
                <Select className="visibility"
                    defaultValue={{ label: 'Workspace', value: 'Workspace' }}
                    options={boardVisibility}
                    onChange={handleVisibility} />
                <div>
                    <button disabled ={disable} className="submit" type="submit">Create</button>
                </div>
            </form>
        </section>
    );
}