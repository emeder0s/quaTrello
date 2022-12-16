import React from 'react'
import { defaultFetch } from '../../helpers/defaultFetch';
import { Link } from 'react-router-dom';

export const MetodoRegistro = ({email, setEmail, setDisplay}) => {
    const confirmEmail = async e => {
        e.preventDefault();
        var userEmail = {email: e.target.email.value};
        console.log(userEmail)
        setEmail(userEmail)
        const res = await defaultFetch("http://localhost:5000/confirmEmail", "POST", userEmail);
        setDisplay("first")
            console.log(res);
        (res) ? console.log("Correcto, espera que hagamos algo más y te mandamos allí") : console.log("Te has colado")
   
      }

    return (
        <div>

<img src={require('../../img/quaTrello_logo.png')} alt="quaTrello logo" />

<div className='registro'>
    <form onSubmit={confirmEmail}>
    <h6>Regístrate para obtener tu cuenta</h6>
    <input type="email" placeholder={email} required name="email"></input>
    <br/>
    <input type="checkbox" name="newsletter"/>
    <p>Sí, deseo recibir noticias y ofertas de ApuShop acerca de productos, eventos, etc.</p>
    <button type='submit'>Registrarse</button>
    </form>
    <Link to='/login'>¿Ya tiene una cuenta? Iniciar sesión</Link>
</div>
        </div>
    )
}

