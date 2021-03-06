import React from "react"
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby"
import CompanyLogo from "../../images/Logo.svg"
import AddressIcon from "../../images/icons/address-icon.png"

// social links imports
import linkedin from "../../images/social-icons/linkedin.png"
import facebook from "../../images/social-icons/facebook.png"
import twitter from "../../images/social-icons/twitter.png"
import instagram from "../../images/social-icons/instagram.png"
import { Grid, Typography, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

// connect with use icons
import mail from "../../images/icons/mail.png"
import phone from "../../images/icons/phone.png"
import telephone from "../../images/icons/telephone.png"

const footerLinks = css({
  ["@media (max-width: 680px)"]: {
    textAlign: "center",
  },
})
const links = css({
  display: "flex",
  flexDirection: "column",
  "& a": {
    fontSize: 14,
    fontFamily: "AxiformaMedium",
    marginBottom: 40,
    fontWeight: 600,
    color: "black",
    ["@media (max-width: 680px)"]: {
      marginBottom: 20,
    },
  },
})
const contactLink = css({
  display: "flex",
  alignItems: "center",
  "& p": {
    marginLeft: 10,
    fontWeight: 600,
  },
  ["@media (max-width: 680px)"]: {
    justifyContent: "center",
  },
})

const footerCss = {
  companyAdress: {
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
  },
  subTitles: {
    fontSize: 24,
    fontFamily: "AxiformaBlack",
    color: "black",
  },
  contactLinks: {
    "& > a": {
      display: "flex",
      alignItems: "center",
      "& Typography": {
        marginLeft: 10,
      },
    },
  },
  socialLinks: {
    "& > a": {
      marginLeft: 30,
      ["@media (max-width: 1388px)"]:{
        marginLeft: 10
      }
    },
    "& :first-child": {
      marginLeft: 0,
    },
  },
}

const Footer = ({}) => {
  return (
    <footer>
      <Grid container justifyContent="space-between">
        <Grid
          css={css({
            ["@media (max-width: 680px)"]: {
              textAlign: "center",
            },
          })}
          item
          lg={1}
          xs={12}
        >
          {/* for logo  */}
          <img
            css={css({
              ["@media (max-width: 680px)"]: {
                width: 120,
              },
            })}
            src={CompanyLogo}
            alt="Natural Aroma Logo"
          />
        </Grid>
        <Grid item lg={4} xl={3} xs={12}>
          <div>
            <Typography>
              Our company was founded in 1995 since then we have pioneered in
              the manufacturing of essential oils, aroma chemicals, and natural
              isolates. Our company products are defined by creative adaptation,
              strategic enhancement, revolutionary packaging, and consistent
              innovation. For us, product quality and customer service are of
              the utmost importance.
            </Typography>
          </div>
          <Box my={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div>
                  <div css={css({ marginTop: 16 })}>
                    <img src={AddressIcon} alt="address 1" />
                    <Typography variant="body1">
                      <b>
                        485A/12A, Dilshad Garden, Industrial Area, G.T Road
                        Delhi-110095
                      </b>
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <div css={css({ marginTop: 16 })}>
                    <img src={AddressIcon} alt="address 1" />
                    <Typography variant="body1">
                      <b>
                        G-22, Udyog Kunj, Industrial Area Ghaziabad, Uttar
                        Pradesh 201009
                      </b>
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} css={footerLinks}>
          <Box mb={1}>
          <Typography variant="h4">Quick Links</Typography>
          </Box>
          <Box css={links}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact-us">Contact Us</Link>
            {/* <Link to="/FAQ">FAQ</Link> */}
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} css={footerLinks}>
          <Box mb={1}><Typography variant="h4">Products</Typography></Box>
          <Box css={links}>
            {/* // todo - make these links dynamic */}
            <Link to="/essential-oils">Essential Oils</Link>
            <Link to="/aroma-oils">Aroma Oils</Link>
            {/* <Link to="/reconstituted-oils">Reconstituted Oils</Link> */}
            <Link to="/natural-isolates">Natural Isolates</Link>
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} css={footerLinks}>
          <Box mb={1}><Typography variant="h4">Connect With Us</Typography></Box>
          <Box css={links}>
            {/* // todo - make these links dynamic */}
            <Link css={contactLink} to="/">
              <img src={mail} alt="Natural Aroma Email" />
              <Typography> info@naturalaroma.co</Typography>
            </Link>
            <Link css={contactLink} to="/aroma-oils">
              <img src={phone} alt="Natural Aroma phone number" />
              <Typography>+91 120-2761060</Typography>
            </Link>
            <Link css={contactLink} to="/reconstituted-oils">
              <img src={telephone} alt="Natural Aroma mobile number" />
              <Typography>+91 8860350140</Typography>
            </Link>
            <div css={css(footerCss.socialLinks)}>
              {/* for social links -  */}
              {/* // todo - get social links */}
              <a
                target="_blank"
                href="https://www.instagram.com/naturalaromaproducts/"
              >
                <img src={instagram} alt="Natural Aroma Instagram" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/natural-aroma-products/">
                <img src={linkedin} alt="Natural Aroma LinkedIn" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/Natural-Aroma-Products-Pvt-Ltd-112584390085555/"
              >
                <img src={facebook} alt="Natural Aroma Facebook" />
              </a>
              <a target="_blank" href="https://twitter.com/ProductsAroma">
                <img src={twitter} alt="Natural Aroma twitter" />
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
