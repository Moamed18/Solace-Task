import React from 'react';
import { IconButton } from '@mui/material';
import { FiSettings, FiBell, FiMail } from 'react-icons/fi';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import profilePic from '../../assets/profile-img.jpeg';
const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center bg-gray-100  px-10 py-5  mb-2">
            <div className=" ">
            <h1 className="text-[26px] font-bold mb-3">John Smith Profile</h1>
                <Breadcrumb />
            </div>
            <div className="flex space-x-6">
                <IconButton
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    aria-label="Home"
                >
                    <FiBell size={24} className="text-[#737791]" />
                </IconButton>
                <IconButton
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    aria-label="Settings"
                >
                    <FiMail size={24} className="text-[#737791]" />
                </IconButton>
                <IconButton
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    aria-label="Help"
                >
                    <FiSettings size={24} className="text-[#737791]" />
                </IconButton>
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-[40px] h-[40px] rounded-[16px] object-cover"
                />
            </div>
        </div>
    );
};

export default Header;
