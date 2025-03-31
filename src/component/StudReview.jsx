import React from 'react'
import ImgRun from './ImgRun'
import swi1 from "../assets/swi/swi1.jpeg"
import { useState } from "react";
import { Play, Pause } from "lucide-react";
import {stud} from "../assets/Meetup"



const StudReview = () => {

    const [playingVideo, setPlayingVideo] = useState(null);



    const videos = [
        { id: 1, url: "https://www.youtube.com/embed/vLlD6MxPGGM", thumbnail: "https://img.youtube.com/vi/vLlD6MxPGGM/maxresdefault.jpg"},
        { id: 2, url: "https://www.youtube.com/embed/mCkZBuY8G3k", thumbnail: "https://img.youtube.com/vi/mCkZBuY8G3k/maxresdefault.jpg" },
        { id: 3, url: "https://www.youtube.com/embed/0byxBZjb7DA", thumbnail: "https://img.youtube.com/vi/0byxBZjb7DA/maxresdefault.jpg"},
        { id: 4, url: "https://www.youtube.com/embed/_AFxkykDCzo", thumbnail: "https://img.youtube.com/vi/_AFxkykDCzo/maxresdefault.jpg"},
        { id: 5, url: "https://www.youtube.com/embed/olgqBQ1cNuk", thumbnail: "https://img.youtube.com/vi/olgqBQ1cNuk/maxresdefault.jpg"},
    ];






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

                    <div className="py-5 sm:py-10">
                        <ImgRun datas={stud} dirc="left" speed="120" m="mb-0" h="h-[200px] " />
                    </div>



                    <div className="max-w-[1350px] mx-auto">
                        <div className="wrapper flex gap-5 overflow-x-scroll whitespace-nowrap">
                            {videos.map((video) => (
                                <div key={video.id} className="relative min-w-[300px] sm:w-full mb-5 ">
                                    <div className="relative w-full pt-[100%]">
                                        {playingVideo !== video.id ? (
                                            <div
                                                className="absolute inset-0 cursor-pointer"
                                                onClick={() => setPlayingVideo(video.id)}
                                            >
                                                <img
                                                    src={video.thumbnail}
                                                    alt="Video Thumbnail"
                                                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="bg-black/50 p-2 sm:p-3 lg:p-4 rounded-full">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="white"
                                                            className="w-12 h-12"
                                                        >
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <iframe
                                                className="absolute inset-0 w-full h-full rounded-t-lg"
                                                src={`${video.url}?autoplay=1&modestbranding=1&showinfo=0&controls=0&rel=0&disablekb=1`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        )}
                                    </div>
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