import React, { useState } from 'react'
import { Boards } from '../Boards/Boards'
import AddWorkSpace from './AddWorkSpace'
import { SideMenu } from './SideMenu'

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <div className='home'>
            <SideMenu setIsFormOpen={setIsFormOpen} />
            <Boards />
            {isFormOpen && <AddWorkSpace setIsFormOpen={setIsFormOpen} />}
        </div>
    )
}

export default Home
