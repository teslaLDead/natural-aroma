import React from "react"
import { Box, Grid } from "@material-ui/core"
import Button from "common/Button"
import Typography from "common/Typography"
import PropTypes from "prop-types"
const BlogThumbnail = ({ image, title, content, link }) => {
  return (
    <Box>
      <Grid container>
        <img src={image} alt="title" style={{height: '100%'}}/>
      </Grid>
      <Box
        pt={1}
        pb={2}
        px={2}
        style={{
          background: "#f3f3f3",
        }}
      >
        <Box py={1}>
          <Typography
            style={{
              fontSize: 18,
              fontFamily: "AxiformaMedium",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography style={{opacity: 0.6}}>{content}</Typography>
        <Box my={1}>
          <Grid container justify="center">
            <Button variant="secondary" link={link} title="Read More" />
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
