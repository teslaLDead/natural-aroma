import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { jsx, css } from "@emotion/react"
// import Typography from "common/Typography"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@mui/material"
import Fade from "react-reveal/Fade"
import { Button, Grid, Typography } from "@mui/material"
import HeroImage1 from "../images/heroimage1.jpg"
import HeroImage2 from "../images/heroimage2.jpg"
import HeroImage3 from "../images/heroimage3.jpg"
import HeroImage4 from "../images/heroimage4.jpg"

import chemical from "../images/chemical.jpg"
import medal from "../images/medal.jpg"
import reliability from "../images/reliability.jpg"
import Products from "../components/Home/Products"
import ComapnyStats from "../components/Home/CompanyStats"
import CompanyQualities from "../components/Home/CompanyQualities"
import BlogSuggestions from "../components/Blog/BlogSuggestions"
import { Parallax } from "react-scroll-parallax"
import TypeIt from "typeit-react"
const header = css({
  minHeight: "100vh",
  ["@media (max-width:720px)"]: {
    marginTop: 80,
  },
})
const heroImageBackground = css({
  position: "absolute",
  width: 500,
  height: 380,
  top: 200,
  left: "40%",
  background: "#5ee733",
  zIndex: -1,
  ["@media (max-width: 700px)"]: {
    display: "none",
  },
})
// todo - refactor header to cms integration
const Header = () => {
  return (
    <Grid css={header} container alignItems="center" >
      {/* for Grid text */}
      <Grid item xs={12} lg={6}>
        <Fade
          ssrFadeout={true}
          ssrReveal={true}
          cascade
          duration={1200}
          delay={300}
        >
          <Typography variant="h1">
            We manufacture the best quality{" "}
            <span
              style={{
                padding: "5px 3px",
                color: "#57c036",
                // background: "",
              }}
            >
              {/* // todo - highlight this section  */}
              <TypeIt
                options={{
                  speed: 90,
                  waitUntilVisible: true,
                }}
                getBeforeInit={i => {
                  i.type("Essential Oils ")
                    .pause(800)
                    .delete()
                    .type("Natural Isolates ")
                    .pause(800)
                    .delete()
                    .type("Aroma Chemicals ")
                  return i
                }}
              />
            </span>{" "}
          </Typography>
        </Fade>
        <div
          // className=""
          css={css({
            display: "flex",
            marginTop: 20,
            "& a:nth-child(2)": {
              marginLeft: 35,
            },
          })}
        >
          <Fade ssrReveal={true} delay={300}>
            <Link to="/products">
              <Button color="primary" variant="contained" disableElevation>
                View Products
              </Button>
            </Link>
          </Fade>
          <Fade ssrReveal={true} delay={500}>
            <Box ml={2}>
              <Link to="/about">
                <Button variant="outlined" disableElevation>
                  Learn About Us
                </Button>
              </Link>
            </Box>
          </Fade>
        </div>
      </Grid>
      {/* for Grid images */}
      <Grid item xs={12} lg={6}>
        <Box position="relative">
          <Grid container>
            <Fade ssrReveal delay={100}>
              {/* <div className={classes.heroImageBackground}></div> */}
            </Fade>
            <Grid item xs={6}>
              <Box mt={5} pt={5} mx={3}>
                <Fade
                  ssrFadeout={true}
                  ssrReveal={true}
                  delay={200}
                  duration={1200}
                >
                  <Parallax y={[-30, 30]}>
                    <img src={HeroImage2} alt="hero image1" />
                  </Parallax>
                </Fade>
              </Box>
              <Box mt={3} mx={3}>
                <Fade
                  ssrFadeout={true}
                  ssrReveal={true}
                  delay={550}
                  duration={1500}
                >
                  <Parallax y={[-30, 50]}>
                    <img src={HeroImage4} alt="hero image3" />
                  </Parallax>
                </Fade>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Fade
                ssrFadeout={true}
                ssrReveal={true}
                delay={200}
                duration={1300}
              >
                <Parallax y={[-40, 40]}>
                  <img src={HeroImage1} alt="hero image2" />
                </Parallax>
              </Fade>
              <Box mt={5}>
                <Fade
                  ssrFadeout={true}
                  ssrReveal={true}
                  delay={450}
                  duration={1400}
                >
                  <Parallax y={[-50, 80]}>
                    <img src={HeroImage3} alt="hero image4" />
                  </Parallax>
                </Fade>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

const ComapnyProfile = () => {
  return (
    <Box my={4}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Fade>
            <Box mt={2}>
              <Typography variant="h2">Company Profile</Typography>
            </Box>
          </Fade>
          <Fade delay={400}>
            <Box my={2} textAlign="justify">
              <Typography>
                Our company was founded in 1995 since then we have pioneered in
                the manufacturing of essential oils, aroma chemicals, and
                natural isolates. Our company products are defined by creative
                adaptation, strategic enhancement, revolutionary packaging, and
                consistent innovation. For us, product quality and customer
                service are of the utmost importance.
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid container alignItems="center" item xs={12} lg={6}>
          <Grid container spacing={4}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              item
              lg={4}
              xs={12}
            >
              <Fade delay={100}>
                <img src={chemical} alt="Provide Aroma Solutions" />
              </Fade>
              <Fade delay={500}>
                <p
                  css={css({
                    fontSize: 14,
                    fontFamily: "AxiformaBlack",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  Aroma Solutions
                </p>
              </Fade>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              item
              lg={4}
              xs={12}
            >
              <Fade delay={100}>
                <img src={medal} alt="Eco Friendly" />
              </Fade>
              <Fade delay={500}>
                <p
                  css={css({
                    fontSize: 14,
                    fontFamily: "AxiformaBlack",
                    textAlign: "center",
                  })}
                >
                  Eco Friendly
                </p>
              </Fade>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              item
              lg={4}
              xs={12}
            >
              <Fade delay={100}>
                <img src={reliability} alt="Reliable and Trustworthy" />
              </Fade>
              <Fade delay={500}>
                <p
                  css={css({
                    fontSize: 14,
                    fontFamily: "AxiformaBlack",
                    textAlign: "center",
                  })}
                >
                  Reliable and Trustworthy
                </p>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <ComapnyProfile />
    <Products />
    <ComapnyStats clients={625} products={70} />
    <CompanyQualities />
    {/* <BlogSuggestions title="FROM OUR BLOG" /> */}
  </Layout>
)

export default IndexPage
