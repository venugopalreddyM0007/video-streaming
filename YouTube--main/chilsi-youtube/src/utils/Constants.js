export const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;



// export const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=programming&type=video&key=${GOOGLE_API_KEY}
// `

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const SIDE_YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=programming&type=video&key=${GOOGLE_API_KEY}`








