import React, { useEffect, useState } from 'react'
import { DEFAULT_USER, HAMBURGER_MENUE } from '../utils/Helper'
import logo from "../static/yt_logo_rgb_light.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenue } from '../utils/redux/slices/AppSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/Constants'
import { cacheResult } from '../utils/redux/slices/SearchSlice'
import { MdKeyboardVoice } from "react-icons/md";

const Header = () => {
    const dispatch = useDispatch()
    const toggleMenueHandler = () => {
        dispatch(toggleMenue())
    }
    const searchCache = useSelector(store => store.search)

    const [searchQuery, setSearchQuery] = useState("")
    const [searchSuggestion, setSearchSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
            } else {
                getSearchSuggestion()
            }
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestion = async () => {
        // console.log(searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSearchSuggestion(json[1])
        // console.log(json) 
        dispatch(cacheResult({ [searchQuery]: json[1] }))
    }
    return (

        <div className='grid grid-flow-col p-3 top-0 z-10 bg-white bg-opacity-95 fixed w-full'>

            <div className='flex col-span-1'>
                <img className='h-7 cursor-pointer' src={HAMBURGER_MENUE} alt="HAMBURGER_MENUE" onClick={() => toggleMenueHandler()} />

                <a href='/'>
                    <img className='h-7 mx-4' src={logo} alt="logo" />
                </a>
            </div>

            <div className='col-span-12 ps-32  px-20'>
                <div>
                    <input
                        className='border border-grey w-1/2 rounded-s-3xl px-4 py-2 text-black' type="text"
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border border-grey bg-gray-200 px-5 py-2 p rounded-e-3xl'>🔍</button>
                </div>

                {showSuggestion &&
                    (<div className='fixed bg-white py-1 px-1 w-[28rem] shadow-md rounded-lg border border-gray-100 z-50'>

                        <ul>

                            {(searchSuggestion.map((s, index) => (
                                <li
                                    key={index} className='px-1 py-1 rounded-md hover:bg-gray-100'>
                                    🔍 {s}
                                </li>
                            )))}

                        </ul>

                    </div>)
                }

            </div>

            <div className='col-span-1 '>
                <img className='h-7' src={DEFAULT_USER} alt="" />
            </div>
        </div>

    )
}

export default Header
