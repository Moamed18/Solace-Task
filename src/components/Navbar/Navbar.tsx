import React, { useState } from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { FiGrid, FiPackage, FiUsers, FiFileText, FiPieChart } from "react-icons/fi"; 
import websiteIcon from '../../assets/main-icon.png';

const Navbar: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string>('main');

  const menuItems = [
    { icon: <FiGrid size={24} />, id: 'main' },
    { icon: <FiPieChart size={24} />, id: 'pie-chart' },
    { icon: <FiFileText size={24} />, id: 'file-text' },
    { icon: <FiUsers size={24} />, id: 'users' },
    { icon: <FiPackage size={24} />, id: 'package' },
  ];

  const handleIconClick = (id: string) => {
    setActiveIcon(id);
  };

  return (
    
      <div className="w-[108px] h-full bg-white flex flex-col items-center justify-between border-r">
        <div className="flex items-center justify-center my-10">
          <img src={websiteIcon} alt="Website Icon" className="h-[45px] w-[45px]" />
        </div>
        <List className="flex-grow flex flex-col items-center space-y-6 text-gray-500">
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component="a"
              onClick={() => handleIconClick(item.id)}
              className={`flex justify-center items-center gap-2 p-3 w-11 h-12 rounded-custom-16 hover:bg-blue-800 rounded-[16px] hover:text-white transition-all ease-in-out duration-200   
              ${activeIcon === item.id ? 'bg-blue-800 rounded-[16px] text-white' : 'bg-transparent text-gray-500'}`}
            >
              {item.icon}
            </ListItem>
          ))}
        </List>
      </div>
    
  );
};

export default Navbar;
