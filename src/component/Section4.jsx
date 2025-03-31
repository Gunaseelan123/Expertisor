import React from 'react'
import career from "../assets/career.png"
import Guide from './Guide'
import Infinite from './Infinite'
import three3 from "../assets/numbers/three3.png"
import Buttons from './Buttons'

const Section4 = () => {

    const data = [
        { value: "Job searching strategies" },
        { value: "Profile building" },
        { value: "Job opening updates" },
        { value: "Tamil language" },
        { value: "24/7 Career support" },
        { value: "Live Guidance" }
    ]



    return (
        <section className='relative bg-black text-white'>
            <div className='max-w-[1350px] mx-auto px-5 py-14 sm:py-24'>
                <div>
                    <div className="text-center">
                        <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent">Step three</p>
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-1">Career Guidance</h1>
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-9 xl:gap-14 xl:items-center mt-7'>
                        <div className='flex justify-center'>
                            <img src={career} alt="" className='xl:w-full' />
                        </div>
                        <div>
                            <div className='text-center xl:text-start'>
                                <p className="font-normal text-[18px]">This exclusive program is designed to provide hands-on experience and mentorship, guiding participants through the latest technologies and industry trends. </p>
                                <div className='flex justify-center xl:justify-normal xl:flex-none '>
                                    <div className='my-7 flex  flex-col gap-3'>
                                        {data.map((value, index) => (
                                            <Guide key={index} para={value} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='sm:flex justify-center xl:justify-start gap-4 mt-2 xl:mt-5'>
                                <a href="https://www.expertisoracademy.in/courses/MasterTech-1-Year-Mentorship-Program-1735308892432-676eb65c9f0f402d2004afae" className='flex justify-center'>
                                    <div className='flex justify-center items-center border rounded-[4px] border-[#B6AC00] bg-[#FFF761] w-[335px] sm:w-[251px] h-[40px]'>
                                        <p  className='font-inter font-semibold text-black  text-[16px] leading-[100%] tracking-[0%] align-middle'>Join Now</p>
                                    </div>
                                </a>
                                <a href="" className='flex justify-center mt-4 sm:mt-0'>
                                    <div className='flex justify-center items-center text-[#ffff] w-[335px] sm:w-[247px] h-[40px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00]'>
                                        <p className='font-inter font-semibold text-[16px] leading-[100%] tracking-[0%] align-middle'>Download Brochure</p>
                                    </div>
                                </a>
                            </div>
                            {/* <Buttons/> */}
                        </div>
                    </div>
                    <div className='  mt-8'>
                        <Infinite />
                    </div>
                </div>
            </div>
            <div className="absolute top-14 right-8 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
                <img src={three3} alt="" />
            </div>
        </section>
    )
}

export default Section4