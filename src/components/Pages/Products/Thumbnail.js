import React from "react"
import Button from "common/Button"
import Typography from "common/Typography"
import { Link } from "gatsby"
import { Box, Grid, makeStyles } from "@material-ui/core"

// todo this will require some UX changes due to product name size
const useStyles = makeStyles({
  container: {
    border: "1px solid #ECEAEA",
    margin: "0 15px",
    "&:nth-child(0)":{
        margin: "0 0px",
    },
    
  },
  imgContainer:{
      display:'flex',
      maxHeight:300
  },
  img: {
    width: "100%",
  },
  productName: {
    textTransform: "capitalize",
    fontWeight:'bold'
  },
})
const Thumbnail = ({ imageSrc, link, name }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <img className={classes.img} src={imageSrc} alt={name} />
      </Box>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* need to fix this for bigger names like lavendar oil */}
        <Box className={classes.productName} mx={2}>
          <Typography>{name}</Typography>
        </Box>
        <Box mx={2} my={1}>
          <Button variant="secondary" title="View Product" link={link} />
        </Box>
      </Grid>
    </Box>
  )
}

export default Thumbnail
