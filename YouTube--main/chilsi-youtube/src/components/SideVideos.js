import React, { useEffect, useState } from 'react'
import { SIDE_YOUTUBE_API_URL } from '../utils/Constants'
import SideVideoCard from './SideVideoCard'

const SideVideos = () => {
    const [data, setData] = useState([])

    const handleFecth = async () => {
        try {
            const res = await fetch(SIDE_YOUTUBE_API_URL)
            const json = await res.json()
            const data = json?.items
            setData(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleFecth()
    }, [])

    return (
        <div className='border p-1 ms-2'>
            {data && data?.map((data) => (

                <SideVideoCard data={data} />
            ))}
        </div>
    )
}

export default SideVideos
