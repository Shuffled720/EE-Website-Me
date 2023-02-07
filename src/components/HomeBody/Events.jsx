import React from "react";
import Event from "./Event";
import { Button, Grid, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
export default function Events() {
    const [news, setNews] = useState(1);
    const newsHandler = () => {
        setNews(1);
    };
    const announcementHandler = () => {
        setNews(0);
    };
    return (

        <>
            <Box sx={{ py: 5 }}>
                <Typography variant="h3">
                    Events
                </Typography>


                <div className="buttons">
                    <Grid
                        container
                        justifyContent="Left"
                        direction="row"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button
                                disableRipple
                                variant={news === 1 ? "contained" : "outlined"}
                                sx={{ borderRadius: 0 }}
                                color="primary"
                                className="news"
                                onClick={newsHandler}
                            >
                                News
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                disableElevation
                                disableRipple
                                variant={news === 0 ? "contained" : "outlined"}
                                sx={{
                                    borderRadius: 0,
                                }}
                                color="primary"
                                onClick={announcementHandler}
                            >
                                Announcement
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider
                        sx={{ bgcolor: "primary.main", borderBottomWidth: 1, opacity: 1 }}
                    />
                    {/* <hr style={{ color: "#9D0455", borderColor:"#9D0455"}}></hr> */}
                    <Grid>
                        {news === 1 ? (
                            <>
                                <Typography>news content</Typography>
                            </>
                        ) : (
                            <>
                                <Typography>Announcement content</Typography>
                            </>
                        )}
                    </Grid>

                    <Grid
                        container
                        justifyContent={{ xs: "center", sm: "left" }}
                        direction="row"
                        alignItems="center"
                        spacing={{ xs: 2, md: 4, sm: 6, lg: 8 }}
                    >
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Event />
                        </Grid>
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Event />
                        </Grid>
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Event />
                        </Grid>
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Event />
                        </Grid>
                        <Grid item xs={10} sm={8} md={6} lg={4}>
                            <Event />
                        </Grid>
                    </Grid>
                </div>
            </Box>


        </>
    );
}
