import { Box } from '@mui/system'
import React from 'react'
import AboutUs from './AboutUs'
import Events from './Events'
const Body = () => {
  return (
    <>
    <Box sx={{px:10}}>
      <Events/>
      <AboutUs/>
    </Box>


    </>
  )
}

export default Body