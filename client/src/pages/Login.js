import React from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import Cookies from 'universal-cookie';
import {useNavigate } from 'react-router-dom'

export const Login = () => {

    const cookies = new Cookies();
    const navigate = useNavigate();
    const sendLogin = async e => {
        e.preventDefault();

        var user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        };
        await defaultFetch("http://localhost:5000/login", "POST", user).then((res) => {
            (res) ? cookies.set('session', res.jwt, { path: '/' }) : console.log("No hay respuesta");
            localStorage.setItem("user", JSON.stringify(res.user));
            navigate("/home")
        });
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
