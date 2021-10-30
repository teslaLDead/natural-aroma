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
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import ContactForm from "./Footer/ContactForm"
import "./layout.css"
import { green } from "@material-ui/core/colors"

// breakpoints for the layouts
const breakpoints = [576, 768, 992, 1200, 1600]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const layoutCentering = {
  [mq[1]]: {
    maxWidth: 600,
  },
  [mq[2]]: {
    maxWidth: 800,
  },
  [mq[3]]: {
    maxWidth: 920,
  },
  [mq[4]]: {
    maxWidth: 1500,
  },

  margin: `0 auto`,
  padding: `0 1.0875rem 1.45rem`,
}

const theme = createTheme({
  typography: {
    fontFamily: "AxiformaRegular!important",
    h1: {
      fontFamily: "AxiformaBlack!important",
      fontSize: "3rem",
    },
  },
  palette: {
    primary: green,
  },
  overrides: {
    MuiButton: {
      outlined: {
        border: "2px solid #56C035!important",
      },
    },
    MuiButton: {
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
      contained: {
        color: "white",
        background: "#56C035",
        backgroundColor: "#56C035",
        "&:hover": {
          color: "#56C035",
          backgroundColor: "white",
        },
      },
      outlined: {
        color: "black",
        backgroundColor: "white",
        "&:hover": {
          color: "black",
          backgroundColor: "#f1f2f3",
        },
      },
    },
    body: {
      fontFamily: "AxiformaRegular!important",
    },
    MuiTypography: {
      root: {
        fontFamily: "AxiformaRegular!important",
      },
      h6: {
        fontSize: "16px!important",
      },
      subtitle2: {
        fontFamily: "AxiformaBlack!important",
      },
      h1: {
        fontSize: "3.3rem",
        ["@media (max-width: 720px)"]: {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontFamily: "AxiformaBlack!important",
        fontSize: "2.3rem",
        ["@media (max-width: 720px)"]: {
          fontSize: "1.7rem",
        },
      },
      h3:{
        fontSize:'1.65rem',
        fontFamily: "AxiformaBlack!important",
        ["@media (max-width: 720px)"]: {
          fontSize: "1.55rem",
        },
        
      },
      body1:{
        fontSize:'0.85rem'
      },
      p: {
        fontFamily: "AxiformaRegular!important",
        fontSize:'0.8rem'
      },
    },
  },
})

const Layout = ({ children, removeContactForm }) => {
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
      <ThemeProvider theme={theme}>
        <Navbar layout={layoutCentering} />
        <div css={css(layoutCentering)}>
          <main>{children}</main>
          {!removeContactForm && <ContactForm />}
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
