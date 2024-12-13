import React from 'react'
import { DEFAULT_USER } from '../utils/Helper'

const ChatMessages = ({ name, message }) => {
    return (
        <div className='flex items-center m-2 p-1 shadow-sm'>
            <img className='h-7' src={DEFAULT_USER} alt="" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessages
