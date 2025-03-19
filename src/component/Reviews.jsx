import React from 'react'

const Reviews = ({value}) => {
    return (
        <div className="pr-5">
            <div className="w-[298px] h-[230px] rounded-[8px] p-[16px] bg-[#141300] border border-[#494900]">
                <div>
                    <img src={value.im} alt="" />
                </div>
                <p className="my-4 font-inter font-normal text-[14px] leading-[20px] tracking-normal text-white">
                    {value.para}
                </p>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-inter font-semibold text-[16px] leading-[100%] tracking-[-0.02em] text-white">
                            {value.name}
                        </h3>
                        <p className="mt-2 font-inter font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-white">
                            {value.course}
                        </p>
                    </div>
                    <div>
                        <img src={value.cap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews