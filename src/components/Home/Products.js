import React from "react"
import { css } from "@emotion/react"
import ProductSection from "./ProductSection"
// import Typography from "common/Typography"
import basil from "../../images/basil.jpg"
import { Box, Grid, Typography } from "@mui/material"
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
          title: "Spearmint Oil",
          link: "/spearmint-oil",
        },
        {
          image: basil,
          title: "Peppermint Oil",
          link: "/peppermint-oil",
        },
      ],
    },
    {
      title: "Reconstituted Oils",
      description: `These oils are made by a method to recreate the fragrance of expensive essential oils or absolutes completely from isolates and synthetic constituents. These kinds of reconstituted oils are used in functional perfumery to lower the cost of production of perfumes.These oils cannot be used for therapeutic purpose as the lack certain trace compounds.
      .`,
      link: "/reconstituted-oil",
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
      title: "Aroma Chemicals",
      description: `Aroma chemicals are synthetic aromas. Virtually all perfumes on the market are comprised of aroma chemicals. With the exception of a small hand full of artisan perfumes, derived from natural products. Individually aroma chemicals are bits and pieces of an aroma, that make up unique perfumes and flavors.
      `,
      link: "/aroma-oils",
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
      title: "Natural Isolates",
      description: `Natural isolates are single odor molecules that are extracted from natural raw materials using distillation techniques. They are obtained from botanicals such as rose, mint, and citrus. These isolated aromatics can add unique character and lift to natural perfumes.
      `,
      link: "/natural-isolates",
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
          display: noDescription ? "none" : "flex",
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
            <Grid item lg={6} xs={12}>
              <Typography
                align="center"
                // todo add responsiveness
              >
                We are manufacturing <b>Natural Essential Oils</b>,{" "}
                <b>Aroma Oils </b>, <b>Natural Isolates</b>, and{" "}
                <b>Reconstituted Oils</b> on a large scale. Our products are
                exported across the globe and we have firm presence in Europe,
                Asia, North America, Middle East etc. and continuing to expand
                through out world by serving products of International
                standards.
              </Typography>
            </Grid>
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
