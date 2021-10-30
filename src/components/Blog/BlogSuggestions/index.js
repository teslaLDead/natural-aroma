import React from "react"
import { Box, Grid } from "@material-ui/core"
import Typography from "common/Typography"
import BlogThumbnail from "../Thumbnail"
import PropTypes from "prop-types";

const BlogSuggestions = ({ title, suggestions }) => {
  return (
    // todo - make this responsive
    <Box my={5} py={3}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <Box style={{ display: "flex", alignItems: "center", height: '100%' }}>
            <Typography variant="h3">{title}</Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} lg={9}>
          {suggestions.map(blog => (
            <Grid item xs={12} lg={4}>
              <Box mx={1}>
                <BlogThumbnail {...blog} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

BlogSuggestions.defaultProps = {
  title: "Title for this page",
  suggestions: [{}, {}, {}],
}

BlogSuggestions.propTypes = {
  title: PropTypes.string,
  suggestions: PropTypes.array,
}

export default BlogSuggestions
