import React from "react"
import { jsx, css } from "@emotion/react"
import Header from "common/Header"
// import Typography from "../../common/Typography"
import { Box, Grid, Typography, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import TeamSection from "./TeamSection"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Industries = [
  {
    src: "https://ucarecdn.com/ee3aae38-d6f4-4909-a983-1ea70f8ca76c/-/preview/50x50/",
    name: "Pharmacy",
  },
  {
    src: "https://ucarecdn.com/c8b3deda-a0e6-4327-a9d0-3cea92d90b9d/-/preview/50x50/",
    name: "Beauty",
  },
  {
    src: "https://ucarecdn.com/40a14d6b-121c-43ed-88d9-ffa13e95da59/-/preview/50x50/",
    name: "Health",
  },
  {
    src: "https://ucarecdn.com/6c745ab4-46c2-4fd9-90f9-7e7feb2c8d75/-/preview/50x50/",
    name: "Retail",
  },
]

const IndustriesSection = ({ industries }) => {
  return (
    <Box style={{ width: "100%" }} my={5} py={3}>
      <Box style={{ textAlign: "left" }} mb={3}>
        <Typography variant="h3">Industries We Serve</Typography>
      </Box>
      <Box style={{ display: "flex" }}>
        {industries.map(industry => (
          <Box mr={5} pr={3}>
            <Box>
              <img
                style={{ maxWidth: 40 }}
                src={industry.src}
                alt={industry.name}
              />
            </Box>
            <Box>
              <Typography>
                <b>{industry.name}</b>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
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

const useStyles = makeStyles({
  header: {
    minHeight: "70vh",
  },
})

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
  const classes = useStyles()
  return (
    <div>
      <Header variant="secondary">
        <Grid item xl={6} xs={12}>
          <Typography variant="h1">{title}</Typography>
        </Grid>
      </Header>

      <Box my={5}>
        <Grid container>
          <Grid item lg={5} xs={12}>
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
                <IndustriesSection industries={Industries} />
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
          <Grid item lg={7} xs={12}>
            {/* // * image grid */}
            {/* // TODO add image source */}
            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                gridTemplateAreas: `
                "grid-item-0 grid-item-1"
                "grid-item-2 grid-item-3"
                "grid-item-4 grid-item-3"
                ". grid-item-5"
              `,
              }}
            >
              {headerImages.map((src, index) => (
                <Box m={1} style={{ gridArea: `grid-item-${index}` }}>
                  {/* <Box m={1} style={{width:'100%'}}> */}
                  <img src={src} />
                  {/* </Box> */}
                </Box>
              ))}
            </Box>
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
