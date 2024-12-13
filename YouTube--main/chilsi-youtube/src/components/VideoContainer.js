
// import React, { useEffect, useState } from 'react';
// import { headers, YOUTUBE_API_URL, GOOGLE_API_KEY } from '../utils/Constants';
// import VideoCard, { AddVideoCard } from './VideoCard';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Skeleton from './Skeleton';

// const VideoContainer = () => {
//     const [videos, setVideos] = useState([])
//     const [load, setLoad] = useState(true)
//     const [nextPageToken, setNextPageToken] = useState(null);
//     const [prevPageToken, setPrevPageToken] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             const fetchVideos = async () => {
//                 await getVideos();
//                 setLoad(false);
//             };
//             fetchVideos()
//         }, 2000)
//     }, [videos]);

//     const isMenueOpen = useSelector(store => store.app.isMenueOpen)

//     const getVideos = async () => {
//         try {
//             const response = await fetch(YOUTUBE_API_URL);
//             const data = await response.json();
//             setVideos(data?.items)
//             console.log(data)
//         } catch (error) {
//             console.error('Error fetching videos:', error);
//         }
//     };
//     // console.log(videos[0])
//     if (!videos) return
//     return (
//         <>
//             <div className={isMenueOpen ? "ms-[220px]" : ""}>

//                 <div className='flex flex-wrap justify-center w-full p-3  mt-32'>
//                     <AddVideoCard info={videos[32]} />
//                     {load ? (
//                         <div className='flex flex-wrap justify-center gap-2 '>
//                             {Array.from({ length: 200 }).map((_, index) => (
//                                 <Skeleton key={index} />
//                             ))}
//                         </div>
//                     ) : (
//                         <>
//                             {videos.length > 0 ? (
//                                 videos.map(video => (
//                                     <Link key={video?.id} to={`/watch?v=${video.id}`}>
//                                         <VideoCard info={video} />
//                                     </Link>
//                                 ))
//                             ) : (
//                                 <div>No videos available.</div>
//                             )}
//                         </>
//                     )}
//                 </div>

//             </div>

//         </>
//     );
// };

// export default VideoContainer;
import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL, GOOGLE_API_KEY } from '../utils/Constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from './Skeleton';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [load, setLoad] = useState(false);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const searchQuery = "songs,ipl,movie";

    const isMenueOpen = useSelector(store => store.app.isMenueOpen);

    const getVideos = async (pageToken = "") => {
        if (!hasMore) return;
        setLoad(true);
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`
            );
            const data = await response.json();
            console.log("data", data)
            const newVideos = data.items;
            const nextPage = data.nextPageToken;

            setVideos((prevVideos) => [...prevVideos, ...newVideos]);
            setNextPageToken(nextPage);
            setHasMore(!!nextPage);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
        setLoad(false);
    };


    useEffect(() => {
        getVideos();
    }, []);

    const handleScroll = () => {
        const scrollTop = window.innerHeight + document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;

        // Check if the user is near the bottom of the page
        if (scrollTop + 1 >= scrollHeight && !load && hasMore) {
            getVideos(nextPageToken);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [nextPageToken, load]);

    return (
        <>
            <div className={isMenueOpen ? "ms-[220px]" : ""}>
                <div className='flex flex-wrap justify-center w-full p-3 mt-32'>
                    {videos.length > 0 && <AddVideoCard info={videos[8]} />}
                    {load ? (
                        <div className='flex flex-wrap justify-center gap-2 '>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <Skeleton key={index} />
                            ))}
                        </div>
                    ) : (
                        <>
                            {videos.length > 0 ? (
                                videos.map((video, index) => (
                                    <Link
                                        key={video?.id?.videoId ? `${video?.id?.videoId}-${index}` : `video-${index}`}
                                        to={`/watch?v=${video?.id?.videoId}`}
                                    >
                                        <VideoCard info={video} />
                                    </Link>
                                ))
                            ) : (
                                <div>No videos available.</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default VideoContainer;



