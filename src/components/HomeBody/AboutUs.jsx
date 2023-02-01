import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const AboutUs = () => {
    return (
        <>
        <Box sx={{py:5}}>
            <Typography variant='h3'>
                About Us
            </Typography>
            
            <Box  sx={{py:7}}>

            <Typography variant='p'>
                Welcome to the website of the Department of Electrical Engineering, IIT Indore.<br/>

                The department offers B.Tech, M.S (Research), M.Tech and Ph.D. programs in Electrical Engineering. The department currently has 15 faculty members with expertise in diverse areas including Power Systems and Power Electronics, Integration of Renewable Energy Sources, Smart Grid, Nanotechnology and Nanoelectronics, Communications and Networking, Signal Processing, Bio-photonics. In tune with the inter–disciplinary research philosophy of IIT Indore, an effort is made to promote internal and external collaborations.<br/>

                Electrical Engineering at IIT Indore aims to play an active role in propelling India in its growth trajectory through innovative inter–disciplinary research and educational programs at undergraduate and postgraduate levels.<br/>

            </Typography>
        </Box>
            </Box>
        </>
    )
}

export default AboutUs