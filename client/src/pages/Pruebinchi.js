import React, { useState, useEffect } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import Cookies from 'universal-cookie';

export const Pruebinchi = () => {
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [storedMessages, setStoredMessages] = useState([])

  useEffect(async () => {
    var user = {
      email: 1,
      pass: 1
    };
    const cookies = new Cookies();
    const res = await defaultFetch("http://localhost:5000/login", "POST", user)
    console.log(res);
    (res) ? console.log("Correcto, espera que hagamos algo más y te mandamos allí") : console.log("Te has colado");
    (res) ? cookies.set('session', res.jwt, { path: '/' }) : console.log("No se sube la cookie");
    if (!user) {
      let datos = {
        method: "get",
        mode: "cors",
        headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
      };

      fetch("/logged-user", datos)
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
          console.log(res);
        });
    }
  }, [user])

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault();
  }
  return (
    <div className="container mt-3">
      <div className="card shadow border-0">
        <h5 className="text-center mb-3">CHAT {user.name_}</h5>
        <form onSubmit={handlerSubmit}>
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="Mensaje..." onChange={e => setMessage(e.target.value)} value={message} />
            <button className="btn btn-success mx-3" type="submit">Enviar</button>
          </div>
        </form>
      </div>

      {/* chat messages */}
      <div className="card mt-3 mb-3 shadow border-0" id="content-chat">
        <div className="card-body">

          {messages.map((message, index) => (
            <div key={index} className={`d-flex p-3 ${message.from === "Yo" ? "justify-content-end" : "justify-content-start"}`}>
              <div className={`card mb-3 shadow border-1 ${message.from === "Yo" ? "bg-success bg-opacity-25" : "bg-light"}`}>
                <div className="card-body">
                  <small className="">{message.from}: {message.body}</small>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>)
}