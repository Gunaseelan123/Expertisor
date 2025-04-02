import React from 'react'
import Union from "../assets/Union.png"
import Buttons from './Buttons'
import one1 from "../assets/numbers/one1.png"
import tamil from "../assets/tamil.png"

const FullStack = () => {
    return (
        <section className='relative bg-[radial-gradient(83.9%_46.38%_at_50%_0%,_#FFFFFF_0%,_#FFF200_100%)]'>
            <div className=" max-w-[1350px] mx-auto px-5 py-12 sm:py-20">
                <div>
                    <div className="text-center">
                        <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent">Step One</p>
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent  mb-1">IT Foundation Course</h1>
                        <p className="text-[14px] sm:text-[16px] leading-tight font-inter">
                            <span className='md:block'>This exclusive program is designed to provide hands-on experience and mentorship, guiding participants through the</span>
                            <span className='md:block'>latest technologies and industry trends.</span>
                        </p>
                    </div>
                    <Buttons />
                </div>
                <div className=' mt-7 sm:mt-8'>
                    <img width={"100%"} src={tamil} alt="" />
                </div>
            </div>
            <div>
                <img width={"100%"} src={Union} alt="" />
            </div>
            <div className="absolute top-6 right-3 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
                <img  src={one1} alt=""  />
            </div>
        </section>
    )
}


export default FullStack