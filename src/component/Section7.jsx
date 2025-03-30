import React from 'react'
import cert from "../assets/cert.png"
import cert2 from "../assets/cert2.png"
import eight8 from "../assets/numbers/eight8.png"


const Section7 = () => {
    return (
        <section className="relative bg-black">
            <div className="max-w-[1350px] mx-auto text-white px-5 py-20 sm:pt-24">
                <div>
                    <div className="text-center mb-7 sm:mb-12">
                        <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent">Step Eight</p>
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-1">Completion & Certification</h1>
                        <p className="text-[14px] sm:text-[16px] leading-tight font-inter">Internship Gateway: Gain Real-World Experience!</p>
                    </div>
                    <div>
                        <img width={"100%"} src={cert} alt="" className="hidden sm:block" />
                        <img width={"100%"} src={cert2} alt="" className="block sm:hidden" />
                    </div>
                </div>
            </div>
            <div className="absolute top-14 right-8 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
                <img src={eight8} alt="" />
            </div>
        </section>)
}

export default Section7