# quaTrello
### Controlador de users

| Tipo de petición | End Point | Descripción   | req.body | res |
| :-------- | :------- | :------------------------- | :----- | :-------- |
| `POST` | `/insert-user` | Inserta un registro en la tabla users de la base de datos y encripta la contraseña| { }  | el usuario que se ha insertado o el error que se haya producido |
