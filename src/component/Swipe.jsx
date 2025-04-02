import { useState, useEffect } from "react";
import swi1 from '../assets/swi/swi1.jpeg'
import swi2 from '../assets/swi/swi2.jpeg'
import swi3 from '../assets/swi/swi3.jpeg'
import swi4 from '../assets/swi/swi4.jpeg'
import swi5 from '../assets/swi/swi5.jpeg'
import swi6 from '../assets/swi/swi6.jpeg'
import swi7 from '../assets/swi/swi7.jpeg'

const Swipe = () => {
  const images = [
    swi1,
    swi2,
    swi3,
    swi4,
    swi5,
    swi6,
    swi7,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="  flex justify-center items-center h-[300px] xl:h-[400px] lg:h-[450px] md:h-[400px]  sm:h-[400px] max-w-[500px] md:max-w-[650px] m-auto relative ">
      <img src={images[currentIndex]} width={"100%"} alt="slider"  className=" h-full  rounded-3xl shadow-lg transition-opacity duration-700 ease-in-out opacity-95"/>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 bg-[#141300] border border-[#252500] rounded-[16px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-[#FFF200]" : "bg-[#474711]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Swipe;
