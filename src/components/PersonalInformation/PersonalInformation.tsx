import React, { useState } from 'react';
import { Box, Button, Grid, Typography} from '@mui/material';
import { FaPaperclip } from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { GET_USER, GetUserResponse } from '../../graphql/queries';
import EditDataDialog from '../EditInto/EditInto';

const PersonalInformation: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { loading, error, data } = useQuery<GetUserResponse>(GET_USER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const user = data?.user;
    
    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return <>

        <Grid item xs={9} >
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Basic Information
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={handleOpen} 
                        >
                            Edit
                        </Button>
                        <EditDataDialog
                            user={user}
                            open={open}
                            onClose={handleClose}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">National ID Number</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.nationalId?.idNumber}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">National ID Expiring Date</Typography>
                        <Typography className="text-black !font-[500] pt-1">{formatDate(user?.nationalId?.expiryDate || "")}</Typography>
                    </Box>
                    <Box className=" col-span-2">
                        <Typography className="text-gray-500  !text-[12px]">Title</Typography>
                        <Typography className="text-black !font-[500] pt-1">Mr.</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">First Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.firstName}</Typography>
                    </Box>
                    <Box className="">
                        <Typography className="text-gray-500 !text-[12px]">Father Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.fatherName}</Typography>
                    </Box>
                    <Box className="">
                        <Typography className="text-gray-500 !text-[12px]">Grand Father Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.grandfatherName}</Typography>
                    </Box>
                    <Box className="">
                        <Typography className="text-gray-500 !text-[12px]">Family Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.familyName}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500 !text-[12px]">الاسم الاول</Typography>
                        <Typography className="text-black !font-[500] pt-1">
                            {user?.localizedName?.firstName}
                        </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">اسم الاب</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.localizedName?.fatherName}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">اسم الجد</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.localizedName?.grandfatherName}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">اللقب / اسم العائلة</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.localizedName?.familyName}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Date of birth</Typography>
                        <Typography className="text-black !font-[500] pt-1">{formatDate(user?.birthDay || "")}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Gender</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.gender}</Typography>
                    </Box>

                    {user?.nationalities.map((n, index) => {
                        if (index === 0) return <Box className=" ">
                            <Typography className="text-gray-500  !text-[12px]">Nationality</Typography>
                            <Typography className="text-black !font-[500] pt-1">{n?.country?.name}</Typography>
                        </Box>
                        return <Box className=" ">
                            <Typography className="text-gray-500  !text-[12px]">Additional Nationality</Typography>
                            <Typography className="text-black !font-[500] pt-1">{n?.country?.name}</Typography>
                        </Box>
                    })}

                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Passport No.</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.passport?.passportNo}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Passport Issue Date</Typography>
                        <Typography className="text-black !font-[500] pt-1">{formatDate(user?.passport?.passportIssueDate || "")}</Typography>
                    </Box>

                    <Box className=" col-span-2">
                        <Typography className="text-gray-500  !text-[12px]">Passport Expiry Date</Typography>
                        <Typography className="text-black !font-[500] pt-1">{formatDate(user?.passport?.passportExpiryDate || "")}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Marital Status</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.maritalStatus?.name}</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Dependencies</Typography>
                        <Typography className="text-black !font-[500] pt-1">{user?.dependants}</Typography>
                    </Box>


                </div>
            </div>
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Contact Information
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={() =>{} } 
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Personal Email</Typography>
                        <Typography className="text-black !font-[500] pt-1">John.smith@gmail.com </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Mobile</Typography>
                        <Typography className="text-black !font-[500] pt-1">011223344556</Typography>
                    </Box>
                </div>
            </div>
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Emergency Contacts
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={() =>{}}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Emergency Contact Person Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">John John </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Emergency Relation</Typography>
                        <Typography className="text-black !font-[500] pt-1">Father</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Emergency Phone</Typography>
                        <Typography className="text-black !font-[500] pt-1">011224477885</Typography>
                    </Box>
                </div>
            </div>
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Address Details
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={() => {}} 
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Country</Typography>
                        <Typography className="text-black !font-[500] pt-1">Egypt </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">City</Typography>
                        <Typography className="text-black !font-[500] pt-1">Cairo</Typography>
                    </Box>
                    <Box className="col-span-2 ">
                        <Typography className="text-gray-500  !text-[12px]">Postal Code</Typography>
                        <Typography className="text-black !font-[500] pt-1">11728</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Building</Typography>
                        <Typography className="text-black !font-[500] pt-1">7 </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Street</Typography>
                        <Typography className="text-black !font-[500] pt-1">Street 127 </Typography>
                    </Box>
                    <Box className="">
                        <Typography className="text-gray-500  !text-[12px]">Floor No.</Typography>
                        <Typography className="text-black !font-[500] pt-1">7</Typography>
                    </Box>
                    <Box className="">
                        <Typography className="text-gray-500  !text-[12px]">Apartment</Typography>
                        <Typography className="text-black !font-[500] pt-1">72</Typography>
                    </Box>
                </div>
            </div>
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Driving License Details
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={() =>{}} 
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Driving License</Typography>
                        <Typography className="text-black !font-[500] pt-1">Yes</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Driving License Type</Typography>
                        <Typography className="text-black !font-[500] pt-1">C1E</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Driving License expiry date</Typography>
                        <Typography className="text-black !font-[500] pt-1">01 / 04 / 2025</Typography>
                    </Box>
                </div>
            </div>
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Military Status
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={() =>{}} 
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Require Travel Permit</Typography>
                        <Typography className="text-black !font-[500] pt-1">Yes</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Military Status</Typography>
                        <Typography className="text-black !font-[500] pt-1">Exempted </Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Document</Typography>
                        <div className="flex items-center mt-2"> 
                            <Typography className="text-black !font-[500] bg-gray-100 flex items-center p-2 inline-block">
                                <FaPaperclip size={14} className="text-gray-600 mr-2" /> 
                                filename1.docx
                            </Typography>
                        </div>
                    </Box>
                </div>
            </div>
        </Grid>
    </>;
};

export default PersonalInformation;
