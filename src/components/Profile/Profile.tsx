import React, { useState } from 'react';
import profilePic2 from '../../assets/profile-img.jpeg'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FiCamera } from 'react-icons/fi';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import FinancialInformation from '../FinancialInformation/FinancialInformation';

const CustomGrid: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('personal');
    return (
        <Grid container spacing={4} className="px-9 py-5  bg-gray-100 ">
            <Grid item xs={3}>
                <div className=''>
                    <Card className="flex flex-col items-start justify-start rounded-[20px] p-7  relative !shadow-none !border-none bg-white  !rounded-[16px]">
                        <CardContent className='p-0 m-0 w-full'>
                            <div className="px-2">
                                <div className=" relative">
                                    <img
                                        src={profilePic2}
                                        alt="Profile"
                                        className="w-[120px] h-[120px] rounded-[40px] object-cover mb-4 "
                                    />

                                    <div className='absolute top-[88px] left-[88px] bg-gray-200 rounded-full p-2 w-[40px] h-[40px] flex items-center justify-center'>
                                        <FiCamera
                                            size={22}
                                        />
                                    </div>

                                </div>
                                <Typography variant="h6" className=" text-left !font-bold text-[20px] !font-[600]" >
                                    John Doe
                                </Typography>
                                <Typography variant="body2"  className=" text-left text-gray-500 !font-[400] !text-[16px]">
                                    Senior Product Manager
                                </Typography>
                            </div>
                        </CardContent>
                        <div className="border-b w-full my-2" />
                        <CardContent className='!p-0  m-0 my-6 w-full space-y-2'>

                            <Typography
                                variant="body2"
                                className={` cursor-pointer  !font-samibold !mx-0  p-4 !text-[18px]  rounded-[8px]
                                ${activeLink === 'personal' ? 'text-[#0F6CBD] bg-blue-50' : 'text-black'}`}
                                onClick={() => setActiveLink('personal')}
                            >
                                Personal Information
                            </Typography>


                            <Typography
                                variant="body2"
                                className={`cursor-pointer  !font-samibold   p-4 !text-[18px]  rounded-[8px]
                                ${activeLink === 'financial' ? 'text-[#0F6CBD] bg-blue-50' : 'text-black'}`}
                                onClick={() => setActiveLink('financial')}
                            >
                                Financial Information
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
            </Grid>
            {activeLink === 'personal' && <PersonalInformation />}
            {activeLink === 'financial' && <FinancialInformation />}


        </Grid >
    );
};

export default CustomGrid;



