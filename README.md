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
| `DELETE` | `/delete-workspace` | Borra un workspace | { "id": "id del workspace a eliminar" } | boolean - true (si todo va bien)/false(si algo falta) |
| `GET` | `/get-workspaces-by-user` | Devuelve todos los workspace (y los sus boards) del usuario logueado  | - |  json (array de workspace)  |
| `GET` | `/update-last-access` |Actualiza la fecha de acceso  | id: del wokspace a modificar |  boolean  |

### Controlador de boards
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insert-board` | Crea un nuevo tablero | { name_:"Nombre del tablero", visibility:"Private, Workspace o Public", configuration:"{}", fk_id_workspace:"id"}   | boolean o error |
| `GET` | `/show-board/:id` | devuelve un tablero por ID | /show-board/3 | {"id":3,"name_":"Board 3","visibility":"privado","configuration":"{}","fk_id_workspace":2,"fk_id_user":3} |
| `GET` | `/show-boardByWs/:workspace` | devuelve un tablero por workspace | /show-boardByWs/2 | [{"id":3,"name_":"Board 3","visibility":"privado","configuration":"{}","fk_id_workspace":2,"fk_id_user":3}] |
| `POST` | `/update-board` | Actualiza la informacion de un tablero | req.body = { id, name_, visibility, configuration }   | boolean o error |
| `DELETE` | `/delete-board` | Borra un tablero por su ID | req.body = { id }| boolean |

### Controlador de lists
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/lists/:board` | Devuelve todas las listas que contiene un tablero | board = req.params.board   |  |
| `POST` | `/insert-list` |  Inserta una lista en un tablero | { name_: de la lista,  fk_id_board: el id del board al que pertenece }  | boolean |
| `POST` | `/update-list` | Actualiza una lista. El id se pasa en el body | { id: identificador de la lista a editar , name_: nombre de la lista }  | boolean |
| `DELETE` | `/delete-list` | Borra una lista. El id se pasa en el body | { id: de la lista a boorar }  | boolean  |

### Controlador de cards
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/cards/:list` | Devuelve todas las tarjetas que contiene una list | list = req.params.list   |  un array con todas las card de esa lista. Ej:[{"id": 6,"title": "una tarjeta","description_": null,"checklist": null,"configuration": null,"date_": null,"fk_id_list": 1}] |
| `POST` | `/insert-card` |  Inserta una card en una lista | { title: el título de la tarjeta,  fk_id_list: el id de la lista donde está }  | json con los datos de la tarjeta creada (si todo va bien)/ false (si falla) |
| `POST` | `/update-card` | Actualiza una tarjeta. El id se pasa en el body | { id: identificador de la tarjeta a editar , title: título de tarjeta, description_:descripción de la tarjeta, checklist_ la checklist con sus campos, configuration_ la configuración con sus campos, date_: la fecha en la que tiene que estar la tarjeta termianda}  | boolean (true si todo va bien, falso si algo falla) |
| `DELETE` | `/delete-card` | Borra una tarjeta. El id se pasa en el body | { id: de la tarjeta a borrar }  | boolean (true si todo va bien, falso si algo falla) |
| `GET`| `/cards/:list`| Devuelve todas las tarjetas de una lista | req.params.list | todas las tarjetas de una lista (si todo va bien)/ false (si algo falla) |

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

### Controlador de user-board (usuarios de un tablón)
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insertUserBoard` |  Inserta un registro en la tabla "user_boards" de la base de datos. | ```{ role_: "admin", fk_id_board: 3, fk_id_user: 8 }```  | el registro que se ha insertado o el error que se haya producido. |
| `POST` | `/rolUserSesionBoard` | Muestra el rol del usuario que tiene la sesion iniciada en un board cuyo id se pasa en el body de la petición. |``` { fk_id_board: "id_board" } ``` |  |
| `POST` | `/getUsersBoard` |Muestra todos los usuarios que estan en el tablero junto con su rol en ese tablero. |``` { fk_id_board: "id_board" } ``` |  |
| `POST` | `/updateRolBoard` | Actualiza el rol de un usuario en un board cuyo id se pasa en el body de la petición|``` { id: "id...", role_:"nuevo rol" } ``` | |
| `POST` | `/deleteUserFromBoard` | Elimina un registro en la tabla "user_board" de la base de datos cuyo id se pasa en el body de la petición.|``` { id: "id..." } ``` |  |

### Controlador de user-card (usuarios de una tarjeta)
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insertUserCard` |  Inserta un registro en la tabla "user_cards" de la base de datos. | ```{ fk_id_card: 3, fk_id_user: 8 }```  | el registro que se ha insertado o el error que se haya producido. |
| `POST` | `/getUsersCard` |Muestra todos los usuarios que estan en una tarjeta junto con el estado de sus notificaciones en la tarjeta. |``` { fk_id_card: "id_card" } ``` |  |
| `POST` | `/updateCardNotifications` | Actualiza el estado de las notificaciones de un usuario en un card cuyo id se pasa en el body de la petición|``` { id: "id...", notifications: 1 } ``` | |
| `POST` | `/deleteUserFromCard` | Elimina un registro en la tabla "user_card" de la base de datos cuyo id se pasa en el body de la petición.|``` { id: "id..." } ``` |  |

