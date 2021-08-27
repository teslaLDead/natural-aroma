import React from "react"
import BlogThumbnail from "./Thumbnail"
import Typography from "common/Typography"
import { Box, Grid, makeStyles } from "@material-ui/core"
import CategoryNav from "../Pages/Products/CategoryNav"

const useStyles = makeStyles({
  header: {},
})
const CategoryPage = ({ category }) => {
  const classes = useStyles()
  const blogs = []
  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h1">{category}</Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={2}>
            <CategoryNav />
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
