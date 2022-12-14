import React, { useState } from 'react'
import AddWorkSpace from './AddWorkSpace'
import { SideMenu } from './SideMenu'

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [home, setHome] = useState(true)

    return (
        <div className={home ? 'home' : 'homeDark'}>
            <SideMenu setIsFormOpen={setIsFormOpen} />
            {isFormOpen && <AddWorkSpace setIsFormOpen={setIsFormOpen} />}
        </div>
    )
}

export default Home
