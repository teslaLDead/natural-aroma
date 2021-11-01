import React from "react"
import { Helmet } from "react-helmet"
import { Box, Grid, Typography, Button } from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Link } from "gatsby"

const useStyles = makeStyles({
  title: {
    textTransform: "capitalize",
  },
  heroImage: {
    width: "100%",
    height: 600,
    objectFit: "cover",
  },
  mainContent: {
    width: "70%",
    "& p": {
      fontSize: 14,
      marginTop: 20,
      marginBottom: 20,
      color: "#7A7878",
    },
  },
})

const Tag = ({ link }) => {
  return (
    <Link to={link}>
      <Button>{link}</Button>
    </Link>
  )
}
const createMarkup = content => {
  return {
    __html: content,
  }
}
const BlogPage = ({ title, category, date, tags, heroImage, content }) => {
  const classes = useStyles()
  return (
    <Grid>
      <Box my={5}>
        <img className={classes.heroImage} src={heroImage} alt="hero image" />
      </Box>

      <Grid container justifyContent="center">
        <Box my={2} className={classes.mainContent}>
          <Box my={5}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={8}>
                <Typography className={classes.title} variant="h1">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {tags && tags.map(el => <Tag link={el} />)}
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default BlogPage
