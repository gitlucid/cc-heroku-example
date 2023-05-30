
import React, { useState, useEffect } from 'react'

import { DisplayDetails, DisplayCampaigns } from '../components';
import { useStateContext } from '../context'


const CampaignDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  const handleNavigate = (campaign, owners) => {
    navigate(`/campaign-details/${campaign.pId}/${campagin.title}`, { state: campaign });
}
  return (
    <>
      <DisplayDetails
        isLoading={isLoading}
        campaigns={campaigns}
      />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  )
}

export default CampaignDetails