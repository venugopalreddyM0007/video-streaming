import React from 'react'
import { useSelector } from 'react-redux';
const getTimeAgo = (date) => {
    const publishedDate = new Date(date);
    const today = new Date();

    const yearDiff = today.getFullYear() - publishedDate.getFullYear();
    const monthDiff = today.getMonth() - publishedDate.getMonth();
    const dayDiff = today.getDate() - publishedDate.getDate();

    if (yearDiff > 0) {
        return yearDiff === 1 ? '1y ago' : `${yearDiff}y ago`;
    }

    if (monthDiff > 0) {
        return monthDiff === 1 ? '1m ago' : `${monthDiff}m ago`;
    }

    if (dayDiff > 0) {
        return dayDiff === 1 ? '1d ago' : `${dayDiff}d ago`;
    }

    return 'Today'; // If published today
};


const VideoCard = ({ info }) => {
    // console.log("info", info)

    const snippet = info?.snippet;
    const statistics = info?.statistics
    const isMenueOpen = useSelector(store => store.app.isMenueOpen)
    if (!info) return

    return (

        <div className={' m-2  ' + `${isMenueOpen ? "w-[380px] h-76" : "w-[330px] h-76"}`} >
            <img
                className={'' + `${isMenueOpen ? "w-[380px] rounded-lg" : "w-full rounded-lg"}`}
                src={snippet?.thumbnails?.medium?.url}
                alt="videoimgae" />
            <ul className='ml-4'>
                <li className='font-semibold py-2 text-wrap'>{snippet?.title?.length > 50
                    ? snippet.title.slice(0, 50) + "..."
                    : snippet?.title}</li>
                <li className='text-sm text-gray-800'>{snippet?.channelTitle}</li>
                <li className='text-sm text-gray-800 pb-2'> {statistics?.viewCount
                    ? statistics.viewCount >= 1000000
                        ? `${(statistics.viewCount / 1000000).toFixed(1)}M views`
                        : statistics.viewCount >= 1000
                            ? `${(statistics.viewCount / 1000).toFixed(1)}k views`
                            : `${statistics.viewCount} views`
                    : '0 views'} <span>{getTimeAgo(snippet?.publishedAt)}</span></li>

            </ul>
        </div >


    )
}

export const AddVideoCard = ({ info }) => {
    if (!info) return
    return (
        <div className=''>
            <p className=' absolute rounded border bg-yellow-700 text-white m-3 p-2 '>Higher order component</p>
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard
