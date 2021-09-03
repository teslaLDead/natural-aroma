import React from "react"
import Layout from "../../components/layout"
import AboutPage from "../../components/Pages/About"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, para1, para2, para3, para4 },
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
      />
    </Layout>
  )
}

export default About

export const aboutPageQuery = graphql`
  query MyQuery {
    markdownRemark(id: { eq: "4e46a895-bc1d-5ccf-bff2-cbc4e4a01fb1" }) {
      id
      frontmatter {
        title
        para1
        para2
        para3
        para4
      }
    }
  }
`
