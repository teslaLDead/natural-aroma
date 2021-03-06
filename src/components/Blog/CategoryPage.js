import React from "react"
import BlogThumbnail from "./Thumbnail"
import Typography from "common/Typography"
import { Box, Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import CategoryNav from "../Pages/Products/CategoryNav"
import { jss, css } from "@emotion/react"

const header = css({
  // marginTop:150,
  textTransform: "capitalize",
})

const CategoryPage = ({ category }) => {
  const blogs = []
  // pagination will also be required here
  return (
    <>
      <Box css={header} my={5} py={5}>
        {/* <Typography variant="h1">{category.split('-').join(' ')}</Typography> */}
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={2}>
            <CategoryNav categories={[]} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              {blogs.map(blog => (
                <BlogThumbnail {...blog} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CategoryPage
