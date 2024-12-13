import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { BsFire } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineMusicNote } from "react-icons/md";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { IoIosRadio } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa6";
import { SiYoutubekids } from "react-icons/si";
import { HAMBURGER_MENUE } from '../utils/Helper';
import { toggleMenue } from '../utils/redux/slices/AppSlice';
import logo from "../static/yt_logo_rgb_light.png"

const Sidebar = () => {
    const dispatch = useDispatch()
    const toggleMenueHandler = () => {
        dispatch(toggleMenue())
    }

    const isMenueOpen = useSelector(store => store.app.isMenueOpen)
    // console.log(isMenueOpen)
    if (!isMenueOpen) return null
    return (
        <div>
            <div className='h-full w-[220px] bg-gray-100 shadow-lg overflow-y-auto fixed z-20 p-3'>
                <div className='flex col-span-1'>
                    <img className='h-7 cursor-pointer' src={HAMBURGER_MENUE} alt="HAMBURGER_MENUE" onClick={() => toggleMenueHandler()} />

                    <a href='/'>
                        <img className='h-7 mx-4' src={logo} alt="logo" />
                    </a>
                </div>
                <div className='my-5'>


                    <ul className='m-2 '>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <IoMdHome size={20} /> <span>Home</span>
                            </Link>
                        </li>

                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <SiYoutubeshorts size={20} /> <span>Shorts</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <MdOutlineSubscriptions size={20} /> <span>Subscription</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />

                    <ul className='m-2 '>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <CiYoutube size={20} /> <span>You</span>
                            </Link>
                        </li>

                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <GoHistory size={20} /> <span>History</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <h2 className='mx-2 p-2 text-lg font-semibold'>Explore</h2>

                    <ul className='m-2 '>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <BsFire size={20} /> <span>Trending</span>
                            </Link>
                        </li>

                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <AiOutlineShopping size={20} /> <span>Shopping</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <MdOutlineMusicNote size={20} /> <span>Music</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <PiFilmSlateDuotone size={20} /> <span>Film</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <IoIosRadio size={20} /> <span>Live</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <FaGamepad size={20} /> <span>Gameing</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <BiNews size={20} /> <span>News</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <TfiCup size={20} /> <span>Sports</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <TfiCup size={20} /> <span>Courses</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <FaRegLightbulb size={20} /> <span>Fashion & Beauty</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <FaPodcast size={20} /> <span>Podcast</span>
                            </Link>
                        </li>
                    </ul>

                    <hr />
                    <h2 className='mx-2 p-2 text-lg font-semibold'>More from you tube</h2>

                    <ul className='m-2 '>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <BsFire size={20} /> <span>YouTube Premium</span>
                            </Link>
                        </li>

                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <AiOutlineShopping size={20} /> <span>YouTube Music</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <SiYoutubekids size={20} /> <span>YouTube Kids</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <ul className='m-2 '>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <BsFire size={20} /> <span>Setting</span>
                            </Link>
                        </li>

                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <AiOutlineShopping size={20} /> <span>Report History</span>
                            </Link>
                        </li>
                        <li className="p-2  hover:bg-gray-200 rounded-lg flex items-center ">
                            <Link to={`/`} className="flex items-center space-x-2 ">
                                <SiYoutubekids size={20} /> <span>Help</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
