import React from 'react'

const Button = ({ name }) => {
    return (
        <button className='px-4 py-1 bg-gray-100 border rounded-md w-full'>
            {name}
        </button>
    )
}

export default Button
