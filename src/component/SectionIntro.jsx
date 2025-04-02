import React from 'react'
import { useState,useEffect,useRef } from 'react'
import enroll from "../assets/enroll.png"
import right_arrow from "../assets/right_arrow.png"
import Union from "../assets/Union.png"
import download from "../assets/download.png"
import embed from "../assets/embed.png"
import deegre from "../assets/deegre.png"

const SectionIntro = () => {
    const videos = {
        id: 1,
        url: "https://www.youtube.com/embed/v02U7mvaIvk",
        thumbnail: "https://img.youtube.com/vi/v02U7mvaIvk/hqdefault.jpg"
    };

    const [playing, setPlaying] = useState(false);


    return (
        <section className=' bg-[radial-gradient(83.9%_46.38%_at_50%_0%,_#FFFFFF_0%,_#FFF200_100%)]'>

            <div className='pt-32 sm:pt-44 pb-24 px-3 sm:px-5' >

                <div className=' text-center'>

                    <div className='relative  inline-block mb-4'>
                        <div className='flex justify-center'>
                            <div className=' flex  gap-2 items-center rounded-[8px] border border-[#C9BC5F] py-[6px] px-[8.5px] sm:p-[8.5px]'>
                                <img src={enroll} alt="" />
                                <p className='font-inter font-normal text-[12px] sm:text-[16px] leading-[100%] tracking-[0%] text-center'>1352+ students already enrolled</p>
                            </div>

                        </div>
                        <div className="absolute top-[-70px] left-0 lg:left-[-40px]  xl:left-[-100px]  ">
                            <img src={embed} alt="" className="h-[60px] w-[60px] sm:h-[68px] sm:w-[68px]" />
                        </div>
                        <div className="absolute top-[-110px] sm:top-[-30px] right-0 lg:right-[-40px]  xl:right-[-100px]">
                            <img src={deegre} alt="" className="h-[60px] w-[60px] sm:h-[68px] sm:w-[68px]" />
                        </div>


                        <h1 className="  mt-3  sm:mt-3 font-inter font-bold text-[28px] sm:text-[50px] md:text-[64px]  leading-tight tracking-[0%] text-centermt-6 bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent">
                            <span className='md:block'>Ready to Build a High</span>
                            <span className='md:block'> Paying IT Career?</span>
                        </h1>

                        <p className="  mt-3 mb-5 sm:mb-0 sm:mt-4 font-inter font-normal text-[16px] sm:text-[24px] leading-snug tracking-normal text-center ">Learn Directly from Tamil Nadu's Top Tech Creators & Mentors!
                        </p>

                        <div className=' hidden sm:flex justify-center gap-4 mt-8 mb-10 lg:mb-14'>
                            <a  href="https://www.expertisoracademy.in/courses/MasterTech-Creator-Mentorship-Program-67ec2a9a57589948c89aa275 " className='flex justify-center cursor-pointer'>
                                <div className='flex justify-center items-center  w-[171px] h-[56px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00]'>
                                    <div className="flex gap-3 items-center">
                                        <p className='font-inter font-semibold text-[16px] text-[#FFF201] leading-[100%] tracking-[0%] align-middle'>Join Now</p>
                                        <img src={right_arrow} alt="" />
                                    </div>
                                </div>
                            </a>

                            <a href="/Broucher.pdf" download className='flex justify-center cursor-pointer'>
                                <div className='mt-4 sm:mt-0 flex justify-center items-center border rounded-[4px] border-[#B6AC00] bg-[#FFF761] w-[246px] h-[56px]'>
                                    <div className="flex gap-3 items-center">
                                        <p  className='font-inter font-semibold text-black  text-[16px] leading-[100%] tracking-[0%] align-middle'>Download Brochure</p>
                                        <img src={download} alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative xl:mx-[200px]">
                        <div className="relative w-full pb-[53.25%] sm:pb-[48.25%] h-0 border-[10px] sm:border-[14px]  rounded-[36px] border-[#ffff]">

                            {playing !== 1 ? (
                                <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(1)}>
                                    <img src={videos.thumbnail} width={"100%"} alt="Video Thumbnail" className="max-w-full h-full object-cover rounded-3xl" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-black/50 p-2 sm:p-3 lg:p-4 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe className="absolute top-0 left-0 w-full h-full rounded-3xl" src="https://www.youtube.com/embed/v02U7mvaIvk?autoplay=1&modestbranding=1&showinfo=0&controls=1&rel=0&disablekb=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                            )}
                        </div>
                    </div>



                    <div className=' block sm:hidden justify-center gap-4 mt-12 '>

                        <a href="https://www.expertisoracademy.in/courses/MasterTech-Creator-Mentorship-Program-67ec2a9a57589948c89aa275 " className='flex justify-center cursor-pointer'>
                            <div className='flex justify-center items-center  w-[335px] h-[48px] rounded-[8px]  bg-[radial-gradient(99.88%_99.88%_at_53.29%_100.71%,_#6D6100_0%,_#000000_100%)] border border-[#B6AC00]'>
                                <div className="flex gap-3 items-center">
                                    <p className='font-inter font-semibold text-[14px] text-[#FFF201] leading-[100%] tracking-[0%] align-middle'>Join Now</p>
                                    <img src={right_arrow} alt="" />
                                </div>
                            </div>
                        </a>

                        <a href="/Broucher.pdf" download className='flex justify-center cursor-pointer'>
                            <div className='mt-4 sm:mt-0 flex justify-center items-center border rounded-[4px] border-[#B6AC00] bg-[#FFF761] w-[335px] h-[48px]'>
                                <div className="flex gap-3 items-center">
                                    <p  className='font-inter font-semibold text-black  text-[14px] leading-[100%] tracking-[0%] align-middle'>Download Brochure</p>
                                    <img src={download} alt="" />
                                </div>
                            </div>
                        </a>

                    </div>

                </div>
            </div>

            <div >
                <img width={"100%"} src={Union} alt="" />
            </div>


        </section>
    )
}

export default SectionIntro