import React from "react";
import { Link } from "gatsby";
import { jsx, css } from "@emotion/react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
const BlogCategories = ({navBarLinks}) => {
    const blogs = useStaticQuery(graphql`
      query MyQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "content/blogs/categories/" } }
        ) {
          edges {
            node {
              frontmatter {
                id
                name
              }
            }
          }
        }
      }
    `)
    return (
      <>
        {blogs.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { id, name },
            },
          }) => (
            <Link css={css(navBarLinks)} to={"/blogs/id"}>
              {name}
            </Link>
          )
        )}
      </>
    )
  }
  
  export default BlogCategories