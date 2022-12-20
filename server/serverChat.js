const express = require("express");
const SocketServer = require('socket.io').Server;
const http = require('http');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express()
//Creamos el servidor con el módulo http de node
const server = http.createServer(app)
//Utilizamos como servidor el proporcionado por socket.io. Configuramos cors indicando que cualquier servidor se puede conectar
const io = new SocketServer(server, {
    cors: {
        origin: '*'
    }
})

app.use(cors())

//Cargamos el bodyParser: middleware para analizar cuerpos de a través de la URL
//Este analizador acepta solo la codificación UTF-8 contenida en el body
app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier tipo de petición lo convertimos a json:
app.use(bodyParser.json());

//Escuchamos la conexión de los clientes. Podemos imprimir el id del cliente conectado
io.on('connection', (socket) => {
    socket.on('message', (message, fk_id_user, user_name, fk_id_board) => {
        socket.broadcast.emit('message', {
            text_: message,
            fk_id_user,
            user_name,
            fk_id_board
        })
    })
})


server.listen("5001", () => {
    console.log('servidor ejecutándose en http://localhost:', "5001");
});
