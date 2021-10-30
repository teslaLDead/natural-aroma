import React from "react"
import { Box, Typography } from "@material-ui/core"
import Products from "../../components/Home/Products"
import Layout from "../../components/layout";
import Header from "../../components/common/Header";
const ProductsPage = ({}) => {
  return (
    <Layout>
        <Header variant="secondary"><Typography variant="h1">Oils and Aroma Products for Various Uses</Typography></Header>
      <Box>
        <Products noDescription/>
      </Box>
    </Layout>
  )
}

export default ProductsPage
