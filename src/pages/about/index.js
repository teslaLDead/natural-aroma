import React from "react"
import Layout from "../../components/layout"
import AboutPage from "../../components/Pages/About"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        aboutUsParagraphs,
        majorMarkets,
        headerImages,
        ourTeamParagraphs,
        teamMembers,
      },
    },
    imageSharp,
    allImageSharp,
  } = data
  return (
    <Layout>
      <AboutPage
        title={title}
        teamMembers={teamMembers}
        majorMarkets={majorMarkets}
        aboutUsParagraphs={aboutUsParagraphs}
        ourTeamParagraphs={ourTeamParagraphs}
        headerImages={headerImages}
        teamHeroImage={imageSharp}
      />
    </Layout>
  )
}

export default About

export const aboutPageQuery = graphql`
  query MyQuery {
    imageSharp(fluid: { originalName: { eq: "about.jpg" } }) {
      id
      gatsbyImageData(breakpoints: 1)
      resize(width: 1920) {
        src
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/content/about/index.md/" }) {
      id
      frontmatter {
        title
        majorMarkets
        aboutUsParagraphs
        ourTeamParagraphs
        headerImages
        teamMembers {
          member {
            memberImage
            memberName
            memberDesignation
          }
        }
      }
    }
  }
`
