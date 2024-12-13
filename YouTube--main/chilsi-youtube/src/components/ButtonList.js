import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonList = ["All", "JavaScript", "Music", "News", "Sports", "Olympics", "Live", "Podcasts", "Cricket", "mix", "Tamil Cinema", "Dramedy", "Telivision comedy", "Motivation", "Comedy", "Public speaking event", "Recently uploaded", "Watched"]
    return (

        <div className='flex space-x-5 whitespace-nowrap p-3 top-[64px] z- bg-white w-full overflow-x-auto fixed  bg-opacity-95'>
            {buttonList.map((name, index) => (
                <Button key={index} name={name} />
            ))}

        </div>



    )
}

export default ButtonList
