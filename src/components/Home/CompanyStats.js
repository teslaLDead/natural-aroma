import React, { useState, useEffect } from "react"
import { jsx, css } from "@emotion/react"
import Fade from "react-reveal/Fade"
import { Grid } from "@mui/material"


// todo - add animation
const style = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: 150,
    marginBottom: 150,
  },
  stat: {
    fontFamily: "AxiformaBlack",
    fontSize: 38,
  },
  title: {
    fontFamily: "AxiformaBlack",
    fontSize: 16,
  },
  statItem: {
    justifySelf: "center",
  },
}

  const stats = css({
    marginTop: 100,
    marginBottom: 100,
    ['@media (max-width:600px)'] : {
      marginTop: 50,
    marginBottom: 50,
    }
  })


// todo - connect with the data layer
export default function ComapnyStats({ clients, products }) {
  const [clientsCounter, setClientsCounter] = useState(0)
  const [productsCounter, setProductsCounter] = useState(0)
  const [qualityCounter, setQualityCounter] = useState(0)
  useEffect(() => {
    if (clientsCounter < clients && clientsCounter > 0)
      setTimeout(() => {
        setClientsCounter(clientsCounter + 1)
      }, 1)
  }, [clientsCounter])
  useEffect(() => {
    if (productsCounter < products && productsCounter > 0)
      setTimeout(() => {
        setProductsCounter(productsCounter + 1)
      }, 20)
  }, [productsCounter])
  useEffect(() => {
    if (qualityCounter < 100 && qualityCounter > 0)
      setTimeout(() => {
        setQualityCounter(qualityCounter + 1)
      }, 10)
  }, [qualityCounter])

  return (
    <Grid container justifyContent="space-evenly">
      <Grid
        item
        xs={12}
        lg={3}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        css={stats}
      >
        <Fade onReveal={() => setClientsCounter(1)} delay={100} duration={2000}>
          <p css={css(style.stat)}>{clientsCounter}+</p>
        </Fade>
        <Fade delay={500} duration={2500}>
          <p css={css(style.title)}>SATISFIED CLIENTS</p>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        css={stats}
      >
        <Fade delay={100} duration={2000}>
          <p css={css(style.stat)}>{productsCounter}+</p>
        </Fade>
        <Fade
          onReveal={() => setProductsCounter(1)}
          delay={500}
          duration={2500}
        >
          <p css={css(style.title)}>TOTAL PRODUCTS</p>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        css={stats}
      >
        <Fade onReveal={() => setQualityCounter(1)} delay={100} duration={2000}>
          <p css={css(style.stat)}>{qualityCounter}%</p>
        </Fade>
        <Fade delay={500} duration={2500}>
          <p css={css(style.title)}>CUSTOMER SATISFACTION</p>
        </Fade>
      </Grid>
    </Grid>
  )
}
