import React from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerCard = ({ title, image, owner, handleClick }) => {
    const navigate = useNavigate();

    const handleOwnerNavigate = () => {
        navigate(`/owner/${owner.pId}`, { state: owner });
    }

    return (
        <div className="owner-card" onClick={handleOwnerNavigate}>
            <img src={image} alt={title} className="w-[100%] h-[100%] object-contain" />
            <div className="owner-card__text-container">
                <h2 className="font-epilogue font-semibold text-[14px] leading-[30px] text-white">{title}</h2>
                <p className="font-epilogue font-normal text-[14px] leading-[30px] text-white">{owner}</p>
            </div>
        </div>
    );
};
export default OwnerCard;