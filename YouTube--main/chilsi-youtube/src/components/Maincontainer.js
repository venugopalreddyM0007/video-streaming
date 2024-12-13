import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const isMenueOpen = useSelector(store => store.app.isMenueOpen)

    return (
        <div className='w-full'>
            <div className={isMenueOpen ? "ms-[220px] " : ""}>
                <ButtonList />
            </div>
            <div className='mt-[68px]'>
                <VideoContainer />
            </div>
        </div >
    )
}

export default Maincontainer
