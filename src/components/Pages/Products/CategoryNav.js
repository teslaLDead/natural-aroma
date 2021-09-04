import React from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

// this sort of navigation can be use across products and blogs

const categoryNavStyles = makeStyles({
  container: {},
  item: {},
  categoryName: {},
  count: {},
})

const CategoryLink = ({ id, active }) => {
  const classes = categoryNavStyles()
  return (
    <Box className={classes.item}>
      <Link to={"/".concat(id)}>
        <span
          className={active ? classes.activeCategoryName : classes.categoryName}
        >
          {id}
        </span>
        <span className={classes.count}>40</span>
      </Link>
    </Box>
  )
}

const CategoryNav = ({ currentCategoryId }) => {
  const data = useStaticQuery(graphql`
    query ProductCategoriesQuery {
      productCategories: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/products/productCategories/" }
        }
      ) {
        nodes {
          frontmatter {
            id
          }
        }
      }
    }
  `)
  const classes = categoryNavStyles()
  return (
    <Box className={classes.container}>
      <Box>
        <p>Product Categories</p>
      </Box>
      {data.productCategories.nodes.map(({ frontmatter: { id } }) => (
        <CategoryLink id={id} active={id === currentCategoryId} />
      ))}
    </Box>
  )
}

export default CategoryNav
