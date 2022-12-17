# quaTrello

### Controlador de users
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------------- | :------- | :-------- |
| `POST` | `/insert-user` | Inserta un registro en la tabla users de la base de datos y encripta la contraseña | {"jwt":"jwt, viene en params del email de registro","full_name":"Nombre completo","pass":"1234"} | {"id": 1,"email": "email@email.com","full_name": "Nombre completo","pass": "encrypted pass","avatar": "1","configuration": "{}"} |
| `POST` | `/confirmEmail` | Envia al email un enlace de acceso al registro. |{"email":"email@email.com"} | "Email enviado a email@email.com" |
| `POST` | `/update-user` | Actualiza un usuario | {"full_name":"Nombre Completo", "bio":"Lorem ipsum" } | "Actualización correcta" o error |
| `GET` | `/setAvatar/:avatar` | Actualiza avatar de un usuario | avatar = req.params.avatar | "Actualización correcta" o error |
| `POST` | `/login` | Comprueba email y contraseña de usuario para iniciar sesion, al comprobar que es correcto inserta una cookie en el navegador. |{"email":"email@email.com","pass":"1234"} | boolean |
| `POST` | `/passToEmail` | Devuelve un Json Web Token que contiene la dirección de email del usuario para comprobar la identidad al cambiar la contraseña. | {"email":"email@email.com" }  |"Email enviado a email@email.com" o "La dirección de email no se encuentra en la base de datos"|
| `POST` | `/resetPass/:token` | Verifica la validez del json web token, recoge la nueva contraseña introducida por el usuario y la actualiza en la base de datos. | body: {"password":"password"} params: token | "Contraseña actualizada" o error |
| `POST` | `/searchUser` | Devuelve una lista de usuarios que coincidan con la busqueda. Admite tanto Nombre de usuario como e-mail.| {"user":"Nombre o email"} | [{"id": 1,"email": "email@email.com","full_name": "Nombre completo","bio": "","pass": "encrypted pass","avatar": "1","configuration": "{}"}] |
| `POST` | `/delete-user` | Borra a un usuario de la base de datos. Para realizar esta operación el usuario debe confirmar su identidad introduciendo sus credenciales.| {"pass":"1234"} | "usuario borrado", "no existe el usuario", "La contraseña no coincide" |


### Controlador de workspaces
| Tipo de petición | End Point | Descripción   | req.body/req.params | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/all-workspaces` | Devuelve todos los workspaces | { }  | |
| `POST` | `/insert-workspace` | Inserta un workspace | { "name_":"Nombre del Workspace", "visibility":"public/private", "configuration":"la configuracion en un JSON" }  | true (si todo va bien)/false(si algo fallta)/json{msn: "Existe con ese nombre"} |
| `GET` | `/show-workspace/:id` | Devuelve los datos de un workspace | {"id":"el id del workspace a mostrar" } | json (con los datos del workspace) |
| `POST` | `/update-workspace` | Modifica los datos de un workspace | { "id":"id del workspace a modificar", "name_":"name del workspace", "visibility":"public/private", "configuration":"la configuracion de un ws" }  |  |
| `DELETE` | `/delete-workspace` | Borra un workspace | { "id": "id del workspace a eliminar" } | boolean - true (si todo va bien)/false(si algo fallta) |
| `GET` | `/get-workspaces-by-user` | Devuelve todos los workspace (y los sus boards) del usuario logueado  |  |  json (array de workspace)  |

### Controlador de boards
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/all-boards` | | { }  | |
| `POST` | `/insert-board` | | { "background": "Color o imagen de fondo", "board_title": "Nombre de tablero", "ws_name": "Nombre del Workspace, "visibility": "Private, Workspace o Public" }  |  |
| `GET` | `/show-board/:id` | | { }  | |
| `POST` | `/update-board` | | { }  |  |
| `DELETE` | `/delete-board` | | { }  |  |

### Controlador de lists
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/lists/:board` | Devuelve todas las listas que contiene un tablero | board = req.params.board   |  |
| `POST` | `/insert-list` | | { }  |  |
| `POST` | `/update-list` | | { }  |  |
| `DELETE` | `/delete-list` | | { }  |  |

### Controlador de messages
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insertmessage` | Inserta un registro en la tabla "messages" de la base de datos. | ```{ text_: "texto...", fk_id_board: "id_board" }```  | el mensaje que se ha insertado o el error que se haya producido. |
| `POST` | `/getmessages` | Muestra todos los mensajes del chat perteneciente al board cuyo id se pasa en el body de la peticion.|``` { fk_id_board: "id_board" } ``` | todos los mensajes del chat o el error que se haya producido. |

### Controlador de activities
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insertactivities` | Inserta un registro en la tabla "activities" de la base de datos. |``` {text_: "texto...", fk_id_card: "id_card" } ``` | la activitie que se haya insertado o el error que se haya producido  |
| `POST` | `/getactivities` | Muestra todos los comentarios escritos en la "card" cuyo id se pasa en el body de la peticion. |``` {fk_id_card: "id_card"} ```| Todos los comentarios de una card o el error que se haya producido. |
| `POST` | `/updateactivities` | Actualiza el texto de un comentario cuyo id se pasa en el body de la peticion.|``` { text_: "nuevo texto...", id: "id..."} ```| El id del comentario editado o el error que se haya producido. |
| `POST` | `/deleteactivities` | Elimina un registro en la tabla "activities" de la base de datos cuyo id se pasa en el body de la peticion.|``` { id: "id..." } ```| El id del comentario eliminado o el error que se haya producido.  |

