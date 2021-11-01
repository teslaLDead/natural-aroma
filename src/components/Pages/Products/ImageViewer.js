// image viewer for a product
import React, { useState, useEffect } from "react"
import { Grid, Box } from "@mui/material"

import Fade from "react-reveal/Fade"

const classes = {
  hero: {
    width: "100%",
  },
  heroImage:{
    transform: 'scale(1)',
    "& :hover":{
      transform: 'scale(1.1)'
    }
  },
  thumbnailContainer: {
    display: "flex",
  },
  thumbnail: {
    cursor:'pointer',
    maxWidth: 120,
    maxHeight: 120,
    overflow: "hidden",
  },
}
const ImageViewer = ({ images, thumbnail }) => {
  const [displayImages, setDisplayImages] = useState([]) // store images in this state to manipulate the one that will be displayed in the header

  useEffect(() => {
    // sets ids to image here
    console.log(images)
    setDisplayImages(
      images.concat(thumbnail).map((el, index) => {
        return {
          src: el,
          id: index,
          main: index === images.length,
        }
      })
    )
  }, [])

  const makeHeroImage = key => {
    const temp = [...displayImages]
    temp.filter(el => el.main).forEach(el => (el.main = false))
    temp[key].main = true
    setDisplayImages(temp)
  }
  return (
    <Box>
      {displayImages
        .filter(el => el.main)
        .map(el => (
          <Box css={classes.hero}>
            <Fade ssrReveal delay={200} duration={1500}>
              {" "}
              <img css={classes.heroImage} src={el.src} alt={el.name} />
            </Fade>
          </Box>
        ))}
      <Box css={classes.thumbnailContainer}>
        {displayImages
          .filter(el => !el.main)
          .map((el, index) => (
            <Box
              ml={index == 0 || index == displayImages.length - 1 ? 0 : 2}
              onClick={() => makeHeroImage(el.id)}
              css={classes.thumbnail}
            >
              <Fade ssrReveal delay={(index + 1) * 100}>
                <img src={el.src} alt={el.name} />
              </Fade>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default ImageViewer
