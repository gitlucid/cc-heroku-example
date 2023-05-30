import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useStateContext } from '../context';
import { searchImg } from '../assets';

const SearchInput = () => {
    const location = useLocation();
    const { search } = useParams();
    const searchParams = new URLSearchParams(location.search);
    const searchTermParams = searchParams.get('search');
    const [searchTerm, setSearchTerm] = useState(search || '');
    const navigate = useNavigate();
    const { getCampaigns } = useStateContext();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const allCampaigns = await getCampaigns();
        const currentDate = new Date();
        const filteredData = allCampaigns.filter((campaign) =>
            campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            campaign.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
            campaign.deadline.toString().includes(searchTerm) ||
            Math.ceil((campaign.deadline - currentDate) / (1000 * 60 * 60 * 24)).toString().includes(searchTerm)
        );
        navigate(`/results?search=${searchTerm}`, { state: { searchResults: filteredData } });
    };

    return (
        <div className="lg:flex-1 flex items-center flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-stone-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[100px]">

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for campaigns"
                    className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-stone-800 bg-transparent outline-none"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div onClick={handleSubmit} className="w-[50px] h-full rounded-full flex justify-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-amber-200 via-amber-500 to-red-800 items-center cursor-pointer">
                <img src={searchImg}  alt="search" className="w-[15px] h-[15px] object-contain " />
            </div>
        </div>
    );
};

export default SearchInput;