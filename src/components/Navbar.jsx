import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, searchImg, thirdweb } from '../assets';
import { navlinks } from '../constants';
import SearchInput from './SearchInput';

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const { disconnect, connect, address } = useStateContext();

    return (
        <div className="flex md:flex-row mb-4 flex-col-reverse justify-between gap-6 z-[99] w-[100%]">
            <div className="sm:flex hidden px-4 py-0 flex-row justify-end gap-4 relative">
                <SearchInput />
                <div className="sm:flex hidden flex-row justify-end gap-4">
                    <CustomButton
                        btnType="button"
                        title={address ? 'Create a campaign' : 'Connect'}
                        styles={address ? 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-orange-200 via-amber-400 to-orange-700' : 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-700 via-sky-400 to-sky-200'}
                        handleClick={() => {
                            if (address) navigate('create-campaign')
                            else connect()
                        }}
                    />
                    <Link to="/profile">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
                        </div>
                    </Link>
                </div>
            </div>
            {/* Small screen navigation */}
            <div className="sm:hidden z-[99] bg-50 w-full px-4 py-2 shadow-md border-stone-400 border-b-[1px] fixed sm:relative top-0 gap-1 flex justify-between items-center">
                <div className="flex cursor-pointer z-[99]">

                    <Link to='/'>
                        <img src={logo} alt="user" className="w-[50px] h-[50px] object-contain z-[99]" />
                    </Link>
                </div>
                <div className="lg:flex-1 flex items-center flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] ">
                    <SearchInput />
                </div>
                <img
                    src={menu}
                    alt="menu"
                    className="w-[34px] h-[34px] object-contain cursor-pointer"
                    onClick={() => setToggleDrawer((prev) => !prev)}
                />
                <div className={`absolute top-[60px] right-0 left-0 bg-stone-300 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 z-[999] py-4 ${!toggleDrawer ? '-translate-y-[700vh]' : 'translate-y-0'} transition-all duration-700`}>
                    <ul className="mb-4">
                        {navlinks.map((link) => (
                            <li
                                key={link.name}
                                className={`flex p-4 hover:cursor-pointer hover:text-[#4d4d52] hover:bg-[#e0e0e0] ${isActive === link.name && 'bg-[#4d4d52]'}`}
                                onClick={() => {
                                    setIsActive(link.name);
                                    setToggleDrawer(false);
                                    navigate(link.link);
                                }}
                            >
                                <img
                                    src={link.imgUrl}
                                    alt={link.name}
                                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                                />
                                <p className={`ml-[20px] font-spacegrotesk uppercase font-semibold text-[14px]  ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#4a4b50]'}`}>
                                    {link.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex mx-4">
                        <CustomButton
                            btnType="button"
                            title={address ? 'Create a campaign' : 'Connect'}
                            styles={address ? 'bg-[#1dc071]' : 'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-700 via-sky-400 to-sky-200'}
                            handleClick={() => {
                                if (address) navigate('create-campaign')
                                else connect()
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar