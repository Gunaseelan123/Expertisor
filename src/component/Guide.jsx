import React from 'react'
import tick from "../assets/tick.png"


const Guide = ({para}) => {
    return (
        <div className='flex gap-2'>
            <div>
                <img src={tick} alt="" />
            </div>
            <p>{para.value}</p>
        </div>
    )
}

export default Guide