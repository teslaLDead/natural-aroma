import React from "react"
import { Box, Grid } from "@material-ui/core"
import Typography from "common/Typography"
import BlogThumbnail from "../Thumbnail"

const BlogSuggestions = ({ title, suggestions }) => {
  return (
    <Box my={5}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h3">{title}</Typography>
        </Grid>

        {suggestions.map(blog => (
          <Grid item xs={6}>
            <BlogThumbnail {...blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogSuggestions
