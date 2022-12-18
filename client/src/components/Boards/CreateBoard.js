import React, { useEffect, useState } from "react";
import boardPreview from '../../img/board-pw.svg';
import Select from "react-select"

export const CreateBoard = () => {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');
    const [background, setBackground] = useState('')
    const [disable, setDisable] = useState('true');
    const [visibility,setVisibility] = useState('Workspace');
    const [workspace, setWorkspace] = useState('');
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
                return data && data.length ? setBackground(data[0].urls.thumb) : "";
            });
    }, []);
    const changeColor = (color) => {
        setColor(color);
        setBackground('');
    }
    const changeBg = (bg) => {
        setBackground(bg);
        setColor('');
    }
    useEffect(() => {
        console.log(visibility)
    }, [color, title, background, disable,visibility])
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
    const handleVisibility = ({value}) => {
        setVisibility(value)
    }
    // function enableSubmit(filled) {
    //     let btn = document.querySelector('input[type="submit"]');
    //     if (filled.value.includes('@')) {
    //         btn.disabled = false;
    //     }
    //     else {
    //         btn.disabled = true
    //     }
    // }
    return (
        <section className="create-board">
            <header>
                <h3>Create board</h3>
                <button className="close">x</button>
            </header>
            <hr></hr>
            <div className="chooseBG">
                <div className="board-bg" style={background ? { backgroundImage: `url(${background})` } : { backgroundColor: color }}><img src={boardPreview}></img></div>

            </div>
            <h4>Background</h4>
            <form onSubmit={handleSubmit}>
                {data && data.length > 0 &&
                    <ul className="images" >
                        <li><button type="button" className="image #1" onClick={() => changeBg(data[0].urls.thumb)} style={{ backgroundImage: `url(${data[0].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #2" onClick={() => changeBg(data[1].urls.thumb)} style={{ backgroundImage: `url(${data[1].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #3" onClick={() => changeBg(data[2].urls.thumb)} style={{ backgroundImage: `url(${data[2].urls.thumb})` }}></button></li>
                        <li><button type="button" className="image #4" onClick={() => changeBg(data[3].urls.thumb)} style={{ backgroundImage: `url(${data[3].urls.thumb})` }}></button></li>
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
                    defaultValue= {{ label: 'Workspace 1', value: 'Workspace 1' }}
                    options={workspacesFromUser}
                />
                <label><h4>Visibility</h4></label>
                <Select className="visibility"
                    defaultValue= {{ label: 'Workspace', value: 'Workspace' }}
                    options={boardVisibility}
                    onChange={handleVisibility} />
                <div>
                    <button disabled={disable} className="submit" type="submit">Create</button>
                </div>
            </form>
        </section>
    );
}