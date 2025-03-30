import React from 'react'
import creators1 from "../assets/creators_Desk.png"
import creators2 from "../assets/creators_mob.png"
import round from "../assets/round.png"
import img1 from "../assets/img1.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"




const Section2 = () => {


    const data = [
        {
            img: img1, title: "IT Foundation Course", description: "Full stack, Devops, Cloud computing, AI/ML etc.,", colSpan: `col-span-2 sm:col-span-1 lg:col-span-2  bg-[#141300] border border-[#494900] relative
        before:content-[' '] before:absolute before:inset-0 
        before:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,242,0,0.3)_0%,rgba(255,242,0,0)_100%)]
        before:z-0 before:rounded-2xl rounded-2xl shadow-lg text-white h-[165px] sm:h-[300px]` },
        { img: round, title: "Technology Courses", description: "Master In-Demand Tech Skills Efficiently", colSpan: "col-span-1 sm:col-span-1 lg:col-span-1 bg-[#141300] border border-[#494900] h-[200px] sm:h-[300px]" },
        { img: img3, title: "Career Guidance", description: "Navigate Your Career with Confidence", colSpan: "col-span-1 sm:col-span-1 lg:col-span-1 bg-[#141300] border border-[#494900] h-[200px] sm:h-[300px]" },
        { img: img4, title: "Tech Meetups", description: "Connect, Learn, and Grow Together", colSpan: "col-span-2 sm:col-span-1 lg:col-span-1 bg-[#141300] border border-[#494900] h-[165px] sm:h-[300px]" },
        { img: img5, title: "Workshops", description: "Hands-On Learning for Real-World Skills", colSpan: "col-span-1 sm:col-span-1 lg:col-span-1  bg-[#141300] border border-[#494900] h-[185px] sm:h-[300px] relative before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(47.33%_47.33%_at_72.15%_0%,rgba(255,242,0,0.2)_0%,rgba(255,242,0,0)_100%)] before:z-0 before:rounded-2xl" },
        { img: img6, title: "Hackathons", description: "Innovate, Compete, and Solve Challenges", colSpan: "col-span-1 sm:col-span-1 lg:col-span-2 bg-[#141300] border border-[#494900] h-[185px] sm:h-[300px]" },
        { img: img7, title: "Internship Opportunities", description: "Gain Experience, Build Your Future", colSpan: "col-span-2 sm:col-span-1 lg:col-span-2 bg-[#141300] border border-[#494900] h-[165px] sm:h-[300px]" },
        { img: img8, title: "Completion & Certification", description: "Earn Recognized Certificates for Success", colSpan: "col-span-2 sm:col-span-1 lg:col-span-2 bg-[#141300] border border-[#494900] h-[165px] sm:h-[300px]" }
    ];



    return (
        <section className='bg-black px-5'>
            <div className='pt-12 sm:pt-20 pb-20  max-w-[1350px] mx-auto'>
                <div>
                    <div>
                        <div>
                            <img width={"100%"} src={creators1} alt="" className="hidden sm:block" />
                            <img width={"100%"} src={creators2} alt="" className="block sm:hidden" />
                        </div>
                    </div>
                    <div className='mt-12 sm:mt-24 mb-9'>
                        <p className='font-inter font-normal text-[12px] sm:text-[20px] leading-[100%] tracking-[0%] text-center uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent'>Start Your Journey Toward a</p>
                        <h1 className='font-inter font-bold text-[24px] sm:text-[40px] leading-[100%] tracking-[0%] text-center mt-3   bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent'>Successful Career in Tech</h1>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`p-0 sm:p-4 rounded-xl shadow-lg text-white  flex flex-col justify-between  ${item.colSpan}`}>
                                <div className="flex justify-center items-center h-[50%] sm:h-[70%]">
                                    <img src={item.img} alt={item.title} className="w-full max-h-full " />
                                </div>

                                <div className="h-[50%] sm:h-[30%] flex flex-col justify-center px-3 sm-p-0">
                                    <h2 className="font-inter text-[14px] sm:text-[18px] font-semibold leading-tight">
                                        {item.title}
                                    </h2>
                                    <p className="font-inter text-[10px] sm:text-[14px] text-gray-400 mt-1 sm:mt-2 leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2