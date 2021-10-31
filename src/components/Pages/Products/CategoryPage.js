import React from "react"
import { Grid, Box, makeStyles, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import capitalize from "lodash/capitalize"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"

// todos - add lazy laoding to the thumbnail component

const categoryPageStyles = makeStyles({
  header: {
    margin: "100px 0",
    textTransform: "capitalize",
  },
})

const CategoryPage = ({ category, products }) => {
  console.log("category", category)
  const classes = categoryPageStyles()
  const sampleProductArrays = products.map(({ frontmatter }) => (
    <Grid item xs={12} lg={4}>
      <Thumbnail
        imageSrc={"https://picsum.photos/id/237/300/300"}
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
      <Box my={3} mt={5} className={classes.header}>
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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={2}>
          <CategoryNav currentCategoryId={category} />
        </Grid>
        <Grid item xs={1} />{" "}
        {/* required for styling and gap in large screen sizes */}
        <Grid item lg={9} xs={12}>
          <Grid container spacing={2}>{sampleProductArrays}</Grid>
        </Grid>
      </Grid>
      <Box>
        <BlogSuggestions
          title={category
            .split("-")
            .map(el => capitalize(el))
            .join(" ")
            .concat(" Blogs")}
          suggestions={[]}
        />
      </Box>
    </Box>
  )
}

export default CategoryPage
