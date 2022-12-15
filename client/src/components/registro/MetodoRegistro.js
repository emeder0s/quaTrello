import React from 'react'

export const MetodoRegistro = ({email, setEmail, setDisplay}) => {

    const confirmEmail = e => {
        e.preventDefault();
        var userEmail = e.target.email.value;
        console.log(userEmail)
        setEmail(userEmail)
        setDisplay("first")
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
    <a href=''>¿Ya tiene una cuenta? Iniciar sesión</a>
</div>
        </div>
    )
}

