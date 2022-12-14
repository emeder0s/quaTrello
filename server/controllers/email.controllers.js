var nodemailer = require('nodemailer');
const Users = require("../models/user.model");
const fs = require("fs")
const path = require("path")
const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "quatrellothebridge@gmail.com",
        pass: "tvqxolkufsuwmbna"
    }
};
const transporter = nodemailer.createTransport(smtpConfig);

const email = {

    emailToRegister: async (jwt, email) => {
        var mailOptions = {
            from: 'quatrellothebridge@gmail.com',
            to: email,
            subject: 'Confirmacion de Email: Completa tu registro',
            text: "",
            html: `<!doctype html>
                <html ⚡4email>
                  <head>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1>Confirmación de email:</h1>
                    <h3>Bienvenido a quaTrello</h3>
                    <p>Con este enlace confirmarás tu correo electrónico y podras completar los datos de registro: <a href="http://127.0.0.1:3000/forgetpassword/${jwt}">haz click Aqui</a></p>
                    <p>Si no has sido tú quien se ha registrado, ignora este mensaje.</p>
                    <p>Gracias por confiar en quaTrello.</p>
                  </body>
                </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
            return info
        });
    },

    /**
     * Envia un correo electrónico con el enlace de recuperación de contraseña
     * @param {string} infoJwt - json web token generado con el email del usuario
     * @param {string} user_email - dirección de email del usuario que ha solicitado la contraseña.
     */
    passrequest: async (infoJwt, user_email) => {
        var mailOptions = {
            from: 'quatrellothebridge@gmail.com',
            to: user_email,
            subject: 'Cambio de contraseña: Comprobacion de identidad',
            text: "",
            html: `<!doctype html>
            <html ⚡4email>
              <head>
                <meta charset="utf-8">
              </head>
              <body>
                <h1>Recuperación de contraseña:</h1>
                <h3>quaTrello</h3>
                <p>Has solicitado el cambio de contraseña para tu usuario, <a href="http://127.0.0.1:3000/forgetpassword/${infoJwt}">haz click Aqui</a> para establecer una nueva.</p>
                <p>Si no has solicitado el cambio de contraseña, ignora este mensaje.</p>
                <p>Gracias por confiar en quaTrello.</p>
              </body>
            </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
                console.log(info.accepted)
            }
            return info
        });

    },
    /**
     * Envia un email de confirmación de cambio de contraseña.
     * @param {string} user_email - dirección de email del usuario.
     */
    passconfirm: async (user_email) => {
        var mailOptions = {
            from: 'quatrellothebridge@gmail.com',
            to: user_email,
            subject: 'Confirmación de cambio de contraseña',
            text: "",
            html: `<!doctype html>
          <html ⚡4email>
            <head>
              <meta charset="utf-8">
            </head>
            <body>
              <h1>Confirmación de contraseña:</h1>
              <h3>quaTrello</h3>
              <p>El cambio de contraseña se ha realizado con éxito. Si no recuerdas haber hecho este cambio puedes <a href="http://127.0.0.1:3000/passrecovery">Recuperar tu contraseña.</a></p>
              <p>Gracias por confiar en quaTrello.</p>
            </body>
          </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
                console.log(info.accepted)
            }
            return info
        });
    },
};

module.exports = email;



