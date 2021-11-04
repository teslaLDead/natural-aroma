import React, { useState } from "react"
import Thumbnail from "./Thumbnail"
import BlogSuggestions from "../../Blog/BlogSuggestions"
import CategoryNav from "./CategoryNav"
import { Box, Button, Grid, Typography } from "@mui/material"
import {jss, css} from "@emotion/react"

// import Typography from "../../common/Typography
import ImageViewer from "./ImageViewer"
import { Helmet } from "react-helmet"
import { Fade } from "react-reveal"
import BulkInquiryForm from "./BulkInquiryForm"

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


const classes = {
  mainContent: {
    marginTop: 120,
  },
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
}

const ProductDetails = ({ details }) => {
  return (
    <>
      {details.map(({ detail }) => (
        <Box py={2} css={classes.detailItem}>
          <Box css={classes.property}>
            <p>{detail.key}</p>
          </Box>
          <Box css={classes.value}>
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
  relatedProducts
}) => {
  const [enquiryFormOpen, setEnquiryFormOpen] = useState(false)
  const closeEnquiryForm = () => setEnquiryFormOpen(false)
  const openEnquiryForm = () => setEnquiryFormOpen(true)
  return (
    <Box css={classes.mainContent}>
      <BulkInquiryForm
        product={name.toUpperCase()}
        open={enquiryFormOpen}
        handleClose={closeEnquiryForm}
      />
      <Helmet>
        <title>{name.toUpperCase()} | Natural Aroma Products</title>
      </Helmet>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} lg={2}>
          <Box mr={1}>
            <CategoryNav />
          </Box>
        </Grid>
        <Grid item lg={5} xl={4} xs={12}>
          <Box my={2}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Fade ssrReveal delay={200}>
                <Typography
                  style={{
                    textTransform: "capitalize",
                  }}
                  variant="h2"
                >
                  {name}
                </Typography>
              </Fade>
              <Fade ssrReveal delay={400}>
                <Button variant="outlined" onClick={openEnquiryForm}>Bulk Enquiry</Button>
              </Fade>
            </Grid>
          </Box>
          <Fade ssrReveal delay={600}>
            <ImageViewer images={productImages} thumbnail={thumbnail} />
          </Fade>
        </Grid>
        {/* <Grid item lg={0} xl={1} /> */}
        <Grid item lg={5} xl={5} xs={12}>
          <Box my={2}>
            <Typography variant="h4">Product Details</Typography>
            <Box>
              <ProductDetails details={details} />
            </Box>
          </Box>
          <Box my={5}>
            <Fade ssrReveal delay={600}>
              <Typography variant="h4">Description</Typography>
            </Fade>
            <Box>
              {/* {descriptions.map(description => ( */}
              <Box>
                <Typography variant="body2">{description}</Typography>
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
                    <Typography variant="body2">{detail}</Typography>
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
        <Grid container spacing={2}>
          {relatedProducts.map((product, index) => (
            <Grid item xs={12} lg={3}>
              <Thumbnail {...product.frontmatter} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        {/* <BlogSuggestions title="Related blogs" suggestions={[]} /> */}
      </Box>
    </Box>
  )
}

export default ProductPage
