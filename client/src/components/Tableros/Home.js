import React, { useState } from 'react'
import AddWorkSpace from './AddWorkSpace'
import { SideMenu } from './SideMenu'

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <div className='home'>
            <SideMenu setIsFormOpen={setIsFormOpen} />
            {isFormOpen && <AddWorkSpace setIsFormOpen={setIsFormOpen} />}
        </div>
    )
}

export default Home
