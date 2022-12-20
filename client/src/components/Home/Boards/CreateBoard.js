import React, { useEffect, useState } from "react";
import boardPreview from '../../../img/board-pw.svg';
import Select from "react-select"
import { useSelector } from 'react-redux'
import { defaultFetch } from '../../../helpers/defaultFetch';
import { Navigate } from 'react-router-dom';
/**
 * Componente funcional para seleccionar las caracteristicas de 
 * @returns 
 */
export const CreateBoard = () => {
    const [title, setTitle] = useState(null)
    const [color, setColor] = useState('rgb(0 121 191)');
    const [background, setBackground] = useState(null)
    const [disable, setDisable] = useState('true');
    const [visibility, setVisibility] = useState('Workspace');
    const [workspace, setWorkspace] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [toBoard, setToBoard] = useState('');

    // Constantes alamacenadas en el store de Redux
    const backgroundIMG = useSelector(state => state.boardBackground.backgrounds)
    const reduxWorkspaces = useSelector(state => state.workspaces.workspaces)

    const changeColor = (color) => {
        setColor(color);
        setBackground(null);
    }
    const changeBg = (bg) => {
        setBackground(bg);
        setColor(null);
    }
    useEffect(() => {
       
    }, [color, title, background, disable, visibility, workspace])
    /**
     * Estas dos constantes muestran las etiquetas y valores de los selects
     */
    const workspacesFromUser = reduxWorkspaces.map(e => {
        const selectores = { 'label': e.name_, 'value': e.id };
        return selectores;
    })
    const boardVisibility = [
        { label: 'Private', value: 'Private' }, { label: 'Workspace', value: 'Workspace' }, { label: 'Public', value: 'Public' }
    ];
    /**\
     *  Funcion que hace el insert a la base de datos de un nuevo tablero
     * y te lleva al mismo
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        let info = {
            name_: title,
            visibility: visibility,
            configuration: JSON.stringify({ background, color }),
            fk_id_workspace: workspace
        }
        defaultFetch("/insert-board", "POST", info)
            .then((res) => {
                let link = res.id
                setToBoard(`/board/${link}`)
                setNavigate(true)
            });
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
    const handleWorkspaces = ({ value }) => {
        setWorkspace(value)
    }
    return (
        <section className="create-board">
            <header>
                <h3>Create board</h3>
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
                    <Select
                        required
                        className="user-workspaces"
                        defaultValue={{ label: "Choose a Workspace", value: " " }}
                        options={workspacesFromUser}
                        onChange={handleWorkspaces}
                    />
                <label><h4>Visibility</h4></label>
                <Select required className="visibility"
                    defaultValue={{ label: 'Workspace', value: 'Workspace' }}
                    options={boardVisibility}
                    onChange={handleVisibility} />
                <div>
                    <button disabled={disable} className="submit" type="submit">Create</button>
                </div>
            </form>
            {navigate && (<Navigate to={toBoard} replace={true} />
            )}
        </section>
    );
}