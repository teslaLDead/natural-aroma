import React from "react"
import Header from "common/Header"
import { Grid, Box, Typography } from "@mui/material"
import {makeStyles} from "@mui/styles"

import Fade from "react-reveal"
import { Parallax } from "react-scroll-parallax"
import { Helmet } from "react-helmet"

const useStyles = makeStyles({
  facilityImage: {
    transform: "scale(1)",
    "& :hover": {
      transform: "scale(1.1)",
    },
  },
})

const Infrastructure = () => {
  const classes = useStyles()
  return (
    <div>
      <Helmet>
        <title>Manufacturing & Infrastructure | Natural Aroma Products</title>
      </Helmet>
      <Header variant="secondary">
        <Grid item xs={12} lg={6}>
          <Fade ssrFadeout={true} ssrReveal={true} duration={1500} delay={300}>
            <Typography variant="h1">
              World Class Facilities for Manufacturing & Exporting
            </Typography>
          </Fade>
        </Grid>
      </Header>
      <Box>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography variant="h3">Our Infrastructure</Typography>
            </Box>
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              duration={2500}
              cascade
              delay={300}
            >
              <Box my={2} mt={1}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Box>
              <Box my={3}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Box>
            </Fade>
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              duration={2000}
              cascade
              delay={600}
            >
              <Box mt={5} style={{ marginTop: 100 }}>
                <Typography variant="h3">Quality Control</Typography>
              </Box>
              <Box my={2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Box>
              <Box my={2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} lg={5}>
            {/* // * image section  */}
            {/* // todo add images */}

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box m={1}>
                  <Fade delay={100}>
                    <Parallax y={[-50, 20]}>
                      <img src="https://picsum.photos/id/1/600" alt="" />
                    </Parallax>
                  </Fade>
                </Box>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-30, 25]}>
                    <Fade delay={500}>
                      <img src="https://picsum.photos/id/3/600" alt="" />
                    </Fade>
                  </Parallax>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-30, 15]}>
                    <Fade delay={300}>
                      <img src="https://picsum.photos/id/2/600" alt="" />
                    </Fade>
                  </Parallax>
                </Box>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-20, 15]}>
                    <Fade delay={700}>
                      <img src="https://picsum.photos/id/4/600" alt="" />
                    </Fade>
                  </Parallax>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ marginTop: 150 }}>
        <Grid container>
          <Grid items xs={12} lg={6}>
            <Grid container>
              <Grid item xs={8}>
                <Parallax y={[-20, 10]}>
                  <Box m={1}>
                    <img src="https://picsum.photos/id/200/600" alt="" />
                  </Box>
                </Parallax>
              </Grid>

              <Grid item xs={4}>
                <Parallax y={[-10, 20]}>
                  <Box m={1}>
                    <img src="https://picsum.photos/id/220/600" alt="" />
                  </Box>
                  <Box m={1}>
                    <img src="https://picsum.photos/id/220/600" alt="" />
                  </Box>
                </Parallax>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid items xs={12} lg={5}>
            <Box mt={5}>
              <Fade delay={200}>
                <Typography variant="h3">Certificates and Awards</Typography>
              </Fade>
            </Box>
            <Box my={2}>
              <Fade delay={600}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Fade>
            </Box>
            <Box my={6}>
              <Grid container>
                {[
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                ].map((image, index) => (
                  <Box m={1} mr={2}>
                    <Fade delay={index * 100}>
                      <img src={image} alt="" />
                    </Fade>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box my={2}>
              <Fade dela={200} duration={1500}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ornare arcu odio ut sem nulla pharetra diam sit. Tristique
                  risus nec feugiat in. Turpis egestas maecenas pharetra
                  convallis. Lobortis feugiat vivamus at augue.
                </Typography>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ marginTop: 100 }}>
        <Box my={4}>
          <Typography variant="h3">Manufacturing Facilities</Typography>
        </Box>
        <Grid container spacing={3}>
          {Array.apply(null, Array(6)).map((src, index) => (
            <Grid item lg={3} xs={6}>
              <Fade delay={index * 200}>
                <img
                  className={classes.facilityImage}
                  src={`https://picsum.photos/id/12${index}/600`}
                />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Infrastructure
