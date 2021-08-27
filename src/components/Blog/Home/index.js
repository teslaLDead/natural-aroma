// home page for blogs
import React from "react"
import CategoryNav from "../../Pages/Products/CategoryNav"
import Header from "common/Header"
import BlogThumbnail from "../Thumbnail"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({})
const BlogHome = ({}) => {
  // connect this to the cms
  const blogs = []
  return (
    <Box>
      <Header variant="secondary">
        Sharing our Knowledge About Oils and Aroma
      </Header>
      <Box>
        <Box>
          <img src="" alt="" />{" "}
          {/* for the double quote - this can be an image or test */}
        </Box>
        <Box>
          <span>
            Nothing in life is to be feared, it is only to be understood.
          </span>
          <span>
            Now is the time to understand more, so that we may fear less.
          </span>
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
            <CategoryNav categories={[]}/>
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