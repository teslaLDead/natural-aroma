import React from "react"
import Layout from "../../components/layout"
import AboutPage from "../../components/Pages/About"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, para1, para2, para3, para4, major_markets },
    },
  } = data
  return (
    <Layout>
      <AboutPage
        title={title}
        para1={para1}
        para2={para2}
        para3={para3}
        para4={para4}
        major_markets={major_markets}
      />
    </Layout>
  )
}

export default About

export const aboutPageQuery = graphql`
query MyQuery {
    markdownRemark(fileAbsolutePath: {regex: "/content/about/index.md/"}) {
      id
      frontmatter {
        title
        para1
        para2
        para3
        para4
        major_markets
      }
    }
  }
  
`
