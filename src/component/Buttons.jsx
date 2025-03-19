import React from 'react'

const Buttons = () => {
    return (
        <div className='sm:flex justify-center gap-4 mt-6'>
            <div className='flex justify-center'>
                <div className='flex justify-center items-center border rounded-[4px] border-[#B6AC00] bg-[#FFF761] w-[335px] sm:w-[251px] h-[40px]'>
                    <a href="" className='font-inter font-semibold text-black  text-[16px] leading-[100%] tracking-[0%] align-middle'>Join Now</a>
                </div>
            </div>
            <div className='flex justify-center mt-4 sm:mt-0'>
                <div className='flex justify-center items-center text-[#ffff] w-[335px] sm:w-[247px] h-[40px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00]'>
                    <a href="" className='font-inter font-semibold text-[16px] leading-[100%] tracking-[0%] align-middle'>Download Brochure</a>
                </div>
            </div>
        </div>
    )
}

export default Buttons