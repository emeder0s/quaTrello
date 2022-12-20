import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

const CheckLogin = () => {

    const cookies = new Cookies();
    const checkLogin = cookies.get('session')
    console.log(checkLogin)
    if (!checkLogin) {
        return (
            <Navigate to='/registro' replace={true} />
        )
    }

    return (
        <Navigate to='/home' replace={true} />
    )
}

export default CheckLogin
