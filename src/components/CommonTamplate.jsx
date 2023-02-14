import React from 'react'
import { Typography, Box, Container, Card } from '@mui/material'


const CommonTamplate = (props) => {
  return (
    <>
      <Container sx={{ py: 2 }}>
        {/* Main Heading
          subHeading
          subsub Heading
          points */}
        <Typography variant="h3" color="primary" textAlign='center' >{props.Data.mainHeading}</Typography>
        <Typography variant='h5' color='teritiary' textAlign='center'>Department of Electricl Engineering</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ borderTop: "7px solid #9d0455", px: 5 }}>
            <hr />
          </Box>
          <Box sx={{ borderTop: "7px solid black", px: 4 }}>
            <hr />
          </Box>
        </Box>
        {(props.Data.body).map((key) => (
          <>
            <Card sx={{my:3}}>

            <Typography variant='h5' color='primary' textAlign='center'>{key.subHeading}</Typography>

            {(key.subbody).map((innerkey) => (
              <>
                <Box sx={{ py: 2, px: 5 }}>
                  <Typography variant='h5' sx={{ textDecoration: 'underline' }} >
                    {innerkey.subsubHeading}
                  </Typography>
                  <Box sx={{ px: 2, py: 2 }}>
                    {(innerkey.points).map((point) => (
                      <ul>
                        <li><Typography variant='p' fontSize='1rem' fontWeight='2' >{point}</Typography></li>
                      </ul>
                    ))}
                  </Box>
                </Box>
              </>
            ))}
            </Card>
          </>



        ))}



      </Container>


    </>
  )
}

export default CommonTamplate