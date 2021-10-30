import React from "react"
import { css } from "@emotion/react"
import ProductSection from "./ProductSection"
import Typography from "common/Typography"
import basil from "../../images/basil.jpg"
import { Box, Grid } from "@material-ui/core"
import Fade from "react-reveal/Fade"
const products = () => {
  return [
    {
      title: "Essential Oils",
      description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
      link: "/essential-oils",
      popularProducts: [
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
      ],
    },
    {
      title: "Essential Oils",
      description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
      link: "/essential-oils",
      popularProducts: [
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
      ],
    },
    {
      title: "Essential Oils",
      description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
      link: "/essential-oils",
      popularProducts: [
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
      ],
    },
    {
      title: "Essential Oils",
      description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
      link: "/essential-oils",
      popularProducts: [
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
        {
          image: basil,
          title: "Basil Oil",
          link: "/basil-oil",
        },
      ],
    },
  ]
}
export default function Products({ noDescription }) {
  return (
    <div
      css={css({
        marginTop: 150,
        marginBottom: 150,
      })}
    >
      <div
        css={css({
          textAlign: "center",
          display: noDescription ? 'none' : "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 100,
          marginBottom: 150,
        })}
      >
        <Fade delay={400}>
          <Typography variant="h2">PRODUCTS</Typography>
        </Fade>
        <Fade delay={600}>
          <Grid container justifyContent="center">
            <Typography
              variant="p"
              style={{
                maxWidth: "55%",
                textAlign: "center",
              }}
              // todo add responsiveness
            >
              We are manufacturing <b>Natural Essential Oils</b>,{" "}
              <b>Aroma Oils </b>, <b>Natural Isolates</b>, and{" "}
              <b>Reconstituted Oils</b> on a large scale. Our products are
              exported across the globe and we have firm presence in Europe,
              Asia, North America, Middle East etc. and continuing to expand
              through out world by serving products of International standards.
            </Typography>
          </Grid>
        </Fade>
      </div>
      <div>
        {products().map((product, ind) => (
          <ProductSection reversed={ind % 2 !== 0} {...product} />
        ))}
      </div>
    </div>
  )
}
