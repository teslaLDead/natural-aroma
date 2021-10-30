import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { jsx, css } from "@emotion/react"
// import Typography from "common/Typography"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box } from "@material-ui/core"
import ActionButton from "../components/common/ActionButton"
import SecondaryButton from "../components/common/SecondaryButton"
import Fade from "react-reveal/Fade"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core"
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
// import { Typography } from "@material-ui/core"
const useStyles = makeStyles({
  header: {
    minHeight: "100vh",
    ['@media (max-width:720px)']:{
      marginTop:80
    }
  },
  heroImageBackground: {
    position: "absolute",
    width: 520,
    height: 390,
    top: 200,
    left: 350,
    background: "#56C035",
    zIndex: -1,
    ["@media (max-width: 700px)"]: {
      display: "none",
    },
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.header} container alignItems="center">
      {/* for Grid text */}
      <Grid item xs={12} lg={6}>
        <Typography variant="h1"
          css={css({
            // letterSpacing:0,
            display: "flex",
            flexDirection: "column",
          })}
        >
          <Fade
            ssrFadeout={true}
            ssrReveal={true}
            cascade
            duration={1200}
            delay={300}
          >
            <span>We Manufacture </span>
            <span> Best Quality Oils </span>
            <span> and Aroma Products</span>
          </Fade>
        </Typography>
        <div
          css={css({
            display: "flex",
            "& a:nth-child(2)": {
              marginLeft: 35,
            },
          })}
        >
          <Fade ssrReveal={true} delay={300}>
            <Link to="/products">
              <Button variant="contained" disableElevation>
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
        <div
          css={css({
            height: "80%",
            alignSelf: "center",
            display: "grid",
            gridTemplateColumns: "1fr 100px 1fr",
            position: "relative",
            gridTemplateAreas: `
        ". heroImage1 heroImage1 "
        ". heroImage1 heroImage1 "
        "heroImage2 heroImage1 heroImage1"
        "heroImage2 heroImage1 heroImage1"
        "heroImage2 heroImage3 heroImage3"
        ". heroImage3 heroImage3"
        "heroImage4 heroImage3 heroImage3"
        "heroImage4 heroImage3 heroImage3"
        "heroImage4 heroImage3 heroImage3"
        "heroImage4 heroImage3 heroImage3"
        "heroImage4 . ."
        
        `,
          })}
        >
          <Fade ssrReveal delay={100}>
            <div className={classes.heroImageBackground}></div>
          </Fade>

          <div
            css={css({
              gridArea: "heroImage2",
              marginRight: 15,
              marginBottom: 15,
            })}
          >
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              delay={200}
              duration={1200}
            >
              <img src={HeroImage2} alt="hero image1" />
            </Fade>
          </div>

          <div
            css={css({
              gridArea: "heroImage1",
            })}
          >
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              delay={200}
              duration={1300}
            >
              <img src={HeroImage1} alt="hero image2" />
            </Fade>
          </div>

          <div
            css={css({
              gridArea: "heroImage4",
              marginRight: 13,
            })}
          >
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              delay={550}
              duration={1500}
            >
              <img src={HeroImage4} alt="hero image3" />
            </Fade>
          </div>
          <div
            css={css({
              gridArea: "heroImage3",
              marginTop: 10,
            })}
          >
            <Fade
              ssrFadeout={true}
              ssrReveal={true}
              delay={450}
              duration={1400}
            >
              <img src={HeroImage3} alt="hero image4" />
            </Fade>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

const ComapnyProfile = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Fade>
          <Typography variant="h2">COMPANY PROFILE</Typography>
        </Fade>
        <Fade delay={400}>
          <p css={css({ fontSize: 14 })}>
            Our company was founded in 1995 since then we have pioneered in the
            manufacturing of essential oils, aroma chemicals, and natural
            isolates. Our company products are defined by creative adaptation,
            strategic enhancement, revolutionary packaging, and consistent
            innovation. For us, product quality and customer service are of the
            utmost importance.
          </p>
        </Fade>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={4}
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
                <span>Provide</span>
                <span>Aroma Solutions</span>
              </p>
            </Fade>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={4}
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
            xs={4}
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
    <BlogSuggestions title="FROM OUR BLOG" />
  </Layout>
)

export default IndexPage
