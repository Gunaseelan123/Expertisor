import React from 'react';
import Marquee from 'react-fast-marquee';

const ImgRun = ({ datas, dirc, speed, m, h }) => {
    return (
        <div className={`relative  overflow-hidden ${m}`}>
            <Marquee direction={dirc} speed={speed} gradient={false} className="relative">
                {datas.map((value, index) => (
                    <div key={index} className="relative pr-5">
                        <img
                            src={value}
                            alt=""
                            className={`relative z-10 ${h}`}
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
