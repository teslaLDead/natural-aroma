import React from "react"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { jss, css } from "@emotion/react"

const secondaryHeader = css({
  minHeight: "70vh",
})
const primaryHeader = css({
  minHeight: "90vh",
})

const Header = ({ variant, children }) => {

  return (
    <Grid
      container
      alignItems="center"
      css={variant === "secondary" ? secondaryHeader : primaryHeader}
    >
      {children}
    </Grid>
  )
}

export default Header
