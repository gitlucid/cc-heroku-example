import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { DisplayCampaigns, Loader, FundCard } from '../components';
import { loader } from '../assets';
import { useStateContext } from '../context';

function Owner() {
    const [isLoading, setIsLoading] = useState(false);
    const { owner } = useParams();
    const [campaigns, setCampaigns] = useState([]);
    const { getCampaigns } = useStateContext();
    const fetchCampaigns = async () => {
        const allCampaigns = await getCampaigns();

        const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === owner);

        setCampaigns(filteredCampaigns);
    }

    useEffect(() => {
        fetchCampaigns();
    }, [owner, getCampaigns]);
    const navigate = useNavigate();
    const handleNavigate = (campaign, owners) => {
        navigate(`/campaign-details/${campaign.pId}`, { state: campaign });
    }

    return (
        <div>
            {isLoading && <Loader />}

            <div className="flex flex-col flex-1 max-w-[100%] p-4 mt-[80px] sm:mt-[0px]">
                <h1 className="font-spacegrotesk font-extrabold text-[1.25em] text-stone-800 text-left mb-[1em]">{campaigns.length} Campaigns Owned By:<span className="block text-[.75em] font-plexmono font-normal break-all">{owner}</span> <small>

                </small>
                </h1>
                <div className="flex flex-wrap mt-[20px] gap-[26px]">
                    {isLoading && <Loader />}

                    {!isLoading && campaigns.length === 0 && (
                        <p>There are no campaigns owned by {owner}.</p>

                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">

                    {!isLoading && campaigns.length > 0 && campaigns.map((campaign) =>
                        <FundCard
                            key={campaign.pId}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)}
                        />)}
                </div>
            </div>
        </div>
    );
}

export default Owner;
