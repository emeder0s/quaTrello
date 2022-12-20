import React from 'react'
import {FaGreaterThan} from 'react-icons/fa'

const InvisibleAside = ({ setisAsideVisible }) => {

    const arrow = '>'

    return (
        <aside onClick={e => setisAsideVisible(true)} className='invisibleAside'>
            <button><FaGreaterThan/></button>
        </aside>
    )
}

export default InvisibleAside
