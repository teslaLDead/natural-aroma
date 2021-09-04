import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import CategoryPage from "../../components/Pages/Products/CategoryPage"


const ProductPageTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const {
    products: { nodes },
  } = data
  console.log(category, data, nodes, pageContext)

  return (
    <Layout>
      <CategoryPage category={category} products={nodes}/>
    </Layout>
  )
}

export default ProductPageTemplate

export const productPageQuery = graphql`
  query ProductCategory($category: String) {
    products: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/productList/" }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          name
          thumbnail
        }
      }
    }
  }
`
