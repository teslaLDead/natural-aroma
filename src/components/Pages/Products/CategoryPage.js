import React from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"
import Typography from "common/Typography"
import { Link } from "gatsby"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import capitalize from "lodash/capitalize"

// todos - add lazy laoding to the thumbnail component

const sampleCategories = [
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
    active: true,
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
]

const categoryPageStyles = makeStyles({
  header: {
    margin: "100px 0",
  },
})

const CategoryPage = ({ category, products }) => {
    console.log(products)
  const classes = categoryPageStyles()
  const sampleProductArrays = products.map(({frontmatter}) => (
    <Grid item xs={4}>
      <Thumbnail
        imageSrc={"https://picsum.photos/id/237/300/300"}
        name={frontmatter.name}
        link={"/".concat(frontmatter.name.split(" ").join("-"))}
      />
    </Grid>
  ))
  return (
    <Box mt={5} pt={5}>
      <Box my={3} mt={5} className={classes.header}>
        <Typography variant="h1">
          {/* product category name */}
          {/* Essential Oils */}
          {category
            .split("-")
            .map(el => capitalize(el))
            .join(" ")}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <CategoryNav currentCategoryId={category} />
        </Grid>
        <Grid item xs={1} />{" "}
        {/* required for styling and gap in large screen sizes */}
        <Grid item xs={9}>
          <Grid container>
            {/* {products.map(product =>
                            <Grid item xs={4}>
                                <Thumbnail {...product} />
                            </Grid>
                        )} */}
            {sampleProductArrays}
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <BlogSuggestions title={"Essential Oil Blogs"} suggestions={[]} />
      </Box>
    </Box>
  )
}

export default CategoryPage
