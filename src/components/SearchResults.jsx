import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FundCard from './FundCard';


const SearchResults = ({ search, title, isLoading, campaigns, pId }) => {
const location = useLocation();
const searchResults = location.state.searchResults;
const navigate = useNavigate();
const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
return (
    <div className="flex flex-col flex-1 max-w-[100%] p-4 mt-[80px] sm:mt-[0px]">
    <h1 className="font-spacegrotesk font-semibold text-[1.25em] text-stone-800 text-left">
            Search Results for "{searchResults.search}" <small>({searchResults.length})</small>
        </h1>
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
            {searchResults.length === 0 && (
                <p className="font-spacegrotesk font-semibold text-[14px] leading-[30px] text-[#818183]">
                    No results found.
                </p>
            )}
            {searchResults.length > 0 && searchResults.map((result) =>
                <FundCard 
                key={result.pId}
              {...result}
              handleClick={() => handleNavigate(result)}
                />)}
        </div>
    </div>
)
}

export default SearchResults;