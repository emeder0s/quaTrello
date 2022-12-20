import React from "react";
import { useEffect, useState } from "react";


export const ShareNavBoard = ({ setIsModalShareOpen }) => {
    

    const modalContent = <form className="formModal">
        <span>Compartir Tablero</span>
        <input type="email" default/>
    </form>


    let token = window.location.pathname.split("/")[2];

    const [shareMember, setShareMember] = useState([])

    useEffect(() => {

        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fk_id_board: token }),
        };

        fetch("/getUsersBoard", data)
            .then((res) => res.json())
            .then((res) => {
                setShareMember(res);
            });
    }, []);




    return (


        <div className="modal">
            <div >
                <button onClick={e => setIsModalShareOpen(false)} className="butModal">x</button>
                <label htmlFor="btn-modal" onClick={(e) => setIsModalShareOpen(true)}><div className=".modal">{modalContent}</div></label>
                <br />
                <br />
                <br />
                {setIsModalShareOpen}
                {shareMember ? shareMember.map((member, i) => {
                    return (
                        <tr key={i} className="trSpaces">
                            <td className='tdSpaces'>{member.full_name}</td>
                            <br />
                            <td className='tdSpaces'>{member.email}</td>
                            <br />
                        </tr>
                    )
                })
                    : <p>"No hay miembros en el tablero"</p>
                }

            </div>
        </div>

    )
}