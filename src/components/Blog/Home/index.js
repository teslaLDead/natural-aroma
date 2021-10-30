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
    left: "70%",
  },
  quoteText: {
    fontSize: 14,
    fontWeight: "bold",
  },
})
const BlogHome = ({ blogs }) => {
  const classes = useStyles()
  // connect this to the cms
  return (
    <Box mb={5} pb={5}>
      <Helmet>
        <title>Blogs | Essential Oils, Natural Aroma</title>
      </Helmet>
      <Header variant="secondary">
        Sharing our Knowledge About Oils and Aroma
        <Box className={classes.quote}>
          <Box>
            <img src="" alt="" />{" "}
            {/* for the double quote - this can be an image or test */}
          </Box>
          <Box>
            <Typography className={classes.quoteText} variant="subtitle1">
              Nothing in life is to be feared, it is only to be understood.
            </Typography>
            <Typography className={classes.quoteText} variant="subtitle1">
              Now is the time to understand more, so that we may fear less.
            </Typography>
          </Box>
          <Box>
            <p className={classes.quoteText}>- Marie Curie</p>
          </Box>
        </Box>
      </Header>

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
