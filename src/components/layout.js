/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { jsx, css } from '@emotion/react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer/Footer";
import ContactForm from "./Footer/ContactForm";
import './layout.css';

// breakpoints for the layouts
const breakpoints = [576, 768, 992, 1200, 1600]
const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

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
      <Navbar layout={layoutCentering}/>
      <div
        css={css(layoutCentering)}

      >

        <main>
          {children}
        </main>
        {!removeContactForm && <ContactForm /> }
        <Footer />
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
