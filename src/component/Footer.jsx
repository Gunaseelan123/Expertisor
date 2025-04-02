import React from 'react'
import { BsChatRightText } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='bg-[#FFF200]'>
      <div className='max-w-[1350px] mx-auto  px-5'>
        <div className=" sm:flex justify-between text-center py-4 items-center">
          <p className="font-inter font-semibold">Contact a Program Consultant</p>

          <a href="https://wa.me/919363414353" className="flex gap-3  text-white py-3 rounded-lg bg-green-600 px-4 items-center mt-4 sm:mt-0 justify-center cursor-pointer">
            <p className="font-inter">Text us On Whatsapp</p>
            <BsChatRightText />
          </a>

        </div>

        <p className="mt-2 font-inter text-center">© 2025 Expertisor Academy. All Rights Reserved.</p>

      </div>
    </div>
  )
}

export default Footer