import React from "react"
import { jsx, css } from "@emotion/react"
// import Header from "common/Header";
import Typography from "../../common/Typography"
import Header from "../../common/Header"
import { Box, Grid } from "@material-ui/core"
import { Link } from "gatsby"
import TeamSection from "./TeamSection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndustriesSection = ({ industries }) => {
  return (
    <>
      {industries.map(industry => (
        <Box>
          <Box>
            <img src={industry.imageSrc} alt={industry.name} />
          </Box>
          <Box>
            <Typography>{industry.name}</Typography>
          </Box>
        </Box>
      ))}
    </>
  )
}

const MajorMarkets = ({ markets }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        {markets.slice(0, markets.length / 2 + 1).map(market => (
          <Box my={2}>
            <Typography>{market}</Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={6}>
        {markets.slice(markets.length / 2 + 1).map(market => (
          <Box my={2}>
            <Typography>{market}</Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}

const AboutPage = ({
  title,
  teamMembers,
  aboutUsParagraphs,
  ourTeamParagraphs,
  majorMarkets,
  headerImages,
  teamHeroImage,
}) => {
  const teamImage = getImage(teamHeroImage)
  return (
    <div>
      <Header variant="secondary">
        <Typography variant="h1">{title}</Typography>
      </Header>

      <Box my={5}>
        <Grid container>
          <Grid item xs={6}>
            {/* into section  */}
            <Box mb={1}>
              {/* intro heading */}
              <Typography variant="h3">About Us</Typography>
            </Box>
            <Box my={4}>
              {/* intro paras */}
              {aboutUsParagraphs.map(para => (
                <Box my={4} py={1}>
                  <Typography>{para}</Typography>
                </Box>
              ))}
            </Box>
            <Box>
              {/* industries that are served */}
              <Grid container align="center">
                <IndustriesSection industries={[]} />
              </Grid>
            </Box>
            <Box my={3} py={1}>
              {/* major market section  */}
              <Box>
                <Typography variant="h3">Major Markets</Typography>
              </Box>
              <MajorMarkets markets={majorMarkets} />
            </Box>
            <Box my={1} mb={6} pb={4}>
              <Typography>
                <b>
                  <Link to="/infrastructure">Learn more</Link> about our
                  infrastructure and manufacturing facilities
                </b>
              </Typography>
            </Box>

            <Box my={2} mt={4} py={1}>
              <Typography variant="h3">OUR TEAM</Typography>
              {ourTeamParagraphs.map(para => (
                <Box my={4} py={1}>
                  <Typography>{para}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            {/* // * image grid */}
            {/* // TODO add image source */}
            <Grid container>
              {headerImages.map(({ node: { gatsbyImageData } }, index) => (
                <Grid item xs={6}>
                  <Box>
                    <GatsbyImage
                      image={getImage(gatsbyImageData)}
                      height={600}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <GatsbyImage image={teamImage} alt="Team image" width={1920} />
              </Box>
              {/* // add member list */}
              <TeamSection members={teamMembers} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default AboutPage
