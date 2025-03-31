import React from 'react'
import { motion } from "framer-motion";

const Buttons = () => {
    return (
        <div className='sm:flex justify-center gap-4 mt-6 '>

            <a href="https://www.expertisoracademy.in/courses/MasterTech-1-Year-Mentorship-Program-1735308892432-676eb65c9f0f402d2004afae" className='flex justify-center cursor-pointer'>
                <div className='flex justify-center items-center border-[#B6AC00] bg-[#FFF761] border rounded-[4px]  w-[335px] sm:w-[251px] h-[40px] '>
                    <p  className='font-inter font-semibold text-black  text-[16px] leading-[100%] tracking-[0%] align-middle '>Join Now</p>
                </div>
            </a>


            <a href="" className='flex justify-center mt-4 sm:mt-0 cursor-pointer'>
                <div className='flex justify-center items-center text-[#ffff] w-[335px] sm:w-[247px] h-[40px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00] '>
                    <p  className='font-inter font-semibold text-[16px] leading-[100%] tracking-[0%] align-middle '>Download Brochure</p>
                </div>
            </a>
        </div>
    )
}

export default Buttons