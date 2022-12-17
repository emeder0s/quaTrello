import React, { useState, useEffect } from 'react'

export const Pruebinchi = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [storedMessages, setStoredMessages] = useState([])

  const handlerSubmit = (e) => {
    //Evitamos recargar la página
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className="container mt-3">

        <div className="card shadow border-0">
          <div className="card-body">
            <h5 className="text-center mb-3">CHAT</h5>
            {/* chat form */}

            <form onSubmit={handlerSubmit}>
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="Mensaje..." onChange={e => setMessage(e.target.value)} value={message} />
                <button className="btn btn-success mx-3" type="submit">Enviar</button>
              </div>
            </form>
          </div>
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

            {/* chat stored messages */}
            

          </div>
        </div>
      </div>
    </div>)
}