import React from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import Cookies from 'universal-cookie';

export const Login = () => {

    const cookies = new Cookies();
    const sendLogin = async e => {
        e.preventDefault();

        var user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        };
        const res = await defaultFetch("http://localhost:5000/login", "POST", user)
        console.log(res);
        (res) ? console.log("Correcto, espera que hagamos algo más y te mandamos allí") : console.log("Te has colado")
            (res) ? cookies.set('session', res.jwt, { path: '/' }) : console.log("No se sube la cookie")
    }

    return (
        <div>
            <div className='registro'>
                <form onSubmit={sendLogin}>
                    <p>Login</p>
                    <input type="email" name='email' placeholder='Correo electrónico' required></input>
                    <br />
                    <input type="password" name='pass' required></input>
                    <br />
                    <button type="submit">Regístrate es gratuito</button>
                </form>
            </div>
        </div>
    )
}
