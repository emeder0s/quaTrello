var nodemailer = require('nodemailer');

const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "quatrellothebridge@gmail.com",
    pass: "kvygzxqgdachkjoe"
  }
};
const transporter = nodemailer.createTransport(smtpConfig);

const email = {

  emailToRegister: async (jwt, email) => {
    var username = email.split("@")[0]
    console.log("eviando correo")
    var mailOptions = {
      from: 'quatrellothebridge@gmail.com',
      to: email,
      subject: 'Verifica tu correo electrónico para quaTrello',
      text: "",
      html: `<!doctype html>
                <html ⚡4email>
                  <head>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                      <tbody>
                        <tr>
                         <td align="center">
                          <div style="max-width:520px;margin:0 auto">
                              <div
                                  style="vertical-align:top;text-align:left;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px">
                                  <div style="padding-top:30px;padding-bottom:20px;vertical-align:top;text-align:center"><img
                                              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gP_zj73rBAue_7cECWNwzE9gNSSP6JKY6bE4frxsBv4wcGzXi0JrGFJ3cPRi2l-i_p6PGSyU3F2DJH1hDKfBnBwVTWa=w1920-h902"
                                              height="30" alt="quatrellothebridge"
                                              style="line-height:100%;outline:none;text-decoration:none;border:0" class="CToWUd"
                                              data-bit="iit"></a></div>
                                  <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                      <tbody>
                                          <tr>
                                              <td align="center"><img
                                                      src="https://ci4.googleusercontent.com/proxy/c-ZnjN8qvtu8l_OEizK8mFLIVr9DHtfiLE5TAcrF6zyH4UEx7WsSsYP2ovwjQXXFUhGDD3uG8eszfrR_EKz3CE6Ty8n7mtKqtaPzIHIpFKdN6aGICYwszYV7nWbAV4Q8N0fMey3MUbwO=s0-d-e1-ft#https://id-mail-assets.atlassian.com/template/aid_signup_welcome_verify_adg/people.png"
                                                      height="175" border="0" alt=""
                                                      style="border:0;line-height:100%;outline:none;text-decoration:none"
                                                      class="CToWUd a6T" data-bit="iit" tabindex="0">
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <h1
                                      style="margin-bottom:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:24px;font-weight:500;letter-spacing:-0.01em;color:#172b4d;line-height:28px;margin-top:40px">
                                      ¡Ya falta poco!</h1>
                                  <p
                                      style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                      <a style="text-decoration:none;color:inherit">Hola, ${username}:</a></p>
                                  <p
                                      style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                      Para terminar de configurar tu cuenta y empezar a usar quaTrello, confirma que
                                      tenemos tu correo electrónico correcto.</p>
                                  <div style="margin-top:28px"><a
                                          href="http://127.0.0.1:3000/account-verify/${jwt}"
                                          style="box-sizing:border-box;border-radius:3px;border-width:0;border:none;display:inline-flex;font-style:normal;font-size:inherit;height:2.28571429em;line-height:2.28571429em;margin:0;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none;background:#0052cc;color:#ffffff"
                                          target="_blank"
                                          >Verifica tu correo electrónico</a></div>
                                  <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                                          <tbody>
                                              <tr>
                                                  <td valign="top" align="center"
                                                      style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                                      <span>Has recibido este mensaje de parte de quaTrello</span><br></td>
                                              </tr>
                                              <tr valign="top">
                                                  <td align="center" style="padding-top:15px;padding-bottom:30px"><img
                                                              src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gP_zj73rBAue_7cECWNwzE9gNSSP6JKY6bE4frxsBv4wcGzXi0JrGFJ3cPRi2l-i_p6PGSyU3F2DJH1hDKfBnBwVTWa=w1920-h902"
                                                              width="114" border="0" alt="quaTrello"
                                                              style="border:0;line-height:100%;outline:none;text-decoration:none;display:block;color:#4c9ac9"
                                                              class="CToWUd" data-bit="iit"></td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
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



