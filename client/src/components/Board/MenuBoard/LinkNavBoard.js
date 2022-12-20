import React, { useEffect, useState } from "react";
import { NameBoard } from "./NameBoard";
import { VisibilityNavBoard } from "./VisibilityNavBoard";
import { ShareNavBoard } from "./ShareNavBoard";
import { MembersNavBoard } from "./MembersNavBoard";
import { useDispatch } from "react-redux";
import { fetchWorkspaces } from "../../../features/workspaces/workspacesSlice";



export const LinkNavBoard = () => {

    const [navBoard, setNavBoard] = useState(false);
    const [isModalShareOpen, setIsModalShareOpen] = useState(false)
    // const [nameBoardUser, setNameBoardUser] = useState([])

    const [nameBoardNav, setNameBoardNav] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchWorkspaces())
        let token = window.location.pathname.split("/")[2];

        fetch(`/show-board/${token}`)
            .then((res) => res.json())
            .then((res) => {
                setNameBoardNav(res);
            });

    }, [])

    const showWindow = (menu) => {

        navBoard !== menu ? setNavBoard(menu) : setNavBoard(false);

    }



    return (
        <div className="divNavBoard">
            <nav className="navNBoard">
                <input type="text" defaultValue={nameBoardNav.name_} className="butNavBoard" />

                <button className='butNavBoard' onClick={() => showWindow("menu2")}>visibilidad</button>
                {navBoard === "menu2" && <VisibilityNavBoard />}

                <button className="butNavBoard lbl-modal" onClick={e => setIsModalShareOpen(!isModalShareOpen)}>Compartir</button>
                {isModalShareOpen && <ShareNavBoard showWindow={showWindow} setIsModalShareOpen={setIsModalShareOpen} />}

                <button className='butNavBoard' onClick={() => showWindow("menu4")}>Miembros</button>
                {navBoard === "menu4" && <MembersNavBoard />}

            </nav>
        </div>
    )

}