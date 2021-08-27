import React from 'react';
import Header from "common/Header"
import Typography from "common/Typography";
import { Grid, Box } from "@material-ui/core";
import Facilities from './Facilities';


const Infrastructure = () => {
    return (
        <div>
            <Header variant="secondary">
                <Typography variant="h1">
                    <Grid container>
                        <span>World Class Facilities</span>
                        <span>for Manufacturing & Exporting</span>
                    </Grid>
                </Typography>
            </Header>
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant="h3">
                                Our Infrastructure
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas
                                pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas
                                pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">
                                Quality Control
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas
                                pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas
                                pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        {/* // * image section  */}
                        {/* // todo add images */}
                        <Grid container>
                            <Grid item xs={6}>
                                <img src="" alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src="" alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src="" alt="" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src="" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid items xs={6}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid items xs={6}>
                        <Box>
                            <Typography variant="h3">
                                Certificates and Awards
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container>
                                {[].map(image => <img src="" alt="" />)}
                            </Grid>
                        </Box>
                        <Box>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus nec feugiat in. Turpis egestas maecenas pharetra convallis. Lobortis feugiat vivamus at augue.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Typography variant="h4">
                    Manufacturing Facilities
                </Typography>
                <Facilities />
            </Box>
        </div>
    )
}

export default Infrastructure;