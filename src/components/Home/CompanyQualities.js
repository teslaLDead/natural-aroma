import React from "react"
import { makeStyles } from "@material-ui/core"
import { Box, Grid } from "@material-ui/core"
import Typography from "common/Typography"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles({
  img: {
    maxHeight: 60,
  },
  heroImageContainer: {
    position: "absolute",
    left: 0,
  },
  // todo - make this responsive
  qualitySectionContainer: {
    minHeight: 700,
  },
  heroImageHeadingContainer: {
    position: "relative",
    height: "100%",
  },
  heroImageHeading: {
    // top: "calc(50% - 20px)",
    transform: "translateY(320px)",
  },
  qualityListContainer: {
    height: "100%",
  },
  qualityItemContainer: {
    display: "flex",
    alignItems: "center",
  },
})

const sampleContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nulla ipsum. Donec pretium libero quis orci luctus, sit amet gravida diam scelerisque. 
    `

const Quality = ({ img, title, content }) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} className={classes.qualityItemContainer}>
      <Fade delay={200}>
        <Box py={5} mx={3}>
          <Grid container>
            <Grid xs={3}>
              <Box mx={1}>
                <Fade delay={200}>
                  <img src={img} alt="" className={classes.img} />
                </Fade>
              </Box>
            </Grid>
            <Grid xs={9}>
              <Fade delay={400}>
                <Typography variant="h3">{title}</Typography>
              </Fade>
              <Fade delay={600} duration={1500}>
                <Typography variant="p">{content}</Typography>
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Grid>
  )
}

const CompanyQualities = ({}) => {
  const classes = useStyles()
  return (
    <Box my={5} py={3}>
      <Grid container className={classes.qualitySectionContainer}>
        <Grid item xs={6}>
          <Box className={classes.heroImageContainer}>
            <img
              src="https://ucarecdn.com/9f21e4e0-9353-4165-bb22-4337da58987c/Group43.png"
              alt=""
            />
          </Box>
          <Box className={classes.heroImageHeadingContainer}>
            <Fade delay={200} duration={2500}>
              <Typography
                style={{
                  color: "white",
                  fontSize: 36,
                  fontFamily: "AxiformaBlack",
                  fontWeight: "bold",
                  left: "10%",
                  top: "calc(50% - 20px)",
                  transform: "translateY(320px)",
                  // position: "absolute",
                }}
              >
                WHY CHOOSE US
              </Typography>
            </Fade>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container className={classes.qualityListContainer}>
            <Quality
              img="https://ucarecdn.com/c42d3056-cbd6-4a7a-be00-eef4ec76e894/badge.png"
              title="Utmost Quality"
              content={sampleContent}
            />
            <Quality
              img="https://ucarecdn.com/be3ba870-c38f-4db5-9234-6c5c054d2406/bestprice.png"
              title="Optimum Price"
              content={sampleContent}
            />
            <Quality
              img="https://ucarecdn.com/d538cf5e-06f4-4ed2-a033-be331f868ca9/shelves.png"
              title="Wide Variety"
              content={sampleContent}
            />
            <Quality
              img="https://ucarecdn.com/7d11b42a-0fb6-4a4e-b93f-cda83afb6e6b/customerreview.png"
              title="Customer Oriented"
              content={sampleContent}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CompanyQualities
