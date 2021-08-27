import React from "react"
import { Box, Grid } from "@material-ui/core"
import Button from "common/Button"
import Typography from "common/Typography"
const sampleImageUrl = "https://picsum.photos/10/300/300"
const BlogThumbnail = ({ image, title, content, link }) => {
  return (
    <Box>
      <Box>
        <img src={sampleImageUrl} alt="title" />
      </Box>
      <Box>
        <Typography>{title}</Typography>
        <Typography>{content}</Typography>
      </Box>
      <Box>
        <Grid container justify="center">
          <Button variant="secondary" link={link} title="Read More" />
        </Grid>
      </Box>
    </Box>
  )
}

export default BlogThumbnail
