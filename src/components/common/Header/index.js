import React from "react"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { jss, css } from "@emotion/react"

const secondaryHeader = {
  minHeight: "70vh",
}
const primaryHeader = {
  minHeight: "90vh",
}

const Header = ({ variant, children }) => {
  return (
    <Grid
      container
      alignItems="center"
      css={css(variant === "secondary" ? secondaryHeader : primaryHeader)}
    >
      {children}
    </Grid>
  )
}

export default Header
