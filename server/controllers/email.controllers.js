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
  notification: async (user_email_to, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type) => {
    var mailOptions = {
      from: 'quatrellothebridge@gmail.com',
      to: user_email_to,
      subject: 'Actividad reciente',
      text: "",
      html: `<!doctype html>
          <html ⚡4email>
            <head>
              <meta charset="utf-8">
            </head>
            <body>
            <table class="m_-2668785316594404536body"
            style="border-spacing:0;border-collapse:collapse;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;height:100%;width:100%"
            width="100%" height="100%" valign="top" align="left">
            <tbody>
                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                    <td class="m_-2668785316594404536center" align="center" valign="top"
                        style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center;border-collapse:collapse">
                        <center style="width:100%">
                            <table class="m_-2668785316594404536trello-block"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">$
        
                                                <img class="m_-2668785316594404536header-logo-image m_-2668785316594404536center CToWUd"
                                                    height="25" width="122"
                                                    src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gP_zj73rBAue_7cECWNwzE9gNSSP6JKY6bE4frxsBv4wcGzXi0JrGFJ3cPRi2l-i_p6PGSyU3F2DJH1hDKfBnBwVTWa=w1920-h902"
                                                    alt="Logotipo de quaTrello" title="Logotipo de quaTrello"
                                                    style="outline:none;text-decoration:none;height:25px;max-height:25px;max-width:122px;width:122px;display:block;margin:0 auto;float:none">
        
                                            </div>
        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
        
                            <table class="m_-2668785316594404536trello-block"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;padding:16px 0;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
        
                                                <h6
                                                    style="color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;line-height:1.3;word-break:normal;margin-bottom:12px;font-size:20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif">
                                                    Aquí tienes lo que te has perdido…</h6>
        
                                                <table width="100%" class="m_-2668785316594404536phenom"
                                                    style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;margin:12px 0;float:left;clear:both"
                                                    valign="top" align="left">
                                                    <tbody>
                                                        <tr style="padding:0;vertical-align:top;text-align:left"
                                                            valign="top" align="left">
        
                                                            <td class="m_-2668785316594404536phenom-creator"
                                                                style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;width:38px;border-collapse:collapse"
                                                                width="38" valign="top" align="left"> <div
                                                                    class="m_-2668785316594404536phenom-creator-avatar CToWUd"
                                                                    height="30" width="30"
                                                                    style="outline:none;text-decoration:none;max-width:100%;border-radius:50%;height:30px;width:30px;background-color:rgb(106, 169, 233);text-align: center;font-size: larger;top:3px"
                                                                    data-bit="iit"><p style="font-weight: bolder;padding-top:5px;margin:0">${user_name_from[0]}</p></div>
        
                                                            </td>
                                                            <td class="m_-2668785316594404536phenom-details"
                                                                style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                                                valign="top" align="left">
                                                                <strong>${user_name_from}</strong> ${operation} ${element} <a href="http://127.0.0.1:3000/${element}/${element_id}">${element_name}</a> en <a href="http://127.0.0.1:3000/${into_type}/${into_id}">${into_name}</a> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="m_-2668785316594404536trello-block m_-2668785316594404536trello-block--blog-post"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
                                                <p
                                                    style="color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center">
                                                    <a href="https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source=alert-email&amp;utm_medium=email&amp;utm_campaign=trello-es_thank_you"
                                                        style="color:#0079bf;text-decoration:underline;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif"
                                                        target="_blank"
                                                        data-saferedirecturl="https://www.google.com/url?q=https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source%3Dalert-email%26utm_medium%3Demail%26utm_campaign%3Dtrello-es_thank_you&amp;source=gmail&amp;ust=1671272600454000&amp;usg=AOvVaw30IR0Olp-6bsX55BNT07P5"><img
                                                            data-emoji="🙌" class="an1" alt="🙌" aria-label="🙌"
                                                            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f64c/72.png"
                                                            loading="lazy"> 5 maneras de dar las gracias en el trabajo</a>
                                                </p>
                                            </div>
        
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td valign="top" align="center"
                                            style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                            <span>Has recibido este mensaje de parte de quaTrello</span><br>
                                        </td>
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
                        </center>
                    </td>
                </tr>
            </tbody>
        </table>
            </body>
          </html>`
    };
    var info_email;
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
        console.log(info.accepted)
      }
      info_email = info
    });
    return info_email
  },
  notification_workspace: async (user_email_to, user_name_from, operation, element, element_name, element_id, into_name, into_id, into_type) => {
    var mailOptions = {
      from: 'quatrellothebridge@gmail.com',
      to: user_email_to,
      subject: 'Actividad reciente',
      text: "",
      html: `<!doctype html>
          <html ⚡4email>
            <head>
              <meta charset="utf-8">
            </head>
            <body>
            <table class="m_-2668785316594404536body"
            style="border-spacing:0;border-collapse:collapse;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;height:100%;width:100%"
            width="100%" height="100%" valign="top" align="left">
            <tbody>
                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                    <td class="m_-2668785316594404536center" align="center" valign="top"
                        style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center;border-collapse:collapse">
                        <center style="width:100%">
                            <table class="m_-2668785316594404536trello-block"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">$
        
                                                <img class="m_-2668785316594404536header-logo-image m_-2668785316594404536center CToWUd"
                                                    height="25" width="122"
                                                    src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gP_zj73rBAue_7cECWNwzE9gNSSP6JKY6bE4frxsBv4wcGzXi0JrGFJ3cPRi2l-i_p6PGSyU3F2DJH1hDKfBnBwVTWa=w1920-h902"
                                                    alt="Logotipo de quaTrello" title="Logotipo de quaTrello"
                                                    style="outline:none;text-decoration:none;height:25px;max-height:25px;max-width:122px;width:122px;display:block;margin:0 auto;float:none">
        
                                            </div>
        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
        
                            <table class="m_-2668785316594404536trello-block"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;padding:16px 0;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
        
                                                <h6
                                                    style="color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;line-height:1.3;word-break:normal;margin-bottom:12px;font-size:20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif">
                                                    Aquí tienes lo que te has perdido…</h6>
        
                                                <table width="100%" class="m_-2668785316594404536phenom"
                                                    style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;margin:12px 0;float:left;clear:both"
                                                    valign="top" align="left">
                                                    <tbody>
                                                        <tr style="padding:0;vertical-align:top;text-align:left"
                                                            valign="top" align="left">
        
                                                            <td class="m_-2668785316594404536phenom-creator"
                                                                style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;width:38px;border-collapse:collapse"
                                                                width="38" valign="top" align="left"> <div
                                                                    class="m_-2668785316594404536phenom-creator-avatar CToWUd"
                                                                    height="30" width="30"
                                                                    style="outline:none;text-decoration:none;max-width:100%;border-radius:50%;height:30px;width:30px;background-color:rgb(106, 169, 233);text-align: center;font-size: larger;top:3px"
                                                                    data-bit="iit"><p style="font-weight: bolder;padding-top:5px;margin:0">${user_name_from[0]}</p></div>
        
                                                            </td>
                                                            <td class="m_-2668785316594404536phenom-details"
                                                                style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                                                valign="top" align="left">
                                                                <strong>${user_name_from}</strong> ${operation} ${element} <a href="http://127.0.0.1:3000/${element}/${element_id}">${element_name}</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="m_-2668785316594404536trello-block m_-2668785316594404536trello-block--blog-post"
                                style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                width="100%" valign="top" align="inherit">
                                <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                            valign="top" align="left">
        
                                            <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
                                                <p
                                                    style="color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center">
                                                    <a href="https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source=alert-email&amp;utm_medium=email&amp;utm_campaign=trello-es_thank_you"
                                                        style="color:#0079bf;text-decoration:underline;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif"
                                                        target="_blank"
                                                        data-saferedirecturl="https://www.google.com/url?q=https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source%3Dalert-email%26utm_medium%3Demail%26utm_campaign%3Dtrello-es_thank_you&amp;source=gmail&amp;ust=1671272600454000&amp;usg=AOvVaw30IR0Olp-6bsX55BNT07P5"><img
                                                            data-emoji="🙌" class="an1" alt="🙌" aria-label="🙌"
                                                            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f64c/72.png"
                                                            loading="lazy"> 5 maneras de dar las gracias en el trabajo</a>
                                                </p>
                                            </div>
        
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td valign="top" align="center"
                                            style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                            <span>Has recibido este mensaje de parte de quaTrello</span><br>
                                        </td>
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
                        </center>
                    </td>
                </tr>
            </tbody>
        </table>
            </body>
          </html>`
    };
    var info_email;
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
        console.log(info.accepted)
      }
      info_email = info
    });
    return info_email
  },
   comment: async (user_email_to, user_name_from,text_, element_name, element_id) => {
    var mailOptions = {
      from: 'quatrellothebridge@gmail.com',
      to: user_email_to,
      subject: 'Actividad reciente',
      text: "",
      html: `<!doctype html>
      <html ⚡4email>
      
      <head>
          <meta charset="utf-8">
      </head>
      
      <body>
          <table class="m_-2668785316594404536body"
              style="border-spacing:0;border-collapse:collapse;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;height:100%;width:100%"
              width="100%" height="100%" valign="top" align="left">
              <tbody>
                  <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                      <td class="m_-2668785316594404536center" align="center" valign="top"
                          style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center;border-collapse:collapse">
                          <center style="width:100%">
                              <table class="m_-2668785316594404536trello-block"
                                  style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                  width="100%" valign="top" align="inherit">
                                  <tbody>
                                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                              valign="top" align="left">
      
                                              <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                  style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">$
      
                                                  <img class="m_-2668785316594404536header-logo-image m_-2668785316594404536center CToWUd"
                                                      height="25" width="122"
                                                      src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gP_zj73rBAue_7cECWNwzE9gNSSP6JKY6bE4frxsBv4wcGzXi0JrGFJ3cPRi2l-i_p6PGSyU3F2DJH1hDKfBnBwVTWa=w1920-h902"
                                                      alt="Logotipo de quaTrello" title="Logotipo de quaTrello"
                                                      style="outline:none;text-decoration:none;height:25px;max-height:25px;max-width:122px;width:122px;display:block;margin:0 auto;float:none">
      
                                              </div>
      
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
      
                              <table class="m_-2668785316594404536trello-block"
                                  style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                  width="100%" valign="top" align="inherit">
                                  <tbody>
                                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;padding:16px 0;border-collapse:collapse"
                                              valign="top" align="left">
      
                                              <div class="m_-2668785316594404536trello-block-single-column"
                                                  style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
      
                                                  <h6
                                                      style="color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;line-height:1.3;word-break:normal;margin-bottom:12px;font-size:20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif">
                                                      Aquí tienes lo que te has perdido…</h6>
      
                                                  <table width="100%" class="m_-2668785316594404536phenom"
                                                      style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;margin:12px 0;float:left;clear:both"
                                                      valign="top" align="left">
                                                      <tbody>
                                                          <tr style="padding:0;vertical-align:top;text-align:left"
                                                              valign="top" align="left">
      
                                                              <td class="m_-2668785316594404536phenom-creator"
                                                                  style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;width:38px;border-collapse:collapse"
                                                                  width="38" valign="top" align="left">
                                                                  <div class="m_-2668785316594404536phenom-creator-avatar CToWUd"
                                                                      height="30" width="30"
                                                                      style="outline:none;text-decoration:none;max-width:100%;border-radius:50%;height:30px;width:30px;background-color:rgb(106, 169, 233);text-align: center;font-size: larger;top:3px"
                                                                      data-bit="iit">
                                                                      <p style="font-weight: bolder;padding-top:5px;margin:0">
                                                                          ${user_name_from[0]}</p>
                                                                  </div>
      
                                                              </td>
                                                              <td class="m_-2668785316594404536phenom-details"
                                                                  style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                                                  valign="top" align="left">
                                                                  <strong>${user_name_from}</strong> ha comentado la tarjeta
                                                                  <a
                                                                      href="http://127.0.0.1:3000/card/${element_id}">${element_name}</a>
                                                              </td>
                                                          </tr>
                                                          <tr>
                                                              <td></td>
                                                              <td>
                                                                  <div class="m_-7180664023763741109phenom-details-comment" style="background-color:#fff;border:1px solid #c1c7d0;border-radius:3px;display:block;margin:6px 0;padding:10px 12px 0 12px"> <p>${text_}</p>
      
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                              <table class="m_-2668785316594404536trello-block m_-2668785316594404536trello-block--blog-post"
                                  style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;text-align:inherit"
                                  width="100%" valign="top" align="inherit">
                                  <tbody>
                                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#172b4d;font-weight:normal;padding:0;margin:0;text-align:left;font-size:14px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;border-collapse:collapse"
                                              valign="top" align="left">
      
                                              <div class="m_-2668785316594404536trello-block-single-column m_-2668785316594404536center"
                                                  style="display:block;margin:0 auto;max-width:580px;padding:12px 16px">
                                                  <p
                                                      style="color:#172b4d;font-weight:normal;padding:0;margin:0;font-size:14px;line-height:19px;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;text-align:center">
                                                      <a href="https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source=alert-email&amp;utm_medium=email&amp;utm_campaign=trello-es_thank_you"
                                                          style="color:#0079bf;text-decoration:underline;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif"
                                                          target="_blank"
                                                          data-saferedirecturl="https://www.google.com/url?q=https://blog.trello.com/es/como-dar-las-gracias-en-el-trabajo?utm_source%3Dalert-email%26utm_medium%3Demail%26utm_campaign%3Dtrello-es_thank_you&amp;source=gmail&amp;ust=1671272600454000&amp;usg=AOvVaw30IR0Olp-6bsX55BNT07P5"><img
                                                              data-emoji="🙌" class="an1" alt="🙌" aria-label="🙌"
                                                              src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f64c/72.png"
                                                              loading="lazy"> 5 maneras de dar las gracias en el trabajo</a>
                                                  </p>
                                              </div>
      
                                          </td>
                                      </tr>
                                  </tbody>
                                  <tbody>
                                      <tr>
                                          <td valign="top" align="center"
                                              style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                              <span>Has recibido este mensaje de parte de quaTrello</span><br>
                                          </td>
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
                          </center>
                      </td>
                  </tr>
              </tbody>
          </table>
      </body>
      
      </html>`
    };
    var info_email;
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
        console.log(info.accepted)
      }
      info_email = info
    });
    return info_email
  },
};

module.exports = email;



