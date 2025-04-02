import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";
import pannel from "../assets/pannel.png"
import Buttons from "./Buttons";
import two2 from "../assets/numbers/two2.png"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Section3 = () => {
  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/sh-oVBhdKfw", thumbnail: "https://img.youtube.com/vi/sh-oVBhdKfw/mqdefault.jpg", course: "Full Stack Development" },
    { id: 2, url: "https://www.youtube.com/embed/GKPxr9vA0eY", thumbnail: "https://img.youtube.com/vi/GKPxr9vA0eY/mqdefault.jpg", course: "AWS" },
    { id: 3, url: "https://www.youtube.com/embed/aYjtkMv7Iuw", thumbnail: "https://img.youtube.com/vi/aYjtkMv7Iuw/mqdefault.jpg", course: "Linux Admin" },
    { id: 4, url: "https://www.youtube.com/embed/szgkqIlkMGA ", thumbnail: "https://img.youtube.com/vi/szgkqIlkMGA/maxresdefault.jpg", course: "VMware vSphere" }
  ];



  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [itemPage, setitemPage] = useState(2)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 640) {
        setitemPage(2);
      } else {
        setitemPage(1);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [itemPage]);



  const nextSlide = () => {
    if (currentIndex + itemPage < videos.length) {
      setPlayingVideo(null);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setPlayingVideo(null);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });




  return (
    <section className="relative bg-black">
      <div className="max-w-[1350px] mx-auto text-white px-5 pt-16">
        <div className="text-center">
          <p className="text-[12px] sm:text-[20px] font-inter uppercase bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent">Step Two</p>
          <h1 className="text-[24px] sm:text-[40px] font-inter font-bold bg-gradient-to-b from-[#FFF540] to-[#FFFBBC] bg-clip-text text-transparent mb-1">IT Foundation Course</h1>
          <p className="text-[14px] sm:text-[16px] leading-tight font-inter">
            <span className='md:block'>This exclusive program is designed to provide hands-on experience and mentorship, guiding participants through the</span>
            <span className='md:block'>latest technologies and industry trends.</span>
          </p>
        </div>
        <Buttons />

        <div className="mt-12">
          <div className="flex items-center gap-3 justify-between">
            <h2 className="font-gordita font-medium text-[24px] leading-[32px] tracking-[0%]">Courses to Build Your Dream Career!</h2>
            <div className="flex gap-3 ">
              <button onClick={prevSlide} disabled={currentIndex === 0} className="disabled:opacity-50">
                <FaChevronLeft className="h-10 w-5" />
              </button>
              <button onClick={nextSlide} disabled={currentIndex + itemPage >= videos.length} className="disabled:opacity-50 ">
                <FaChevronRight className="h-10 w-5" />
              </button>
            </div>
          </div>


          <div>
            <div {...handlers} className="overflow-hidden gap-5 mt-5 grid grid-cols-1 sm:grid-cols-2">
              {videos.slice(currentIndex, currentIndex + itemPage).map((video) => (
                <div key={video.id} className="relative ">
                  <div className="relative w-full pt-[56.25%]">

                    {playingVideo !== video.id ? (
                      <div className="absolute inset-0 cursor-pointer" onClick={() => setPlayingVideo(video.id)}>
                        <img src={video.thumbnail} alt="Video Thumbnail" className="max-w-full h-full object-cover rounded-t-lg" />

                        <div className="absolute bottom-0 left-0  bg-[#FFCC00] text-white rounded-sm px-2 py-1 sm:px-3 sm:py-2  lg:px-4 lg:py-3 text-center   ">
                          <p className="font-inter sm:font-normal  lg:font-medium text-[10px] sm:text-[12px] lg:text-[14px] leading-[100%] tracking-[0%] align-middle">{video.course}</p>
                        </div>

                        <div className="absolute top-0 right-0 bg-[#C10000] text-white rounded-sm rounded-tr-lg  px-2 py-1 sm:px-3 sm:py-2  lg:px-4 lg:py-3    text-center truncate  ">
                          <p className="font-inter lg:font-semibold text-[10px] sm:text-[12px] lg:text-[14px] leading-[100%] tracking-[0%]">Available Now</p>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 p-2 sm:p-3 lg:p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-t-lg"
                        src={`${video.url}?autoplay=1&modestbranding=1&showinfo=0&controls=1&rel=0&disablekb=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  <div>
                    <img width={"100%"} src={pannel} alt="" />
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1 right-8 w-[59px] h-[61px]  sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[160px] lg:w-[189px] lg:h-[194px]">
        <img src={two2} alt="" />
      </div>
    </section>
  );
};

export default Section3;
