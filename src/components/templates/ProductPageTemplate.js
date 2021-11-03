import React from "react"
import Layout from "../../components/layout"
import ProductPage from "../../components/Pages/Products/ProductPage"

// sample data for a product
const productTemplate = {
  name: "Basil Oil",
  images: [
    {
      src: "https://picsum.photos/id/237/200/300",
      name: "Basil Oil",
      main: true, // for defining which images comes as the first render
    },
    {
      src: "https://picsum.photos/id/238/200/300",
      name: "Basil Oil",
    },
    {
      src: "https://picsum.photos/id/239/200/300",
      name: "Basil Oil",
    },
    {
      src: "https://picsum.photos/id/240/200/300",
      name: "Basil Oil",
    },
    {
      src: "https://picsum.photos/id/241/200/300",
      name: "Basil Oil",
    },
  ],
  details: [
    // this format can be changed
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
    {
      property: "Usage/Application",
      value: "Fragrance, Flavour, Pharma",
    },
  ],
  // description is an array to support multiple paragraphs
  descriptions: [
    `The Basil Oil or Natural Essential Oils or Aromatic Essential Oils volatile oil is obtained by steam  
    distillation from the flowering tops or the entire herb.Basil Oil(Ocimum Basillicum) contains 
    Methyl Chavicol and Linalool.The word basil comes from the Greek "basilikon" meaning royal. 
    Basil is also called 'Kings' herb.`,
  ],
  manufacturingDetails: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed.`,
  ],
}

const ProductPageTemplate = ({ pageContext }) => {
  const {
    product: { frontmatter },
  } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <ProductPage
        {...frontmatter}
        relatedProducts={pageContext.relatedProducts.filter(
          el => el.frontmatter.name !== frontmatter.name
        )}
      />
    </Layout>
  )
}

export default ProductPageTemplate
