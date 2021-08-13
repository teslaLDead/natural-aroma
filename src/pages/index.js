import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { jsx, css } from "@emotion/react"
import Typography from "common/Typography"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ActionButton from "../components/common/ActionButton";
import SecondaryButton from "../components/common/SecondaryButton";

import HeroImage1 from '../images/heroimage1.jpg';
import HeroImage2 from '../images/heroimage2.jpg';
import HeroImage3 from '../images/heroimage3.jpg';
import HeroImage4 from '../images/heroimage4.jpg';

import chemical from '../images/chemical.jpg';
import medal from '../images/medal.jpg';
import reliability from '../images/reliability.jpg';
import Products from "../components/Home/Products";
import ComapnyStats from "../components/Home/CompanyStats"

const Header = () => {
  return (
    <header css={css({
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridColumnGap: 15,
    })}>
      {/* for header text */}
      <div css={css({
        gridColumnStart: 1,
        gridColumnEnd: 6,
        alignSelf: 'center'
      })}>
        <h1 css={css({
          // letterSpacing:0,
          display: 'flex',
          flexDirection: 'column'
        })}>
          <span>We Manufacture </span>
          <span> Best Quality Oils </span>
          <span> and Aroma Products</span>
        </h1>
        <div css={css({
          display: 'flex',
          '& a:nth-child(2)': {
            marginLeft: 35
          }
        })}>
          <ActionButton to="/products" title="View Products" />
          <SecondaryButton to="/about" title="Learn About Us" />
        </div>
      </div>

      {/* for header images */}
      <div css={css({
        height: '80%',
        gridColumnStart: 6,
        gridColumnEnd: 13,
        alignSelf: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 100px 1fr',
        position: 'relative',
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
        
        `
      })}>
        <div css={css({
          position: 'absolute',
          width: 520,
          height: 390,
          top: 200,
          left: 350,
          background: "#56C035",
          zIndex: -1
        })}>

        </div>
        <div css={css({
          gridArea: 'heroImage2',
          marginRight: 15,
          marginBottom: 15,
        })}>
          <img src={HeroImage2} alt="hero image1" />
        </div>
        <div css={css({
          gridArea: 'heroImage1'
        })}>
          <img src={HeroImage1} alt="hero image2" />
        </div>

        <div css={css({
          gridArea: 'heroImage4',
          marginRight: 13
        })}>
          <img src={HeroImage4} alt="hero image3" />
        </div>
        <div css={css({
          gridArea: 'heroImage3',
          marginTop: 10
        })}>
          <img src={HeroImage3} alt="hero image4" />
        </div>


      </div>


    </header>
  )
}

const ComapnyProfile = () => {
  return (
    <div css={css({
      marginTop: '8rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gridTemplateAreas: '"grid-1 grid-1 grid-1 . grid-2 grid-2 grid-2"'
    })}>
      <div css={css({
        gridArea: 'grid-1'
      })}>
        <Typography variant="h2">
          COMPANY PROFILE
        </Typography>
        <p css={css({ fontSize: 14 })}>
          Our company was founded in 1995 since then we have pioneered in the manufacturing of essential
          oils, aroma chemicals, and natural isolates. Our company products are defined by creative
          adaptation, strategic enhancement, revolutionary packaging, and consistent innovation. For us,
          product quality and customer service are of the utmost importance.
        </p>
      </div>
      <div css={css({
        gridArea: 'grid-2',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
      })}>
        <div css={css({ alignSelf: 'center', textAlign: 'center' })}>
          <img src={chemical} alt="Provide Aroma Solutions" />
          <p css={css({
            fontSize: 14,
            fontFamily: "AxiformaBlack",
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column'
          })}>
            <span>Provide</span>
            <span>Aroma Solutions</span></p>
        </div>
        <div css={css({ alignSelf: 'center', textAlign: 'center' })}>
          <img src={medal} alt="Eco Friendly" />
          <p css={css({
            fontSize: 14,
            fontFamily: "AxiformaBlack",
            textAlign: 'center'
          })}>Eco Friendly</p>
        </div>
        <div css={css({ alignSelf: 'center', textAlign: 'center' })}>
          <img src={reliability} alt="Reliable and Trustworthy" />
          <p css={css({
            fontSize: 14,
            fontFamily: "AxiformaBlack",
            textAlign: 'center'
          })}>Reliable and Trustworthy</p>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <ComapnyProfile />
    <Products />
    <ComapnyStats clients="625" products="70"/>
  </Layout >
)

export default IndexPage
