import React from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


const AboutUsPage = () => {
  return (
    <>
    <Box className='cornerspacing' sx={{py:10}}>

      <Container maxWidth="lg">
        <Typography variant='h3'>
          About Us
        </Typography>
        <Typography variant='p' fontSize='0.9rem'>
          Welcome to the website of the Department of Electrical Engineering, IIT Indore.<br />

          The department offers B.Tech, M.S (Research), M.Tech and Ph.D. programs in Electrical Engineering. The department currently has 15 faculty members with expertise in diverse areas including Power Systems and Power Electronics, Integration of Renewable Energy Sources, Smart Grid, Nanotechnology and Nanoelectronics, Communications and Networking, Signal Processing, Bio-photonics. In tune with the inter–disciplinary research philosophy of IIT Indore, an effort is made to promote internal and external collaborations.<br />

          Electrical Engineering at IIT Indore aims to play an active role in propelling India in its growth trajectory through innovative inter–disciplinary research and educational programs at undergraduate and postgraduate levels.<br />

        </Typography>
      </Container>
    </Box>
    </>
  )
}

export default AboutUsPage