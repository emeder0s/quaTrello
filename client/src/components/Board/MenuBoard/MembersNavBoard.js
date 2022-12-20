import React, { useState, useEffect } from "react";



export const MembersNavBoard = () => {

    const [membersNavBoard, setMembersNavBoard] = useState([])
    let token = window.location.pathname.split("/")[2];
    
    useEffect(() => {
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fk_id_board:token }),
        };
        fetch("/getUsersBoard", data)
            .then((res) => res.json())
            .then((res) => {
                setMembersNavBoard(res);
            });
    }, []);

  

    return (
        <div className='memberNavBoard'>
            <div className="membersNavRole">
            <p>Miembro</p>
            <p>Rol</p>
            </div>
           
            {membersNavBoard ? membersNavBoard.map((member, i) => {
                return (
                    <tr key={i} className="trSpaces">
                        <td className='tdSpaces'>{member.full_name}</td>
                        <br/>
                        <td className='tdSpaces'>{member.role_}</td>
                        <br/>
                    </tr>
                )
            })
                : <p>"No hay miembros en el tablero"</p>
            }

        </div>
    )
}