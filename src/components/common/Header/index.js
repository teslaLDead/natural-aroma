import React from "react"
import {makeStyles, Grid } from '@material-ui/core';
const useStyles = makeStyles({
    secondaryHeader:{
        minHeight: '70vh'
    },
    primaryHeader:{
        minHeight:'90vh'
    }
})
const Header = ({ variant, children }) => {
    const classes = useStyles()

  return (
    <Grid container alignItems="center" className={variant === 'secondary' ? classes.secondaryHeader : classes.primaryHeader}>
        {children}    
    </Grid>
  )
}

export default Header
