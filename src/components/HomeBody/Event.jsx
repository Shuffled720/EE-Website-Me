import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';

export default function Event() {
  return (
    <div>
      <Card
        sx={{
          minWidth: 300,
          borderRight: 2,
          borderTop: 2,
          borderRadius: 0,
          borderColor: "primary.main",
        }}
        elevation={1}
      >
        <CardContent>
          <Grid
            container
            justifyContent="Left"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                color="primary.main"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "32px",
                }}
              >
                20
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="Left"
                direction="column"
                alignItems="flex-start"
                spacing={0}
              >
                <Grid item>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "18px",
                    }}
                  >
                    Jan
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "9px",
                    }}
                  >
                    Friday, 11:00 AM
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="Left"
            direction="column"
            alignItems="flex-start"
            spacing={0}
                  >
                      <br/>
                                  <Grid item>
              <Typography
                color="gray"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "9px",
                }}
              >
                Event Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="gray"
                sx={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "9px",
                }}
              >
                Event Description
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
