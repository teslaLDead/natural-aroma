exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/productList/" } }
      ) {
        nodes {
          id
          frontmatter {
            name

          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.name.split(' ').join('-')
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/templates/ProductPageTemplate.js`),
      context: { product: node },
    })
  })
}
