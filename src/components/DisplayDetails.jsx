import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader, OwnerCard } from './';
import { calculateBarPercentage, daysLeft } from '../utils';

const DisplayDetails = () => {
    const { id } = useParams();
    const { owner } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, getDonations, contract, address, getCampaigns, connect } = useStateContext();
    const { pId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);

    const remainingDays = daysLeft(state.deadline);

    const fetchDonators = async () => {
        const data = await getDonations(state.pId);

        setDonators(data);
    }
    useEffect(() => {
        const fetchData = async () => {
            const campaigns = await getCampaigns();
            const campaign = campaigns.find((c) => c.pId === parseInt(pId));
            setCampaign(campaign);
        }
        fetchData();
    }, [pId, getCampaigns]);

    useEffect(() => {
        if (contract) fetchDonators();
    }, [contract, address])

    const handleDonate = async () => {
        setIsLoading(true);

        await donate(state.pId, amount);

        navigate('/')
        setIsLoading(false);
    }
    const handleOwnerNavigate = () => {
        navigate(`/owner/${campaign.owner}`, { state });
    }

    return (
        <div>
            {isLoading && <Loader />}

            <div className="w-full p-5 pb-0 flex md:flex-row mt-[0px] md:mt-[0px] flex-col md:gap-[30px]">
                <div className="flex-1 flex-col">
                    <img src={state.image} alt="campaign" className="w-full h-[275px] md:h-[400px] object-cover md:rounded-lg rounded-md" />
                    <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2 z-[1]">
                        <div className="absolute h-full bg-[#4acd8d] z-[-1]" style={{ width: `${calculateBarPercentage(state._target, state.amountCollected)}%`, maxWidth: '100%' }}>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full md:flex md:w-[150px] md:flex-wrap md:justify-between gap-[0px] md:gap-[30px]">
                    <CountBox title="Days Left" value={remainingDays} />
                    <CountBox title={`Raised of ${state._target}`} value={state.amountCollected} />
                    <CountBox title="Total Backers" value={donators.length} />
                </div>
            </div>

            <div className="md:mt-[30px] p-5 pt-0 flex lg:flex-row flex-col gap-4">
                <div className="flex-[2] flex flex-col gap-[10px] bg-stone-300 z-[0] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-b-md rounded-t-[0px] md:rounded-md shadow-md">
                    <div className=" pt-3 pb-8 px-5 md:px-8">
                        <h4 className="font-serif font-bold text-[18px] text-stone-800 uppercase">Creator</h4>
                        <OwnerCard />
                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
                            <div>
                                <h4 className="font-plexmono font-[400] tracking-tighter text-[14px] text-[#5dce99] hover:text-[#267751] uppercase break-all">
                                    <Link to={`/owner/${state.owner}`} onClick={handleOwnerNavigate}>{state.owner}</Link>
                                </h4>
                                <p className="mt-[4px] font-plexmono font-semilight text-[14px] text-stone-500">{state.owner.campaigns} Campaigns</p>
                            </div>
                        </div>
                    </div>

                    <div className=" pt-3 pb-8 px-5 md:px-8">
                        <h4 className="font-serif font-bold text-[18px] text-stone-800 uppercase">Story</h4>

                        <div className="mt-[20px]">
                            <p className="font-spacegrotesk font-light text-[16px] text-stone-600 leading-[26px] text-justify ">{state.description}</p>
                        </div>
                    </div>

                    <div className='bg-amber-50 pt-3 pb-8 px-5 md:px-8 shadow-inner bg-clip-padding backdrop-filter bg-opacity-70 rounded-b-md'>
                        <h4 className="font-serif font-bold text-[18px] text-stone-800 uppercase">Donators</h4>

                        <div className="mt-[20px] flex flex-col gap-4">
                            {donators.length > 0 ? donators.map((item, index) => (
                                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                                    <p className="font-plexmono tracking-tightest md:tracking-widest font-semibold text-[12px] text-stone-600 leading-[26px] object-contain truncate">{index + 1}. {item.donator}</p>
                                    <p className="font-spacegrotesk tracking-tightest md:tracking-widest text-[12px] text-stone-800 leading-[26px]">{item.donation}</p>
                                </div>
                            )) : (
                                <p className="font-spacegrotesk font-normal text-[16px] text-stone-600 leading-[26px] text-justify">No donators yet. Be the first one!</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col p-4 bg-stone-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-md shadow-md">
                        <h4 className="font-serif font-bold text-[18px] text-stone-800 uppercase">
                            Support This Project
                        </h4>
                        <div className="mt-[30px]">
                            <input
                                type="number"
                                placeholder="0.1 ETH"
                                step="0.01"
                                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-stone-300 bg-transparent font-spacegrotesk text-stone-500 text-[18px] leading-[30px] placeholder:text-stone-300 rounded-[10px]"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                            <div className="my-[20px] p-4 bg-amber-50 rounded-[10px] bg-clip-padding backdrop-filter bg-opacity-70">
                                <h4 className="font-spacegrotesk font-bold text-[16px] leading-[26px] text-stone-600">Back it because you believe in it.</h4>
                                <p className="mt-[20px] font-spacegrotesk font-normal leading-[22px] text-stone-700">Support the project for no reward, just because it speaks to you.</p>
                            </div>
                            <div className="p-[2px] rounded-[10px] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-700 via-sky-400 to-sky-200">

                                <CustomButton
                                    btnType="button"
                                    title="Contribute ETH!"
                                    styles="w-full h-full font-plexmono w-full bg-transparent text-[18px] hover:bg-stone-100 hover:shadow-md hover:text-stone-700"
                                    handleClick={handleDonate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DisplayDetails