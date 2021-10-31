import React from "react"
import { Box, Typography, Grid } from "@material-ui/core"
import Products from "../../components/Home/Products"
import Layout from "../../components/layout"
import Header from "../../components/common/Header"
import { Helmet } from "react-helmet"
const ProductsPage = ({}) => {
  return (
    <Layout>
      <Helmet>
          <title>Products | Natural Aroma Products</title>
        </Helmet>
      <Header variant="secondary">
        <Grid item xs={12} lg={6}>
          <Typography variant="h1">
            Oils and Aroma Products for Various Uses
          </Typography>
        </Grid>
      </Header>
      <Box>
        <Products noDescription />
      </Box>
    </Layout>
  )
}

export default ProductsPage
