import React, { useState, useEffect } from 'react'

import { DisplayOwners } from '../components';
import { useStateContext } from '../context'

const OwnerDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { owner, campaign, address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract, campaign, owner]);

  return (
    <DisplayOwners 
      title="All Owners"
      isLoading={isLoading}
      campaigns={owner}
    />
  )
}

export default OwnerDetails