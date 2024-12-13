import React from 'react'

const SideVideoCard = ({ data }) => {

    const snippet = data?.snippet
    const thumbnails = snippet?.thumbnails

    return (
        <div className='flex gap-4 bg-slate-200 p-2 my-1 rounded'>
            <img
                className=' w-40 rounded'
                src={thumbnails?.medium?.url
                } alt="" />
            <div>
                <p>{snippet?.title
                }</p>
                <p className='text-sm text-gray-500'>{snippet?.channelTitle}</p>
            </div>

        </div>
    )
}

export default SideVideoCard
