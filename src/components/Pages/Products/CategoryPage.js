import React from "react"
import { Grid, Box, Typography } from "@mui/material"
import {jss, css} from "@emotion/react"

import { Link } from "gatsby"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import capitalize from "lodash/capitalize"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"

// todos - add lazy laoding to the thumbnail component

const classes = {
  header: {
    margin: "100px 0",
    textTransform: "capitalize",
  },
}

const CategoryPage = ({ category, products }) => {
  console.log("category", category, products)
  const sampleProductArrays = products.map(({ frontmatter }) => (
    <Grid item xs={12} lg={4}>
      <Thumbnail
        thumbnail={frontmatter.thumbnail}
        name={frontmatter.name}
        link={"/".concat(frontmatter.name.split(" ").join("-"))}
      />
    </Grid>
  ))
  return (
    <Box mt={5} pt={5}>
      <Helmet>
        <title>{capitalize(category)} Products | Natural Aroma Products</title>
      </Helmet>
      <Box my={3} mt={5} css={classes.header}>
        <Fade delay={100}>
          <Typography variant="h1">
            {/* product category name */}
            {/* Essential Oils */}
            {category
              .split("-")
              .map(el => capitalize(el))
              .join(" ")}
          </Typography>
        </Fade>
      </Box>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} lg={2}>
          <CategoryNav currentCategoryId={category} />
        </Grid>
        {/* <Grid item xs={1} />{" "} */}
        {/* required for styling and gap in large screen sizes */}
        <Grid item lg={10} xl={9} xs={12}>
          <Grid container spacing={2}>{sampleProductArrays}</Grid>
        </Grid>
      </Grid>
      {/* <Box>
        <BlogSuggestions
          title={category
            .split("-")
            .map(el => capitalize(el))
            .join(" ")
            .concat(" Blogs")}
          suggestions={[]}
        />
      </Box> */}
    </Box>
  )
}

export default CategoryPage
