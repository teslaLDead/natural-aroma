import React from "react"
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby"
import HeroImage from "../../images/get quote image.jpg"
import { Button, Grid } from "@mui/material"

const container = css({
  minHeight: 350,
  margin: "50px 0",
})
const backgroundImage = css({
  width: "100%",
  objectFit: "cover",
  height: "100%",
})
const ContactForm = ({}) => {
  return (
    <Grid container css={container} alignItems="center">
      <div
        css={css({
          position: "absolute",
          left: 0,
          zIndex: -1,
          height: 350,
          // top:0
        })}
      >
        <img
          css={backgroundImage}
          src={HeroImage}
          alt="Get a quote from natural aroma"
        />
      </div>
      <Grid item xs={12} lg={6}>
        <p
          css={css({
            color: "white",
            fontFamily: "AxiformaBlack",
            fontSize: 28,
          })}
        >
          We manufacture and export wide range of oils and aroma products.
        </p>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
        lg={6}
      >
        <div>
          <Link to="/contact-us">
            <Button variant="contained" disableElevation>
              Get a Quote
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  )
}

export default ContactForm
