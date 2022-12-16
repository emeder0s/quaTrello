import React, { useState } from 'react'
import InvisibleAside from './InvisibleAside'
import VisibleAside from './VisibleAside'

const AsideBoard = () => {

    const [isAsideVisible, setisAsideVisible] = useState(false)

    return (
        <div className='asideBoard'>
            {!isAsideVisible
                ? <InvisibleAside setisAsideVisible={setisAsideVisible} />
                : <VisibleAside setisAsideVisible={setisAsideVisible} />
            }
        </div>
    )
}

export default AsideBoard
