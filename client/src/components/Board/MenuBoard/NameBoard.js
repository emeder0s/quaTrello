import React, { useEffect } from "react";
import { getFetch } from "../../../helpers/defaultFetch";


export const NameBoard = () => {

    useEffect(() => {

        const getFetch = async (endPoint, metodo, datos) => {
            let metaData = {
                method: metodo,
                body: JSON.stringify(datos),
                mode: "cors",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-type": "application/json",
                },
              };
          console.log(metaData)
              await fetch('http://localhost:5000/show-board/:id', metaData)
              .then((res) => res.json())
              .then(res=>{return res})
        
        
        }
        //setUsuarios(usuarios)
    }, [])





    return (

        <div className="navBoard1">aqui va el nombre</div>

    )

}