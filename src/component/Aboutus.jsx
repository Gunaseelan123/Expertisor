import React from 'react'
import sathish from "../assets/sathish.png"
import lecture from "../assets/lecture.png"
import Q from "../assets/Q.png"
import good from "../assets/good.png"
import exper from "../assets/exper.png"
import add from "../assets/add.png"
import remove from "../assets/remove.png"
import { useState } from 'react'
import twos from "../assets/twos.png"

const Aboutus = () => {
    const query = [
        "I Have got a Career Gap",
        "I Don’t Have Prior Knowledge in Technology",
        "I Don’t Know Where to Start My Tech Journey",
        "Coding Feels Overwhelming",
        "Struggling to Crack Interviews?"
    ]

    const [images, setImages] = useState(false)


    const [visibleIndex, setVisibleIndex] = useState(null); 
    const show = images ? remove : add


    const toggleParagraph = (index) => {
        setVisibleIndex((prevIndex) => (prevIndex === index ? null : index));
        setImages((prev) => (!prev))
    };

    const faqs = [
        { question: "How can I join the 1-Year Program?", answer: "Click the 'Join Now' button, complete your payment, and you'll receive an email with all the program details, including access to videos, the app, website, and community links." },
        { question: "What are the benefits of this program?", answer: "You'll gain access to exclusive learning materials, expert guidance, and a supportive community." },
        { question: "Can I cancel my subscription?", answer: "Yes, you can cancel anytime before the next billing cycle without any penalties." },
        { question: "Why are you charging only ₹700?", answer: "Yes, you can cancel anytime before the next billing cycle without any penalties." },
        { question: "Will I get a certificate?", answer: "Yes, you can cancel anytime before the next billing cycle without any penalties." },
    ];

    return (
        <section className="bg-black">
            <div className="max-w-[1350px] mx-auto text-white px-5 py-16 sm:py-24">
                <div>
                    <div className="">
                        <div className="text-center mb-12">
                            <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent">About Us</p>
                            <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-1">From a College Dreamer to a Tech Visionary</h1>
                            <p className="text-[14px] sm:text-[16px] leading-tight font-inter">Making Technology Accessible for Everyone</p>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-9 items-center">
                            <div className="grid xl:grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                                <div className=" flex justify-center">
                                    <img src={sathish} alt="" />
                                </div>
                                <div className=" flex justify-center">
                                    <img src={lecture} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 ">
                                <p className="text-[14px] sm:text-[16px]">Once upon a time in the bustling city of Innovatech, there lived a young entrepreneur named Alex. With a passion for technology and a vision to change the world, Alex spent countless nights coding in a small apartment filled with gadgets and dreams. One day, while sipping coffee at a local cafe, an idea struck: a revolutionary app that could connect people with similar interests in real-time.</p>
                                <p className="text-[14px] sm:text-[16px]">Determined to bring this idea to life, Alex gathered a team of like-minded friends, each with their own unique skills. Together, they worked tirelessly, facing challenges and setbacks, but their camaraderie kept them motivated. After months of hard work, they finally launched their app, "Connectify."</p>
                                <p className="text-[14px] sm:text-[16px]">The app quickly gained popularity, transforming the way people interacted and formed communities. Alex's innovative approach not only brought success but also inspired others in Innovatech to pursue their own tech dreams. With a heart full of gratitude, Alex realized that the journey was just as important as the destination, and the true reward was the impact made on people's lives.</p>
                                <p className="text-[14px] sm:text-[16px]">Once upon a time in the bustling city of Innovatech, there lived a young entrepreneur named Alex. With a passion for technology and a vision to change the world, Alex spent countless nights coding in a small apartment filled with gadgets and dreams. One day, while sipping coffee at a local café, an idea struck: a revolutionary app that could connect people with similar interests in real-time.</p>

                            </div>
                        </div>
                    </div>
                    <div className="pt-16 sm:pt-24">
                        <div className="text-center mb-8">
                            <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent my-2">No More Barriers to Your IT Career</h1>
                            <p className="text-[14px] sm:text-[16px] leading-tight font-inter">Overcome Every Challenge and Start Your Tech Journey with Confidence</p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            {query.map((data,index) => (
                                <div key={index} className="flex items-center h-16  gap-2 col-span-1 bg-[#141300] p-[16px] border border-[#494900]">
                                    <img src={Q} alt="" />
                                    <p>{data}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[#FFF200] ">
                    <div className="max-w-[1350px] mx-auto px-5 py-8   md:flex md:justify-between md:items-center">
                        <div className=" flex justify-center md:hidden">
                            <img src={twos} alt="" />
                        </div>
                        <div className="hidden md:flex justify-center  sm:justify-start  ">
                            <img src={good} alt="" />
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <p className="font-inter font-medium text-[22px] sm:text-[25px]  lg:text-[28px] leading-[100%] tracking-[0%] text-center">Everything and anything can be learned if we invest time and effort.</p>
                            <div className='flex justify-center items-center text-[#ffff] w-[150px] h-[40px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00]'>
                                <a href="" className='font-gordita font-medium text-[16px] leading-[100%] tracking-[0%] align-middle'>Join Now</a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center sm:justify-end">
                            <img src={exper} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1350px] mx-auto text-white px-5 py-16 sm:py-24">
                <div>
                    <div className="text-center mb-8">
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-5">Frequently Asked Questions</h1>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex justify-between bg-[#141300] border border-[#494900] p-5">
                                    <div>
                                        <h4>{faq.question}</h4>
                                        {visibleIndex === index && (
                                            <p className="mt-3">{faq.answer}</p>
                                        )}
                                    </div>
                                            <img
                                                src={visibleIndex === index ? remove : add }
                                                alt="Toggle"
                                                onClick={() => toggleParagraph(index)}
                                                className="cursor-pointer w-6 h-6"
                                            />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus