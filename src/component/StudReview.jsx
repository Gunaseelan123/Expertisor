import React from 'react'
import ImgRun from './ImgRun'
import swi1 from "../assets/swi/swi1.jpeg"
import day1 from "../assets/day-1.mp4"
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";



const StudReview = () => {

    const images = [
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
        swi1,
    ]

    const videoSources = [
        day1,
        day1,
        day1,
        day1,
        day1,
        day1,

    ]

    const videoRefs = useRef([]); 
    const [playingIndex, setPlayingIndex] = useState(null); 

    const handlePlayPause = (index) => {
        if (videoRefs.current[index]) {
            if (playingIndex === index) {
                videoRefs.current[index].pause();
                setPlayingIndex(null);
            } else {
                videoRefs.current.forEach((video, i) => {
                    if (video && i !== index) {
                        video.pause();
                    }
                });

                videoRefs.current[index].play();
                setPlayingIndex(index);
            }
        }
    };



    return (
        <section className="bg-[radial-gradient(83.9%_46.38%_at_50%_0%,_#FFFFFF_0%,_#FFF200_100%)]">
            <div className="px-5 py-16">
                <div>
                    <div className="text-center max-w-[1350px] mx-auto ">
                        <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-black to-[#817200] bg-clip-text text-transparent  mb-1">What Our Students Are Saying</h1>
                        <p className="text-[14px] sm:text-[16px] leading-tight font-inter">
                            <span className='md:block'>This exclusive program is designed to provide hands-on experience and mentorship, guiding participants through the</span>
                            <span className='md:block'>latest technologies and industry trends.</span>
                        </p>
                    </div>

                    <div className="py-10">
                        <ImgRun datas={images} dirc="left" speed="60" m="mb-0" h="h-[200px] " />
                    </div>

                    <div className="max-w-[1350px] mx-auto  ">


                        <div className="wrapper flex gap-5 overflow-x-scroll">
                            {videoSources.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative border-[8px] border-white rounded-md min-w-[330px] sm:min-w-[500px] mb-5"
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        className="w-full h-auto"
                                        src={src}
                                    ></video>

                                    <button
                                        onClick={() => handlePlayPause(index)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300"
                                    >
                                        {playingIndex === index ? (
                                            <Pause size={50} className="text-white" />
                                        ) : (
                                            <Play size={50} className="text-white" />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
}

export default StudReview