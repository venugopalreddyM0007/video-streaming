import React from 'react'

const Skeleton = () => {
    return (
        <div className="flex w-[290px]  flex-col gap-4 bg-white justify-center items-start">
            <div className="skeleton h-44 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    )
}

export default Skeleton
