import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';


const FinancialInformation: React.FC = () => {

    return (
        <Grid item xs={9} >
            <div className='bg-white p-9 rounded-[16px] mb-7'>
                <div className=" relative flex justify-between items-center ">
                    <div className="">
                        <h1 className="text-[20px] font-[500] mb-3 leading-[30px] text-left ">
                            Bank Information
                        </h1>
                    </div>
                    <div className="flex space-x-4">

                        <Button
                            variant="contained"
                            className="bg-blue-800 text-white font-semibold rounded-[var(--Medium)] transition duration-200  w-[104px] h-[36px] p-[8px_12px]  "
                            onClick={()=>{}} 
                        >
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">Bank Name</Typography>
                        <Typography className="text-black !font-[500] pt-1">CIB</Typography>
                    </Box>
                    <Box className=" ">
                        <Typography className="text-gray-500  !text-[12px]">IBAN</Typography>
                        <Typography className="text-black !font-[500] pt-1">12346546413216446 </Typography>
                    </Box>

                </div>
            </div>
        </Grid>
    );
};

export default FinancialInformation;