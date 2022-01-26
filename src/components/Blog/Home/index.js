// home page for blogs
import React from "react"
import CategoryNav from "../../Pages/Products/CategoryNav"
import Header from "common/Header"
import BlogThumbnail from "../Thumbnail"
import { Grid, Box, Typography } from "@mui/material"
import { jss, css } from "@emotion/react"
import { Helmet } from "react-helmet"

const quote = css({
  position: "absolute",
  left: "70%",
  ["@media (max-width: 680px)"]: {
    left: 20,
  },
})
const quoteText = css({
  fontSize: 14,
  fontWeight: "bold",
})

const BlogHome = ({ blogs }) => {
  // connect this to the cms
  return (
    <Box mb={5} pb={5}>
      <Helmet>
        <title>Blogs | Essential Oils, Natural Aroma</title>
      </Helmet>
      <Header variant="secondary">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography variant="h1">
              Sharing our Knowledge About Oils and Aroma
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box css={quote}>
              <Box>
                <img src="" alt="" />{" "}
                {/* for the double quote - this can be an image or test */}
              </Box>
              <Box>
                <Typography css={quoteText} variant="subtitle1">
                  Nothing in life is to be feared, it is only to be understood.
                </Typography>
                <Typography css={quoteText} variant="subtitle1">
                  Now is the time to understand more, so that we may fear less.
                </Typography>
              </Box>
              <Box>
                <p css={quoteText}>- Marie Curie</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Header>

      <Box>
        {/* // todo implement pagination  */}
        <Grid container>
          {/* // todo fix this nav bar while scrolling */}
          {/* <Grid item xs={12} lg={2}>
           <CategoryNav categories={[]} /> 
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <Box my={5}>
              <Typography variant="h3" align="center">Blogs Coming Soon</Typography>
            </Box>

            {/* <Grid container>
              {blogs.map(blog => (
                <Grid item xs={12} lg={4}>
                  <BlogThumbnail {...blog} />
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default BlogHome
