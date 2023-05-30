import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import FundCard from './FundCard';

const DisplayCampaigns = ({ title, isLoading, campaigns, pId }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign, owners) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign });
    }

    return (
        <div className="flex flex-col flex-1 max-w-[100%] p-4 mt-[20px] sm:mt-[0px]">
            <h1 className="font-spacegrotesk font-extrabold text-[1.25em] text-stone-800 text-left mb-[1em]">{title} <small>
                ({campaigns.length})
            </small>
            </h1>
            {isLoading && (
                <img src={loader} alt="Loader" className="w-[100px] h-[100px] object-contain" />
            )}

            {!isLoading && campaigns.length === 0 && (
                <p className="font-spacegrotesk font-normal text-[14px] leading-[30px] text-[#818183]">
                    There are no campaigns to display.
                </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">

                {!isLoading && campaigns.length > 0 && campaigns.map((campaign) =>
                    <FundCard
                        key={campaign.pId}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />)}
            </div>
        </div>
    );
};

export default DisplayCampaigns;