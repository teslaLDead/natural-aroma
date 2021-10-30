import React from "react"
import Layout from "../layout"
import CategoryPage from "../Blog/CategoryPage"
import { Grid, Box } from "@material-ui/core"
import BlogPage from "../Blog/Page"
import CategoryNav from "../Pages/Products/CategoryNav"

const Home = ({ pageContext }) => {
  console.log("blog page context", pageContext)
  const {
    blog: {
      frontmatter: { category, date, heroImage, tags, title },
      html: content,
    },
  } = pageContext
  console.log(title, heroImage, category, date, tags, content)
  return (
    <Layout>
      <Box id="main-blog-content" style={{ marginTop: 150 }}>
        {/* <Grid container>
          <Grid item xs={2}>
            <Box my={1}>
              <CategoryNav category={category} />
            </Box>
          </Grid>
          <Grid item xs={10}> */}
        <BlogPage
          title={title}
          category={category}
          date={date}
          heroImage={heroImage}
          content={content}
        />
        {/* </Grid>
        </Grid> */}
      </Box>
    </Layout>
  )
}
export default Home
