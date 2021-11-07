/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { jsx, css } from "@emotion/react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import ContactForm from "./Footer/ContactForm"
import "./layout.css"
import { green } from "@mui/material/colors"
import { ParallaxProvider } from "react-scroll-parallax"
import { makeStyles } from "@mui/styles"

// breakpoints for the layouts
const breakpoints = [576, 768, 1280, 1300, 1440, 1600]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const layoutCentering = {
  [mq[1]]: {
    maxWidth: 600,
  },
  [mq[2]]: {
    maxWidth: 1000,
  },
  [mq[3]]: {
    maxWidth: 1220,
  },
  [mq[4]]: {
    maxWidth: 1320,
  },
  [mq[5]]: {
    maxWidth: 1500,
  },

  margin: `0 auto`,
  padding: `0 1.0875rem 1.45rem`,
}

const theme = createTheme({
  palette:{
    primary:{
      main: "#56C035",
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: "AxiformaRegular!important",
    h1: {
      fontFamily: "AxiformaBlack!important",
      fontSize: "3.3rem",
      ["@media (max-width: 720px)"]: {
        fontSize: "2.3rem",
      },
      ["@media only screen and (max-width: 1400px) and (min-width: 740px)"]:{
        fontSize: "2.3rem",
      }
    },
    h2: {
      fontFamily: "AxiformaBlack!important",
      fontSize: "2.3rem",
      ["@media (max-width: 1388px)"]: {
        fontSize: "1.7rem",
      },
     
      
    },
    h3: {
      fontSize: "1.55rem",
      fontFamily: "AxiformaBlack!important",
      ["@media (max-width: 1388px)"]: {
        fontSize: "1.4rem",
      },
    },
    h4: {
      fontSize: "1rem",
      fontFamily: "AxiformaBlack!important",
    },
    h6: {
      fontSize: "16px!important",
    },
    body1: {
      fontSize: "0.85rem",
      lineHeight: "1.6rem",
      color: "#010009d1",
      ["@media (max-width: 1388px)"]: {
        fontSize: "0.75rem",
      },
      "& b": {
        color: "black",
      },
    },
    body2: {
      fontSize: "0.8rem",
      lineHeight: "1.6rem",
      color: "#020719bf",
      "& b": {
        color: "black",
      },
    },
    p: {
      fontFamily: "AxiformaRegular!important",
      fontSize: "0.8rem",
    },
    subtitle1:{
      fontFamily: "AxiformaMedium!important",
      fontWeight: 600
    },
    subtitle2: {
      fontFamily: "AxiformaMedium!important",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: "50px!important",
          fontFamily: "AxiformaBlack!important",
          border: "2px solid #56C035!important",
          color: "#000000d4",
          borderRadius: "5px!important",
          minWidth: "150px!important",
          textTransform: "capitalize!important",
          fontSize: "14px!important",
          transition: "0.4s",
          "&:hover": {
            color: "white",
            background: "#56C035",
          },
        },
        outlined: {
          color: "black!important",
          backgroundColor: "white",
          border: "2px solid #56C035!important",
          "&:hover": {
            color: "black!important",
            backgroundColor: "#f1f2f3!important",
          },
        },
        containedPrimary: {
          color: "white",
          background: "#56C035!important",
          backgroundColor: "#56C035",
          "&:hover": {
            color: "#56C035!important",
            backgroundColor: "white!important",
          },
        },
      },
    },
    body: {
      fontFamily: "AxiformaRegular!important",
    },
    MuiFormLabel: {
      root: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "AxiformaBlack!important",
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: 14,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 14,
        borderRadius: "0px",
        fieldset: {
          borderColor: "#ADF1F3",
          color: "#5E5C5C",
          fontSize: 15,
        },
        "&:hover fieldset": {
          borderColor: "#ADF1F3",
          color: "#5E5C5C",
          fontSize: 15,
          fontWeight: "bold",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#40D068",
        },
        "& label.Mui-focused": {
          color: "#40D068",
        },
      },
    },
    MuiTypography: {
      root: {
        fontFamily: "AxiformaRegular!important",
      },
      
      subtitle2: {
        fontFamily: "AxiformaBlack!important", 
      },
    },
  },
})

const useStyles = makeStyles({
  enquiryButton: {
    position: "absolute",
    display: "none",
  },
})

const Layout = ({ children, removeContactForm }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <Navbar layout={layoutCentering} />
          <Button className={classes.enquiryButton}>Enquire Form</Button>
          <div css={css(layoutCentering)}>
            <main>{children}</main>
            {!removeContactForm && <ContactForm />}
            <Footer />
          </div>
        </ThemeProvider>
      </ParallaxProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
