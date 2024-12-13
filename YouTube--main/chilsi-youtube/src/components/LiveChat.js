import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/redux/slices/ChatSlice'
import { generate, randamMessage } from '../utils/Helper'
const LiveChat = () => {
    const dispatch = useDispatch()
    const chatMessage = useSelector((store) => store.chat.messages)

    const [liveMessage, setLiveMessage] = useState("")

    useEffect(() => {

        const i = setInterval(() => {
            // console.log("API Polling")
            dispatch(addMessage({
                name: generate(),
                message: randamMessage(20) + ' 🚀'
            }))

        }, 1500)

        return () => clearInterval(i)
    }, [])

    return (
        <div>
            <div className='border p-2 border-black ml-2 h-[480px] bg-slate-100 rounded overflow-y-scroll flex flex-col-reverse m-2'>
                {chatMessage.map((c, index) => <ChatMessages key={index} name={c.name} message={c.message} />)}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()

                dispatch(addMessage({
                    name: "Jhon Deo",
                    message: liveMessage
                }))
                setLiveMessage("")
                // console.log("Data on submit", liveMessage)
            }} className='w-100 p-2 m-2 border border-black rounded'>
                <input type="text"
                    className="border border-s-0 border-t-0  border-e-0  w-[280px] p-2 border-b-black " name='' value={liveMessage} onChange={(e) => {
                        setLiveMessage(e.target.value)
                    }} id="" />
                <button className='border bg-black text-white p-1 rounded '>Submit</button>
            </form>
        </div>
    )
}

export default LiveChat
