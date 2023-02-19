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
        <Typography variant="h3" color="primary" textAlign='center' fontSize='220%' >{props.Data.mainHeading}</Typography>
        <Typography variant='h5' color='teritiary' textAlign='center' fontSize='120%'>Department of Electrical Engineering</Typography>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ borderTop: "7px solid #9d0455", px: 5 }}>
            <hr />
          </Box>
          <Box sx={{ borderTop: "7px solid black", px: 4 }}>
            <hr />
          </Box>
        </Box> */}
        {(props.Data.body).map((key) => (
          <>

            <Card sx={{ display: { xs: 'block', md: 'none' }, my: 3 }}>
              <Typography variant='h5' color='primary' textAlign='center'>{key.subHeading}</Typography>
              {(key.subbody).map((innerkey) => (
                <>
                  <Box sx={{ py: 1, px: 5 }}>
                    <Typography variant='h5' fontSize='100%' >
                      {innerkey.subsubHeading}
                    </Typography>
                    <Box sx={{ px: 1, py: 2 }}>
                      {(innerkey.points).map((point) => (
                        <ul>
                          <li><Typography variant='p' fontSize='80%' fontWeight='2' >{point}</Typography></li>
                        </ul>
                      ))}
                    </Box>
                  </Box>
                </>
              ))}
            </Card>
            <Box sx={{ display: { xs: 'none', md: 'block' }, my: 3 }}>
              <Typography variant='h5' color='primary' textAlign='center'>{key.subHeading}</Typography>
              {(key.subbody).map((innerkey) => (
                <>
                  <Box sx={{ py: 1, px: 5 }}>
                    <Typography variant='h5' fontSize='100%' >
                      {innerkey.subsubHeading}
                    </Typography>
                    <Box sx={{ px: 1, py: 2 }}>
                      {(innerkey.points).map((point) => (
                        <ul>
                          <li><Typography variant='p' fontSize='80%' fontWeight='2' >{point}</Typography></li>
                        </ul>
                      ))}
                    </Box>
                  </Box>
                </>
              ))}
            </Box>
          </>
        ))}
      </Container>


    </>
  )
}

export default CommonTamplate