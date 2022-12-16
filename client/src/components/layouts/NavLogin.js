import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavLogin = () => {
    return (
        <div>
            <nav className='nav-login'>
                <div>
                    <button className='login-button'><img className='nav-login-logo' src={require('./quaTrello_logo.png')} alt="quaTrello logo" />
                        quaTrello</button>
                </div>
                <div>
                    <NavLink to='/login' className="login-link">Log in</NavLink>
                </div>
            </nav>
        </div>
    )
}
