import React from "react"
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby"
import CompanyLogo from "../../images/company-logo.png"
import AddressIcon from "../../images/icons/address-icon.png"

// social links imports
import linkedin from "../../images/social-icons/linkedin.png"
import facebook from "../../images/social-icons/facebook.png"
import twitter from "../../images/social-icons/twitter.png"
import instagram from "../../images/social-icons/instagram.png"
import { Grid, Typography, Box } from "@mui/material"
import {makeStyles} from "@mui/styles"


// connect with use icons
import mail from "../../images/icons/mail.png"
import phone from "../../images/icons/phone.png"
import telephone from "../../images/icons/telephone.png"

const useStyles = makeStyles({
  footerLinks: {
    ["@media (max-width: 680px)"]: {
      textAlign: "center",
    },
  },
  links: {
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
  },
  contactLink: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: 10,
      fontWeight: 600,
    },
    ["@media (max-width: 680px)"]: {
      justifyContent: "center",
    },
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
    },
    "& :first-child": {
      marginLeft: 0,
    },
  },
}

const Footer = ({}) => {
  const classes = useStyles()
  return (
    <footer>
      <Grid container justifyContent="space-between">
        <Grid item lg={1} xs={12}>
          {/* for logo  */}
          <img src={CompanyLogo} alt="Natural Aroma Logo" />
        </Grid>
        <Grid item lg={3} xs={12}>
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
            <Grid container>
              <Grid item xs={6}>
                <div>
                  <div css={css({ marginTop: 16 })}>
                    <img src={AddressIcon} alt="address 1" />
                    <Typography variant="subtitle2">
                      485A/12A, Dilshad Garden, Industrial Area, G.T Road
                      Delhi-110095
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <div css={css({ marginTop: 16 })}>
                    <img src={AddressIcon} alt="address 1" />
                    <Typography variant="subtitle2">
                      G-22, Udyog Kunj, Industrial Area Ghaziabad, Uttar Pradesh
                      201009
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} className={classes.footerLinks}>
          <h3 css={css(footerCss.subTitles)}>Quick Links</h3>
          <Box className={classes.links}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/FAQ">FAQ</Link>
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} className={classes.footerLinks}>
          <h3 css={css(footerCss.subTitles)}>Products</h3>
          <Box className={classes.links}>
            {/* // todo - make these links dynamic */}
            <Link to="/essential-oils">Essential Oils</Link>
            <Link to="/aroma-oils">Aroma Oils</Link>
            <Link to="/reconstituted-oils">Reconstituted Oils</Link>
            <Link to="/natural-isolates">Natural Isolates</Link>
          </Box>
        </Grid>
        <Grid item lg={2} xs={12} className={classes.footerLinks}>
          <h3 css={css(footerCss.subTitles)}>Connect With Us</h3>
          <Box className={classes.links}>
            {/* // todo - make these links dynamic */}
            <Link className={classes.contactLink} to="/">
              <img src={mail} alt="Natural Aroma Email" />
              <Typography> info@naturalaroma.co</Typography>
            </Link>
            <Link className={classes.contactLink} to="/aroma-oils">
              <img src={phone} alt="Natural Aroma phone number" />
              <Typography>+91 120-2761060</Typography>
            </Link>
            <Link className={classes.contactLink} to="/reconstituted-oils">
              <img src={telephone} alt="Natural Aroma mobile number" />
              <Typography>+91 9891102691</Typography>
            </Link>
            <div css={css(footerCss.socialLinks)}>
              {/* for social links -  */}
              {/* // todo - get social links */}
              <Link to="/">
                <img src={linkedin} alt="Natural Aroma LinkedIn" />
              </Link>
              <Link to="/">
                <img src={facebook} alt="Natural Aroma Twitter" />
              </Link>
              <Link to="/">
                <img src={twitter} alt="Natural Aroma Facebook" />
              </Link>
              <Link to="/">
                <img src={instagram} alt="Natural Aroma Instagram" />
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
