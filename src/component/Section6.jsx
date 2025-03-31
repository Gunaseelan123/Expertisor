import React from 'react'
import Swipe from './Swipe'
import tick from "../assets/tick.png"
import seaven7 from "../assets/numbers/seaven7.png"

const Section6 = () => {

    const para = [
        "Enroll in this initiative program to secure your spot for the internship opportunity!",
        "Complete all the courses without leaving any module unfinished.",
        "A basic screening will be conducted to verify that you have completed all modules.",
        "After passing the screening call, you’ll be eligible to join the internship.",
        "You’ll receive an email with more details, including your official internship offer letter!",
    ]
    return (
        <section className="relative bg-black">
            <div className="max-w-[1350px] mx-auto text-white px-5 pt-14">
                <div>
                    <div className="text-center mb-10">
                        <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent">Step seaven</p>
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-1">Internship Opportunities</h1>
                        <p className="text-[14px] sm:text-[16px] leading-tight font-inter">Internship Gateway: Gain Real-World Experience!</p>
                    </div>
                    <div className="grid lg:grid-cols-2 items-center gap-5">
                        <div className="">
                            <Swipe />
                        </div>
                        <div>
                            <div>
                                <h3 className="font-gordita font-medium text-[16px] leading-[100%] tracking-[0] mb-4">How to Join?</h3>
                                <div className=" grid grid-cols-1 gap-6">
                                    {para.map((cont, index) => (
                                        <div key={index} className="flex items-center h-24 md:h-20 gap-4 p-[16px] bg-[#141300] border border-[#494900] rounded-[8px]">
                                            <img src={tick} alt="" />
                                            <p>{cont}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-8 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
                <img src={seaven7} alt="" />
            </div>
        </section>
    )
}

export default Section6