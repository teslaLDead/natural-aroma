import React from "react"
import Header from "common/Header"
import { Grid, Box, Typography } from "@mui/material"
import { jss, css } from "@emotion/react"

import Fade from "react-reveal"
import { Parallax } from "react-scroll-parallax"
import { Helmet } from "react-helmet"

const classes = {
  facilityImage: {
    transform: "scale(1)",
    "& :hover": {
      transform: "scale(1.1)",
    },
  },
}

const Infrastructure = () => {
  return (
    <div>
      <Helmet>
        <title>Manufacturing & Infrastructure | Natural Aroma Products</title>
      </Helmet>
      <Header variant="secondary">
        <Grid item xs={12} xl={6} lg={8}>
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
                  At Natural Aroma, we have an exceptional and well-fabricated
                  infrastructural unit, which is refined with most recent
                  technology & equipment. In accordance with the global quality
                  norms, we keep our infrastructural unit updated with cutting
                  edge instruments guaranteeing product quality and efficiency.
                </Typography>
              </Box>
              <Box my={3}>
                <Typography>
                  We have a state of the art manufacturing plant located in
                  Ghaziabad . All the products manufactured here conform to
                  stringent quality control and comply with GMP standards. Our
                  in-house laboratory is equipped with the latest type of
                  equipment to ensure that quality is maintained for our
                  customers.
                </Typography>
              </Box>
              <Box my={3}>
                <Typography>
                  We manufacture with the planet in mind from the earliest
                  stages of our R&D, evaluating each material against norms that
                  surpass regulatory prerequisites. We ensure that raw materials
                  are inexhaustible or repurposed and sourced in ecologically
                  and socially capable ways. Our plant also has a rain-water
                  harvesting setup and we prefer using piped gas instead of the
                  conventional fuel that is generally used in the industry.
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
                  Our quality control lab ensures that stringent testing of raw
                  materials and the final product is being done to comply with
                  our company standard.
                </Typography>
              </Box>
              <Box my={2}>
                <Typography>
                  Our sprawling manufacturing unit also incorporates a food
                  safety management system consisting of ISO 22000:2005,
                  "ISO/TS22002-1:2009" and additional FSSC 22000 requirements.
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
                      <img
                        src="https://ucarecdn.com/5fc139f6-09dc-4de9-abac-10dd68e23c9d/-/scale_crop/400x400/smart/"
                        alt=""
                      />
                    </Parallax>
                  </Fade>
                </Box>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-30, 25]}>
                    <Fade delay={500}>
                      <img
                        src="https://ucarecdn.com/223cf12d-9ce8-42b6-8164-feea1db66d37/-/scale_crop/400x400/smart/"
                        alt=""
                      />
                    </Fade>
                  </Parallax>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-30, 15]}>
                    <Fade delay={300}>
                      <img
                        src="https://ucarecdn.com/7c58e182-6a2d-4af1-8915-9ca622ba2f9d/-/preview/600x600/"
                        alt=""
                      />
                    </Fade>
                  </Parallax>
                </Box>
                <Box m={1}>
                  {" "}
                  <Parallax y={[-20, 15]}>
                    <Fade delay={700}>
                      <img
                        src="https://ucarecdn.com/ddf9634b-4392-4016-83e8-f78778efa158/-/scale_crop/400x400/smart/"
                        alt=""
                      />
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
                    <img
                      src="https://ucarecdn.com/808eff1b-d278-4209-b4a9-d49328741052/-/scale_crop/600x600/smart/"
                      alt=""
                    />
                  </Box>
                </Parallax>
              </Grid>

              <Grid item xs={4}>
                <Parallax y={[-10, 20]}>
                  <Box m={1}>
                    <img
                      src="https://ucarecdn.com/f62352f5-2d69-4e0f-9a28-fb3a74cd1bd1/-/preview/400x400/"
                      alt=""
                    />
                  </Box>
                  <Box m={1}>
                    <img
                      src="https://ucarecdn.com/2359c26a-1471-41d3-95cb-b664580bfc78/-/scale_crop/500x500/smart/"
                      alt=""
                    />
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
                  R&D lab works tirelessly on new product development and
                  innovation in the existing manufacturing process.
                </Typography>
              </Fade>
            </Box>
            <Box my={6}>
              <Grid container>
                {[
                  "https://ucarecdn.com/cf7354db-c753-41d6-8b49-330aa11dd785/-/preview/200x200/",
                  "https://ucarecdn.com/8839e7f8-160f-4e08-b739-86dcbdf4e21e/-/preview/200x200/",
                  "https://ucarecdn.com/cac898aa-0a18-435f-bb60-527ddf8688fc/-/preview/200x200/",
                  "https://ucarecdn.com/6478408f-27d1-4596-ba7b-bf7b0bcb4620/-/preview/200x200/",
                  // "https://ucarecdn.com/f78e57d9-76eb-4884-88de-50661f634433/-/preview/200x200/",
                ].map((image, index) => (
                  <Box m={1} mr={2}>
                    <Fade delay={index * 100}>
                      <img
                        src={image}
                        alt=""
                        style={{
                          filter: "invert(100%)",
                        }}
                      />
                    </Fade>
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box my={2}>
              <Fade dela={200} duration={1500}>
                <Typography>
                  With the assistance of our well equipped infrastructural unit
                  and quality management system, we have earned certifications
                  from different organizations at international level.
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
          {[
            '2fba2fb0-bfe1-4a36-8323-24a9793868ce',
            'ed08dd29-1639-44b8-8d1d-4710f0bcf7bc',
            '46f24702-f44c-40e3-af0c-e20d5e7b8fdd',
            '01d748fe-6887-4f3f-b462-dd6c1ae0ffab'
          ].map((src, index) => (
            <Grid item lg={3} xs={6}>
              <Fade delay={index * 200}>
                <img
                  css={classes.facilityImage}
                  src={`https://ucarecdn.com/${src}/-/scale_crop/500x500/smart`}
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
