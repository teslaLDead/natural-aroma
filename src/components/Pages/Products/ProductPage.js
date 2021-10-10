import React from "react"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import { Box, Button, Grid, makeStyles } from "@material-ui/core"
import Typography from "../../common/Typography"
import ImageViewer from "./ImageViewer"
import { Helmet } from "react-helmet"

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
    marginTop: 120,
  },
})

const productDetailStyles = makeStyles({
  detailItem: {
    border: "1px solid #F1F1F1",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 14,
  },
  property: {
    width: "50%",
    "& p": {
      marginLeft: 10,
      fontWeight: "bold",
      textTransform: "capitalize",
    },
  },
  value: {
    width: "50%",
    "& p": {
      color: "#000000a3",
    },
  },
})

const ProductDetails = ({ details }) => {
  const classes = productDetailStyles()
  return (
    <>
      {details.map(({ detail }) => (
        <Box py={2} className={classes.detailItem}>
          <Box className={classes.property}>
            <p>{detail.key}</p>
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
  productImages,
  details,
  description,
  manufacturing_details,
  thumbnail,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContent}>
      <Helmet>
        <title>{name.toUpperCase()} | Natural Aroma Products</title>
      </Helmet>
      <Grid container>
        <Grid item xs={2}>
          <Box mr={1}>
            <CategoryNav />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box my={2}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography
                style={{
                  textTransform: "capitalize",
                }}
                variant="h2"
              >
                {name}
              </Typography>
              <Button >Bulk Enquiry</Button>
            </Grid>
          </Box>
          <ImageViewer images={productImages} thumbnail={thumbnail} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <Box my={2}>
            <Typography variant="h4">Product Details</Typography>
            <Box>
              <ProductDetails details={details} />
            </Box>
          </Box>
          <Box my={5}>
            <Typography variant="h4">Description</Typography>
            <Box>
              {/* {descriptions.map(description => ( */}
              <Box>
                <Typography style={{ color: "#000000a3" }}>
                  {description}
                </Typography>
              </Box>
              {/* ))} */}
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">Manufacturing Details</Typography>
            <Box>
              {manufacturing_details &&
                manufacturing_details.map(detail => (
                  <Box my={2}>
                    <Typography style={{ color: "#000000a3" }}>
                      {detail}
                    </Typography>
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
          {sampleRelatedProducts.map((product, index) => (
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
