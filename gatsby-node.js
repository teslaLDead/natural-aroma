exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      products: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/productList/" } }
      ) {
        nodes {
          id
          frontmatter {
            name
            description
            thumbnail
            details {
              detail {
                key
                value
              }
            }
            manufacturing_details
            productImages
          }
        }
      }
      productCategories: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/products/productCategories/" }
        }
      ) {
        nodes {
          id
          frontmatter {
            id
            name
          }
        }
      }

      blogCategories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blogs/categories/" } }
      ) {
        nodes {
          id
          frontmatter {
            id
          }
        }
      }

      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blogs/pages/" } }
      ) {
        nodes {
          frontmatter {
            title
            tags
            date
            category
            heroImage
          }
          html
        }
      }
    }
  `)
  // for products
  data.products.nodes.forEach(node => {
    const slug = node.frontmatter.name.split(" ").join("-")
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/components/templates/ProductPageTemplate.js`
      ),
      context: { product: node },
    })
  })

  // product categories
  data.productCategories.nodes.forEach(node => {
    console.log(node)
    const slug = node.frontmatter.id
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/components/templates/ProductCategoryPageTemplate.js`
      ),
      context: { category: node.frontmatter.name },
    })
  })

  // for blog categories
  data.blogCategories.nodes.forEach(node => {
    const slug = node.frontmatter.id
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(
        `./src/components/templates/BlogCategoryPageTemplate.js`
      ),
      context: { catgory: node.frontmatter.id },
    })
  })

  // for blog page
  data.blogs.nodes.forEach(node => {
    const slug = node.frontmatter.title.split(" ").join("-")
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/components/templates/BlogPageTemplate.js`
      ),
      context: { blog: node },
    })
  })
}
