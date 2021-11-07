import React from "react"
import { makeStyles } from "@mui/styles"
import { Box, Grid, Typography } from "@mui/material"
// import Typography from "common/Typography"
import Fade from "react-reveal/Fade"
import { Parallax } from "react-scroll-parallax"
import { jss, css } from "@emotion/react"

  const imgClass =  css({
    maxHeight: 60,
  })
  const heroImageContainer =  css({
    position: "absolute",
    left: -150,
    ["@media (max-width:680px)"]: {
      position: "relative",
      left: 0
    },
    ["@media only screen and (min-width: 720px) and (max-width: 1280px)"]: {
      left: -500
    },
    ["@media only screen and (min-width: 1281px) and (max-width: 1440px)"]: {
      left: -400
    },
  })
  const heroImageText =  css({
    color: "white",
    fontSize: 36,
    fontFamily: "AxiformaBlack",
    fontWeight: "bold",
    left: "10%",
    top: "calc(50% - 20px)",
    transform: "translateY(320px)",
    ['@media (max-width: 680px)']:{
      transform: 'translateY(-160px)',
      textAlign:'center',
      fontSize: 26
    },
    ["@media only screen and (min-width: 720px) and (max-width: 1388px)"]: {
      fontSize:'1.8rem'
    },
    
    // position: "absolute",
  })

  // todo - make this responsive
  const qualitySectionContainer =  css({
    minHeight: 700,
  })
  const heroImageHeadingContainer =  css({
    position: "relative",
    height: "100%",
  })
  const qualityHeader = css({
    fontSize: '1.35rem'
  })
  const heroImageHeading =  css({
    // top: "calc(50% - 20px)",
    transform: "translateY(320px)",
  })
  const qualityListContainer =  css({
    height: "100%",
  })
  const qualityItemContainer =  css({
    display: "flex",
    alignItems: "center",
  })

const sampleContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nulla ipsum. Donec pretium libero quis orci luctus, sit amet gravida diam scelerisque. 
    `

const Quality = ({ img, title, content }) => {
  return (
    <Grid item xs={12} lg={6}  css={qualityItemContainer}>
      <Fade delay={200}>
        <Box css={css({
          padding: 20
        })}>
          <Grid container>
            <Grid xs={3}>
              <Box mx={1}>
                <Fade delay={200}>
                  <img src={img} alt="" css={imgClass} />
                </Fade>
              </Box>
            </Grid>
            <Grid xs={9}>
              <Fade delay={400}>
                <Box my={2}>
                  <Typography variant="h4" css={qualityHeader}>{title}</Typography>
                </Box>
              </Fade>
              <Fade delay={600} duration={1500}>
                <Typography>{content}</Typography>
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Grid>
  )
}

const CompanyQualities = ({}) => {
  return (
    <Box my={5} py={3}>
      <Grid container css={qualitySectionContainer}>
        <Grid item xs={12} lg={4}>
          <Box css={heroImageContainer}>
            <img
              src="https://ucarecdn.com/9f21e4e0-9353-4165-bb22-4337da58987c/Group43.png"
              alt=""
            />
          </Box>
          <Box css={heroImageHeadingContainer}>
            <Fade delay={200} duration={2500}>
              <Typography css={heroImageText}>
                WHY CHOOSE US
              </Typography>
            </Fade>
          </Box>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Grid container css={qualityListContainer}>
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
