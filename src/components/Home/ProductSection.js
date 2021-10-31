import React from "react"
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby"
import basil from "../../images/basil.jpg"
import Button from "common/Button"
import Fade from "react-reveal/Fade"
import { Parallax } from "react-scroll-parallax"

import { Box, Grid, makeStyles, Typography } from "@material-ui/core"

const style = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12,1fr)",
    // todo - add media query for different screen sizes
    marginTop: 150,
    marginBottom: 150,
  },
  reversedGrid: {
    display: "grid",
    background: "red",
  },
  productCategory: {
    gridColumnStart: 2,
    gridColumnEnd: 6,
  },
  popularProducts: {
    gridColumnStart: 7,
    gridColumnEnd: 11,
    "& .products": {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
    },
  },
  productCategoryReversed: {
    gridColumnStart: 7,
    gridColumnEnd: 12,
  },
  popularProductsReversed: {
    gridColumnStart: 2,
    gridColumnEnd: 6,
    "& .products": {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
    },
  },
  product: {
    textAlign: "center",
  },
  productImage: {
    width: 130,
    height: 130,
    display: "flex",
    overflow: "hidden",
    borderRadius: 200,
    justifyContent: "center",
    border: "4px solid #40D068",
    transition: "transform 1s",
    alignItems: "stretch",
    transform: "scale(1)",
    "& :hover": {
      transform: "scale(1.1)",
    },
  },
  productThumbnail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
}

const useStyles = makeStyles({
  productCategory: {
    marginTop: 200,
    marginBottom: 200,
  },
})
const ProductThumbnail = ({ image, title, link, ind }) => {
  return (
    <Box css={css(style.product)}>
      <Link to={link}>
        <Box css={css(style.productThumbnail)}>
          <Fade delay={(ind + 1) * 100} ssrReveal>
            <Box mb={2} css={css(style.productImage)}>
              <img src={basil} alt={title} />
            </Box>
          </Fade>
          <Typography>
            <Fade delay={(ind + 1) * 200} ssrReveal>
              {" "}
              <b>{title}</b>
            </Fade>
          </Typography>
        </Box>
      </Link>
    </Box>
  )
}

const ProductSection = ({
  title,
  description,
  link,
  popularProducts,
  reversed,
}) => {
  const classes = useStyles()
  // const isMobile = window.screen.width < 600
  return (
    <Box className={classes.productCategory}>
      <Grid container direction={reversed ? "row-reverse" : "row"} spacing={5}>
        <Grid item xs={12} lg={6}>
          <Parallax y={[-20, 20]} disabled={false}>
            <Box>
              <Fade ssrReveal>
                <Box my={2}>
                  <Typography style={{ textAlign: "center" }} variant="h4">
                    Popular {title}
                  </Typography>
                </Box>
              </Fade>
            </Box>
            <Grid container>
              {popularProducts.map((product, ind) => (
                <Grid item xs={12} lg={4}>
                  <ProductThumbnail ind={ind} {...product} />
                </Grid>
              ))}
            </Grid>
          </Parallax>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Parallax y={[-20, 50]} disabled={false}>
            <Box mx={5}>
              <Fade ssrReveal>
                <Typography variant="h3">{title}</Typography>
              </Fade>
              <Fade ssrReveal>
                <Box my={1}>
                  <Typography>{description}</Typography>
                </Box>
              </Fade>
              <Box mt={3}>
                <Button variant="secondary" title={"View " + title} to={link} />
              </Box>
            </Box>
          </Parallax>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductSection
