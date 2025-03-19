// import React from 'react'
// import Marquee from 'react-fast-marquee';



// const ImgRun = ({ datas, dirc, speed }) => {
//     return (
//         <div>
//             <div className='relative pb-5 overflow-hidden'>

//                 <Marquee direction={dirc} speed={speed} gradient={false} className="relative">
//                     {datas.map((value, index) => (
//                         <div key={index} className="relative pr-5">
//                             <img src={value} alt="" className='h-[247px]' />
//                         </div>
//                     ))}
//                 </Marquee>

//                 <div className="absolute inset-0 pointer-events-none">
//                     {/* Left Gradient (Fades into Images) */}
//                     <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FFF200] to-transparent"></div>

//                     {/* Right Gradient (Fades into Images) */}
//                     <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FFF200] to-transparent"></div>
//                 </div>


//             </div>
//         </div>)
// }

// export default ImgRun



import React from 'react';
import Marquee from 'react-fast-marquee';

const ImgRun = ({ datas, dirc, speed }) => {
    return (
        <div className="relative mb-5 overflow-hidden">
            <Marquee direction={dirc} speed={speed} gradient={false} className="relative">
                {datas.map((value, index) => (
                    <div key={index} className="relative pr-5">
                        <img 
                            src={value} 
                            alt="" 
                            className=" h-[200px] sm:h-[247px] relative z-10"
                        />
                    </div>
                ))}
            </Marquee>

            <div className="absolute inset-0 pointer-events-none flex justify-between z-20">
                <div className="w-7 sm:w-20 bg-gradient-to-r from-[#FFF641] to-transparent"></div>

                <div className="w-7 sm:w-20 bg-gradient-to-l from-[#FFF641] to-transparent"></div>
            </div>
        </div>
    );
};

export default ImgRun;
