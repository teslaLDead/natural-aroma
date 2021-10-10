// home page for blogs
import React from "react"
import CategoryNav from "../../Pages/Products/CategoryNav"
import Header from "common/Header"
import BlogThumbnail from "../Thumbnail"
import { Grid, Box, makeStyles, Typography } from "@material-ui/core"
import { Helmet } from "react-helmet"

const useStyles = makeStyles({
  quote: {
    position: "absolute",
    right: 0,
  },
})
const BlogHome = ({}) => {
  const classes = useStyles()
  // connect this to the cms
  const blogs = []
  return (
    <Box>
      <Helmet>
        <title>Blogs | Essential Oils, Natural Aroma</title>
      </Helmet>
      <Header variant="secondary">
        Sharing our Knowledge About Oils and Aroma
      </Header>
      <Box className={classes.quote}>
        <Box>
          <img src="" alt="" />{" "}
          {/* for the double quote - this can be an image or test */}
        </Box>
        <Box>
          <Typography variant="subtitle1">
            Nothing in life is to be feared, it is only to be understood.
          </Typography>
          <Typography variant="subtitle1">
            Now is the time to understand more, so that we may fear less.
          </Typography>
        </Box>
        <Box>
          <p>- Marie Curie</p>
        </Box>
      </Box>
      <Box>
        {/* // todo implement pagination  */}
        <Grid container>
          {/* // todo fix this nav bar while scrolling */}
          <Grid item xs={2}>
            <CategoryNav categories={[]} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              {blogs.map(blog => (
                <Grid item xs={4}>
                  <BlogThumbnail {...blog} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BlogHome
