import React from 'react';
import { Box, Typography } from '@mui/material';


export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',

      }}
    >
      <Typography variant="h1" style={{ color: '#000' }}>
        ERROR:404
      </Typography>
      <Typography varient='p'>
        page not found!
      </Typography>
    </Box>
  );}