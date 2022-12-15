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

