import React from "react"
import { Helmet } from "react-helmet"
import { Box, Grid, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Link } from "gatsby"
import { jss, css } from "@emotion/react"

const heroImage = css({
  width: "100%",
  height: 600,
  objectFit: "cover",
})

const mainContent = css({
  width: "70%",
  "& p": {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    color: "#7A7878",
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
  return (
    <Grid>
      <Box my={5}>
        <img css={heroImage} src={heroImage} alt="hero image" />
      </Box>

      <Grid container justifyContent="center">
        <Box my={2} css={mainContent}>
          <Box my={5}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={8}>
                <Typography css={title} variant="h1">
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
