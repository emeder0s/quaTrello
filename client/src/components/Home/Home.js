import React, { useState, useEffect } from 'react'
import { Boards } from './Boards/Boards'
import AddWorkSpace from './AddWorkSpace'
import { SideMenu } from './SideMenu'
import { useDispatch } from 'react-redux'
import { fetchBackgrounds } from '../../features/backgrounds/backgroundSlice'

const Home = () => {

    const [isFormOpen, setIsFormOpen] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBackgrounds())
    }, [])

    return (
        <div className='home'>
            <SideMenu setIsFormOpen={setIsFormOpen} />
            <Boards />
            {isFormOpen && <AddWorkSpace setIsFormOpen={setIsFormOpen} />}
        </div>
    )
}

export default Home
