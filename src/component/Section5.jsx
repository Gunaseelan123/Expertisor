import React from 'react'
import ImgRun from './ImgRun'
import img1 from "../assets/img1.png"
import img3 from "../assets/img3.png"
import sli1 from "../assets/loop/sli1.png"
import sli2 from "../assets/loop/sli2.png"
import sli3 from "../assets/loop/sli3.png"
import sli4 from "../assets/loop/sli4.png"
import sli5 from "../assets/loop/sli5.png"
import sli6 from "../assets/loop/sli6.png"
import sli7 from "../assets/loop/sli7.png"
import Union from "../assets/Union.png"
import six6 from "../assets/numbers/six6.png"

const slide1 = [sli1, sli2, sli3, sli4]

const slide2 = [sli5, sli6, sli7, sli2, sli3, sli4]



const Section5 = () => {
    return (
        <section className="relative bg-[radial-gradient(83.9%_46.38%_at_50%_0%,_#FFFFFF_0%,_#FFF200_100%)]">
            <div className='py-14 sm:py-20'>
                <div>
                    <div className='max-w-[1350px] mx-auto px-5 '>
                        <div className="text-center">
                            <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent">Step four to six</p>
                            <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent mb-2">Tech Events</h1>
                            <p className="text-[14px] sm:text-[16px] leading-tight font-inter mb-8 sm:mb-12">Tech Meetups | Workshops | Hackathons</p>
                        </div>
                    </div>
                    <div className=''>
                        <ImgRun datas={slide1} dirc="right" speed="60" />
                        <ImgRun datas={slide2} dirc="left" speed="60" />
                    </div>
                </div>
            </div>
            <div>
                <img width={"100%"} src={Union} alt="" />
            </div>
            <div className="absolute top-8 right-8 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
                <img src={six6} alt="" />
            </div>
        </section>
    )
}

export default Section5