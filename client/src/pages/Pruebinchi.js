import React, { useState, useEffect } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import Cookies from 'universal-cookie';
import "../css/layouts/pruebinchi.css";

export const Pruebinchi = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [storedMessages, setStoredMessages] = useState();

  /* useEffect(() =>{
    const receivedMessage = (message) =>{
      setMessages([...messages, message])
    }
    socket.on('message', receivedMessage)
    return () => {
      socket.off('message', receivedMessage)
    }
  }, [messages]) */

  useEffect(() => {
    getUser();
  }, [user]);

  useEffect(() => {
    getMsgs();
  }, [storedMessages]);

  async function getMsgs() {
    if (!storedMessages) {
      let datos = {
        method: "post",
        body: JSON.stringify({ fk_id_board: 1 }),
        mode: "cors",
        headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
      };

      fetch("/getmessages", datos)
        .then((res) => res.json())
        .then((res) => {
          setStoredMessages(res);
          console.log(res);
        });
    }
  };

  async function getUser() {
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
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      text_: message,
      fk_id_board: 1,
      fk_id_user: user.id,
      user_name: user.full_name.split(' ')[0]
    }
    console.log(newMessage);
    setMessages([...messages, newMessage])
    //Limpiamos el mensaje
    setMessage('');

    let datos = {
      method: "post",
      body: JSON.stringify({ text_: message, fk_id_board: 1, user_name: user.full_name.split(' ')[0] }),
      mode: "cors",
      headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
    };

    fetch("/insertmessage", datos);

  }
  return (
    <div className="container mt-3">
      <div className="card shadow border-0">
        <h5 className="text-center mb-3">CHAT {user.full_name}</h5>

      </div>
      <div className="card mt-3 mb-3 shadow border-0" id="content-chat">
        <div className="card-body">

          {storedMessages ? storedMessages.map((message, index) => (
            <div key={index} className={`d-flex p-3 ${message.fk_id_user === user.id ? "justify-content-end" : "justify-content-start"}`}>
              <div className={`card mb-3 shadow border-1 ${message.fk_id_user === user.id ? "bg-success bg-opacity-25" : "bg-light"}`}>
                <div className="card-body">
                  <small className="text-muted">{message.fk_id_user === user.id ? "Yo" : message.user_name}: {message["text_"]}</small>
                </div>
              </div>
            </div>
          )) : null}

          {messages.map((message, index) => (
            <div key={index} className={`d-flex p-3 ${message.fk_id_user === user.id ? "justify-content-end" : "justify-content-start"}`}>
              <div className={`card mb-3 shadow border-1 ${message.fk_id_user === user.id ? "bg-success bg-opacity-25" : "bg-light"}`}>
                <div className="card-body">
                <small className="text-muted">{message.fk_id_user === user.id ? "Yo" : message.fk_id_user}: {message["text_"]}</small>
                </div>
              </div>
            </div>
          ))}

          <form onSubmit={handlerSubmit}>
            <div className="d-flex">
              <input type="text" className="form-control" placeholder="Mensaje..." onChange={e => setMessage(e.target.value)} value={message} />
              <button className="btn btn-success mx-3" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>)
}