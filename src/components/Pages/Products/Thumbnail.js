import React from "react"
// import Button from "common/Button"
import { Link } from "gatsby"
import { Box, Grid, makeStyles, Button, Typography } from "@material-ui/core"
import { Fade } from "react-reveal"

// todo this will require some UX changes due to product name size
const useStyles = makeStyles({
  container: {
    border: "1px solid #ECEAEA",
    margin: "0 15px",
    "&:nth-child(0)": {
      margin: "0 0px",
    },
  },
  imgContainer: {
    display: "flex",
    maxHeight: 300,
    minHeight: 250,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    transform: "scale(1)",
    transition: "all 0.8s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  productName: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
})
const Thumbnail = ({ imageSrc, link, name }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <Fade delay={200}>
          <img className={classes.img} src={imageSrc} alt={name} />
        </Fade>
      </Box>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* need to fix this for bigger names like lavendar oil */}
        <Box className={classes.productName} mx={2}>
          <Fade delay={400}>
            <Typography>
              <b>{name}</b>
            </Typography>
          </Fade>
        </Box>
        <Box mx={2} my={1}>
          <Fade delay={500}>
            <Link to={link}>
              <Button variant="outlined">View Product</Button>
            </Link>
          </Fade>
        </Box>
      </Grid>
    </Box>
  )
}

export default Thumbnail
