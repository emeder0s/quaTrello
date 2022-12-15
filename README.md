# quaTrello

### Controlador de users
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insert-user` | Inserta un registro en la tabla users de la base de datos y encripta la contraseña| { }  | el usuario que se ha insertado o el error que se haya producido |
| `POST` | `/confirmEmail` | | { }  |  |
| `POST` | `/update-user` | | { }  | |
| `POST` | `/login` | | { }  |  |
| `POST` | `/passToEmail` | | { }  | |
| `POST` | `/resetPass/:token` | | { }  | |
| `POST` | `/searchUser` | | { }  |  |
| `DELETE` | `/delete-user` | | { }  |  |
| `GET` | `/logout` | | { }  |  |

### Controlador de workspaces
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/all-workspaces` | | { }  | |
| `POST` | `/insert-workspace` | | { }  |  |
| `GET` | `/show-workspace/:id` | | { }  | |
| `POST` | `/update-workspace` | | { }  |  |
| `DELETE` | `/delete-workspace` | | { }  |  |
| `GET` | `/get-workspaces-by-user` | | { }  |  |

### Controlador de boards
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/all-boards` | | { }  | |
| `POST` | `/insert-board` | | { }  |  |
| `GET` | `/show-board/:id` | | { }  | |
| `POST` | `/update-board` | | { }  |  |
| `DELETE` | `/delete-board` | | { }  |  |

### Controlador de lists
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `GET` | `/all-lists` | | { }  | |
| `POST` | `/insert-list` | | { }  |  |
| `POST` | `/update-list` | | { }  |  |
| `DELETE` | `/delete-list` | | { }  |  |

### Controlador de messages
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insertmessage` | | { }  | |
| `POST` | `/getmessages` | | { }  |  |

### Controlador de activities
| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/getactivities` | | { }  |  |
| `POST` | `/insertactivities` | | { }  |  |
| `POST` | `/updateactivities` | | { }  |  |
| `POST` | `/deleteactivities` | | { }  |  |

