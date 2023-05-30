import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import OwnerCard from './OwnerCard';

const DisplayOwners = ({ title, isLoading, owners }) => {
    const navigate = useNavigate();
    const handleNavigate = (owner) => {
        navigate(`/owner-details/${owner.id}`, { state: owner });
    }

    return (
        <div className="flex flex-col flex-1 max-w-[100%]">
            <h1 className="font-epilogue font-semibold text-[1.25em] text-white text-left">{title} <small>
                ({owners.length})
            </small>
            </h1>
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <img src={loader} alt="Loader" className="w-[100px] h-[100px] object-contain" />
                )}

                {!isLoading && owners.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                        There are no campaign owners.
                    </p>
                )}
                {!isLoading && owners.length > 0 && owners.map((owner) =>
                    <OwnerCard
                        key={owner.id}
                        {...owner}
                        handleClick={() => handleNavigate(owner)}
                    />)}
            </div>
        </div>
    );
};

export default DisplayOwners;