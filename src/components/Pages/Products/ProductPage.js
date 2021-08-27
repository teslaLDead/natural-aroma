import React from "react"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import { Box, Grid, makeStyles } from "@material-ui/core"
import Typography from "../../common/Typography"
import ImageViewer from "./ImageViewer"

const sampleCategories = [
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
    active: true,
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
  {
    name: "Essential Oils",
    count: 40,
    link: "/essential-oils",
  },
]

const sampleRelatedProducts = [
  {
    name: "Basil Oil",
    link: "/basil-oil",
    imageSrc: "https://picsum.photos/id/227/200/300",
  },
  {
    name: "Basil Oil",
    link: "/basil-oil",
    imageSrc: "https://picsum.photos/id/227/200/300",
  },
  {
    name: "Basil Oil",
    link: "/basil-oil",
    imageSrc: "https://picsum.photos/id/227/200/300",
  },
  {
    name: "Basil Oil",
    link: "/basil-oil",
    imageSrc: "https://picsum.photos/id/227/200/300",
  },
]
const useStyles = makeStyles({
  mainContent: {
    marginTop: 100,
  },
})

const productDetailStyles = makeStyles({
  detailItem: {},
  property: {
    p: {},
  },
  value: {
    p: {},
  },
})

const ProductDetails = ({ details }) => {
  const classes = productDetailStyles()
  return (
    <>
      {details.map(detail => (
        <Box className={classes.detailItem}>
          <Box className={classes.property}>
            <p>{detail.property}</p>
          </Box>
          <Box className={classes.value}>
            <p>{detail.value}</p>
          </Box>
        </Box>
      ))}
    </>
  )
}

const ProductPage = ({
  name,
  images,
  details,
  descriptions,
  manufacturingDetails,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContent}>
      <Grid container>
        <Grid item xs={2}>
          <CategoryNav categories={sampleCategories} />
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Grid container align="center">
              <Typography variant="h1">{name}</Typography>
            </Grid>
          </Box>
          <ImageViewer images={images} />
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Typography variant="h4">Product Details</Typography>
            <Box>
              <ProductDetails details={details} />
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">Description</Typography>
            <Box>
              {descriptions.map(description => (
                <Box>
                  <Typography>{description}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">Manufacturing Details</Typography>
            <Box>
              {manufacturingDetails.map(detail => (
                <Box>
                  <Typography>{detail}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h3">Related Products</Typography>
      </Box>
      <Box>
        <Grid container>
          {sampleRelatedProducts.map(product => (
            <Grid item xs={3}>
              <Thumbnail {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <BlogSuggestions title="Related blogs" suggestions={[]} />
      </Box>
    </Box>
  )
}

export default ProductPage
