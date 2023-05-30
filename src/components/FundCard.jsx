import React from 'react';
import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, _target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);

    return (
        <div className="flex-1 flex flex-col w-full rounded-[15px] bg-stone-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 cursor-pointer z-[0] relative" onClick={handleClick}>
            <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-t-[15px]" />
            <div className="flex flex-col p-4">
                <div className="flex items-center mb-[18px]">
                    <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain" />
                    <p className="ml-[12px] mt-[2px] font-spacegrotesk font-medium text-[12px] text-stone-700">Education</p>
                </div>
                <div className="block">
                    <h3 className="font-spacegrotesk font-semibold text-[16px] text-[#5dce99] text-left leading-[26px] truncate">{title}</h3>
                    <p className="mt-[5px] font-spacegrotesk font-normal text-stone-500 text-left leading-[18px] truncate">{description}</p>
                </div>
                <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-spacegrotesk font-semibold text-[14px] text-[#5dce99] leading-[22px]">{amountCollected}</h4>
                        <p className="mt-[3px] font-spacegrotesk font-normal text-[12px] leading-[18px] text-stone-700 sm:max-w-[120px] truncate">Raised of {_target}</p>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-spacegrotesk font-semibold text-[14px] text-[#5dce99] leading-[22px]">{remainingDays}</h4>
                        <p className="mt-[3px] font-spacegrotesk font-normal text-[12px] leading-[18px] text-stone-700 sm:max-w-[120px] truncate">Days Left</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-[0px] gap-[12px] border-t-[.15rem] border-stone-400 bg-stone-300 p-4 rounded-b-[15px]">
                <p className="flex-1 font-plexmono font-normal text-[12px] text-[#808191] truncate">by <span className="tracking-tightest text-[#22dd61]">{owner}</span></p>
            </div>
        </div>
    )
}

export default FundCard