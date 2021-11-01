import React from "react"
import { Box, Grid, Typography, Button } from "@mui/material"
// import Button from "common/Button"
// import Typography from "common/Typography"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const BlogThumbnail = ({ image, title, content, link }) => {
  return (
    <Box                         
      style={{
        border: "1px solid #e3e1e3",
      }}
    >
      <Grid container>
        <img src={image} alt="title" style={{ height: "100%" }} />
      </Grid>
      <Box pt={1} pb={2} px={2}>
        <Box py={1}>
          <Typography style={{ textTransform: "capitalize" }} variant="h4">
            {title}
          </Typography>
        </Box>
        <Typography variant="subtitle2" style={{ opacity: 0.6 }}>{content}</Typography>
        <Box my={1}>
          <Grid container justify="center">
            <Link to={link}>
              <Button variant="outlined">Read More</Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

BlogThumbnail.defaultProps = {
  image:
    "https://ucarecdn.com/c182a4ce-bde2-47b5-870c-d945ca16d0e7/-/preview/600x600/",
  title: "sample title 123",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  link: "/",
}

BlogThumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default BlogThumbnail
