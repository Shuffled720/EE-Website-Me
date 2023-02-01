import React from 'react'
import Box from '@mui/material/Box';
// import Link from 
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: 'tertiary.main',
        display: { xs: 'none', md: 'flex' }
      }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          paddingTop:10,
          px: 10,

        }}>
          <Box className='footer-info' sx={{ width: '30%', }}>
            <Typography variant='h5' sx={{ color: 'primary.main' }}>
              Important links
            </Typography>
            <Typography variant='body2' sx={{ color: 'secondary.main' }}>
              Dr. Vivek Kanhangad
              Head of Department
              <br />
              Contact:
              Head, Electrical Engineering
              Scandium Building, Academic POD
              Indian Institute of Technology Indore
              Khandwa Road, Simrol
              Indore, Madhya Pradesh, India 453552
              Email: hodee@iiti.ac.in
            </Typography>
          </Box>
          <Box className='footer-Links' >
            <Typography variant='h5' sx={{ color: 'primary.main' }}>
              Important links
            </Typography>
            <ul>
              <li><Link to='/a'><Typography variant='body2' sx={{ color: 'secondary.main' }}>Home</Typography></Link></li>
              <li><Link to='/a'><Typography variant='body2' sx={{ color: 'secondary.main' }}>About Us</Typography></Link></li>
              <li><Link to='/a'><Typography variant='body2' sx={{ color: 'secondary.main' }}>People</Typography></Link></li>
              <li><Link to='/a'><Typography variant='body2' sx={{ color: 'secondary.main' }}>Reasearch</Typography></Link></li>
              <li><Link to='/a'><Typography variant='body2' sx={{ color: 'secondary.main' }}>Academics</Typography></Link></li>


            </ul>

          </Box>
          <Box className='footer-map'  >
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685679307103!2d75.91853441460319!3d22.52036464056219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1675014310074!5m2!1sen!2sin" width="250" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Box sx={{
        backgroundColor: 'tertiary.main',
      }}>
        <Typography color='secondary' textAlign='center' sx={{p:2}}>

          ©️Department of Electrical Engineering, IIT Indore - All Rights Reserved
        </Typography>
      </Box>

    </>
  )
}

export default Footer