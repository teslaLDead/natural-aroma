// image viewer for a product
import React, { useState, useEffect } from "react"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  hero: {
    width: "100%",
  },
  thumbnailContainer: {
    display: "flex",
  },
  thumbnail: {
    maxWidth: 120,
    maxHeight: 120,
    overflow: "hidden",
  },
})
const ImageViewer = ({ images }) => {
  const classes = useStyles()
  const [displayImages, setDisplayImages] = useState([]) // store images in this state to manipulate the one that will be displayed in the header

  useEffect(() => {
    // sets ids to image here
    setDisplayImages(
      images.map((el, index) => {
        el.id = index
        return el
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
          <Box className={classes.hero}>
            <img src={el.src} alt={el.name} />
          </Box>
        ))}
      <Box className={classes.thumbnailContainer}>
        {displayImages
          .filter(el => !el.main)
          .map(el => (
            <Box
              onClick={() => makeHeroImage(el.id)}
              className={classes.thumbnail}
            >
              <img src={el.src} alt={el.name} />
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default ImageViewer
