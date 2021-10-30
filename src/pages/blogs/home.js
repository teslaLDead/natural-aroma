import React from "react"
import Layout from "../../components/layout"
import BlogHome from "../../components/Blog/Home"
import { graphql } from "gatsby"
const Page = ({ data }) => {
  console.log('blogs',data)
  const {
      blogs : {
          nodes
      }
  } = data
  return (
    <Layout removeContactForm>
      <BlogHome blogs={nodes}/>
    </Layout>
  )
}
export default Page

export const blogHomeQuery = graphql`
  query BlogQuery {
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blogs/pages/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          category
          heroImage
        }
      }
    }
  }
`
