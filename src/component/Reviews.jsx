import React from 'react'
import coma from "../assets/coma.png";
import cap from "../assets/cap.png"

const Reviews = ({ value }) => {
    return (
        <div className="pr-5">
            <div className="w-[298px] h-[230px] rounded-[8px] p-[16px] bg-[#141300] border border-[#494900] flex flex-col justify-between gap-1">
                <div >
                    <div>
                        <img src={coma} alt="" />
                    </div>
                    <p className=" font-inter font-normal text-[14px] leading-[20px] tracking-normal text-white mt-3 line-clamp-5">
                        {value.para}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-inter font-semibold text-[16px] leading-[100%] tracking-[-0.02em] uppercase text-white">
                            {value.name}
                        </h3>
                        {/* <p className="mt-2 font-inter font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-white ">
                            {value.course}
                        </p> */}
                    </div>
                    <div>
                        <img src={cap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews