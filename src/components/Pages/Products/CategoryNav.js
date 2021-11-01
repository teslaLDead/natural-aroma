import React from "react"
import { Grid, Box } from "@mui/material"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby";
import capitalize  from "lodash/capitalize";
import { jsx, css } from "@emotion/react"

// this sort of navigation can be use across products and blogs

const classes = {
  container: {
    border: '1px solid #f1f1f1'
  },
  item: {
    height: 52,
    display: 'flex',
    alignItems:'center',
    paddingLeft: 10,
    border:'1px solid white',
    fontSize:15,
    transition:'0.4s',
    "&:hover":{
      border:'1px solid #E9E8E8',
    }
  },
  activeItem:{
    border:'1px solid #E9E8E8',
    height: 52,
    display: 'flex',
    alignItems:'center',
    paddingLeft: 10,
    fontSize:15
  },
  activeCategoryName:{
    color:'#40D068',
    fontWeight:'bolder'
  },
  categoryName: {
    fontWeight: 600,
    color:'black'
  },
  count: {
    marginLeft: 10,
    color:'#A8A7A7'
  },
}

const CategoryLink = ({ id, active }) => {
  console.log('id', id)
  return (
    <Box css={active ? classes.activeItem : classes.item}>
      <Link to={"/".concat(id)}>
        <span
          css={active ? classes.activeCategoryName : classes.categoryName}
        >
          {id.split('-').map(el=>capitalize(el)).join(' ')}
        </span>
        <span css={classes.count}>(40)</span>
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
  return (
    <Box css={classes.container}>
      <Box css={classes.item}>
        <p style={{fontSize:13, opacity: 0.5, fontWeight: 'bold'}}>Product Categories</p>
      </Box>
      {data.productCategories.nodes.map(({ frontmatter: { id } }) => (
        <CategoryLink id={id} active={id.split('-').join(' ') === currentCategoryId} />
      ))}
    </Box>
  )
}

export default CategoryNav
