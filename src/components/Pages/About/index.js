import React from "react"
import { jsx, css } from "@emotion/react"
import Header from "../../common/Header"
// import Typography from "../../common/Typography"
import { Box, Grid, Typography } from "@mui/material"

import { Link } from "gatsby"
import TeamSection from "./TeamSection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { Parallax } from "react-scroll-parallax"
import { Helmet } from "react-helmet"

const Industries = [
  {
    src: "https://ucarecdn.com/ee3aae38-d6f4-4909-a983-1ea70f8ca76c/-/preview/50x50/",
    name: "Pharmacy",
  },
  {
    src: "https://ucarecdn.com/c8b3deda-a0e6-4327-a9d0-3cea92d90b9d/-/preview/50x50/",
    name: "Beauty",
  },
  {
    src: "https://ucarecdn.com/40a14d6b-121c-43ed-88d9-ffa13e95da59/-/preview/50x50/",
    name: "Health",
  },
  {
    src: "https://ucarecdn.com/6c745ab4-46c2-4fd9-90f9-7e7feb2c8d75/-/preview/50x50/",
    name: "Retail",
  },
]

const IndustriesSection = ({ industries }) => {
  return (
    <Box style={{ width: "100%" }} my={5} py={3}>
      <Box style={{ textAlign: "left" }} mb={3}>
        <Fade delay={200}>
          <Typography variant="h3">
            <Box textAlign={{ xs: "center", lg: "left" }}>
              Industries We Serve
            </Box>
          </Typography>
        </Fade>
      </Box>
      <Grid container spacing={5}>
        {industries.map(industry => (
          <Grid item xs={6} lg={3}>
            <Box>
              <Fade delay={200}>
                <img
                  style={{ maxWidth: 40 }}
                  src={industry.src}
                  alt={industry.name}
                />
              </Fade>
            </Box>
            <Fade delay={500}>
              <Box>
                <Typography>
                  <b>{industry.name}</b>
                </Typography>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const MajorMarkets = ({ markets }) => {
  return (
    <Box textAlign={{ xs: "center", lg: "left" }} fontWeight="bold">
      <Grid container justifyContent={{ xs: "center", lg: "flex-start" }}>
        <Grid item xs={6}>
          <Fade cascade duration={1200} delay={500}>
            {markets.slice(0, markets.length / 2 + 1).map(market => (
              <Box my={2}>
                <Typography style={{ textTransform: "capitalize" }}>
                  {market}
                </Typography>
              </Box>
            ))}
          </Fade>
        </Grid>
        <Grid item xs={6}>
          <Fade cascade duration={1200} delay={800}>
            {markets.slice(markets.length / 2 + 1).map(market => (
              <Box my={2}>
                <Typography style={{ textTransform: "capitalize" }}>
                  {market}
                </Typography>
              </Box>
            ))}
          </Fade>
        </Grid>
      </Grid>
    </Box>
  )
}

const classes = {
  header: {
    minHeight: "70vh",
  },
  headerImage: {
    maxHeight: 400,
  },
}
const AboutPage = ({
  title,
  teamMembers,
  aboutUsParagraphs,
  ourTeamParagraphs,
  majorMarkets,
  headerImages,
  teamHeroImage,
}) => {
  const teamImage = getImage(teamHeroImage)
  return (
    <div>
      <Helmet>
        <title>About Us | Natural Aroma Products</title>
      </Helmet>
      <Header variant="secondary">
        <Grid item xl={6} lg={8} xs={12}>
          <Fade
            ssrFadeout={true}
            ssrReveal={true}
            cascade
            duration={1200}
            delay={300}
          >
            <Typography variant="h1">{title}</Typography>
          </Fade>
        </Grid>
      </Header>

      <Box my={5}>
        <Grid container spacing={2}>
          <Grid item xl={5} lg={6} xs={12}>
            {/* into section  */}
            <Box mb={1}>
              {/* intro heading */}
              <Fade
                ssrFadeout={true}
                ssrReveal={true}
                cascade
                duration={1100}
                delay={300}
              >
                <Typography variant="h3">About Us</Typography>
              </Fade>
            </Box>
            <Box my={4}>
              {/* intro paras */}
              {aboutUsParagraphs.map(para => (
                <Box my={4} py={1}>
                  <Fade
                    ssrFadeout={true}
                    ssrReveal={true}
                    cascade
                    duration={1500}
                    delay={500}
                  >
                    <Typography>{para}</Typography>
                  </Fade>
                </Box>
              ))}
            </Box>
            <Box>
              {/* industries that are served */}
              <Grid container align="center">
                <IndustriesSection industries={Industries} />
              </Grid>
            </Box>
            <Box my={3} py={1}>
              {/* major market section  */}
              <Box>
                <Fade
                  ssrFadeout={true}
                  ssrReveal={true}
                  cascade
                  duration={1100}
                  delay={300}
                >
                  <Typography variant="h3">
                    <Box textAlign={{ xs: "center", lg: "left" }}>
                      Major Markets
                    </Box>
                  </Typography>
                </Fade>
              </Box>
              <MajorMarkets markets={majorMarkets} />
            </Box>
            <Box my={1} mb={6} pb={4} textAlign={{ xs: "center", lg: "left" }}>
              <Typography>
                <b>
                  <Link to="/about/infrastructure">Learn more</Link> about our
                  infrastructure and manufacturing facilities
                </b>
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} xl={7} xs={12}>
            {/* // * image grid */}
            {/* // TODO add image source */}

            <Grid container spacing={3}>
              {headerImages.map((src, index) => (
                <Grid container alignItems="center" item xs={6}>
                  <Parallax y={[-10, 5 * index]}>
                    <Fade delay={150 * index}>
                      <img src={src} css={classes.headerImage} />
                    </Fade>
                  </Parallax>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Box my={2} mt={4} py={1}>
            <Typography variant="h3">OUR TEAM</Typography>
            {/* {ourTeamParagraphs.map(para => (
              <Box my={4} py={1}>
                <Fade
                  ssrFadeout={true}
                  ssrReveal={true}
                  cascade
                  duration={1200}
                  delay={300}
                >
                  <Typography>{para}</Typography>
                </Fade>
              </Box>
            ))} */}
          </Box>
        </Grid>

        <Box mt={5}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Fade duration={1500}>
                  <GatsbyImage
                    image={teamImage}
                    alt="Team image"
                    width={1920}
                  />
                </Fade>
              </Box>
              {/* // add member list */}
              <TeamSection members={teamMembers} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default AboutPage
