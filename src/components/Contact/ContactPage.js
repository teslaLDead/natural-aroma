import React, { useState } from "react"
import { Grid, TextField, Box, Button } from "@mui/material"
import Typography from "common/Typography"
import { Helmet } from "react-helmet"
import { Parallax } from "react-scroll-parallax"
import { jss, css } from "@emotion/react"

const mainContainer = css({
  marginTop: 150,
  marginBottom: 120,
})
const container = css({
  margin: "100px 0",
})
const contactInfoContainer = css({
  display: "flex",
  alignItems: "center",
  ["@media (max-width: 680px)"]: {
    justifyContent: "center",
  },
})
const secondAddress = css({
  borderLeft: "0.5px solid red",
})
const mapContainer = css({
  position: "relative",
})
const mapStyleElement = css({
  top: -50,
  right: -50,
  zIndex: -1,
  position: "absolute",
  width: "50%",
  height: "80%",
  background: "#40D068",
})
const map = css({
  // marginTop: 70,
  ["@media (max-width: 680px)"]: {
    marginTop: 100,
  },
})
const submitBtn = css({
  width: "100%",
  background: "#40D068",
  color: "white",
  fontWeight: "bold",
  minHeight: 50,
  "&:hover": {
    background: "#37E166",
  },
})
const address = css({
  display: "flex",
  width: "90%",
  "& p": {
    margin: "0px 15px",
  },
})
const heroFont = css({
  fontSize: 36,
  fontWeight: "bold",
})
const textField = css({
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "& fieldset": {
      borderColor: "#ADF1F3",
    },
    "&:hover fieldset": {
      borderColor: "#ADF1F3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#40D068",
    },
  },
  "& label.Mui-focused": {
    color: "#40D068",
  },
  "& label": {
    color: "#5E5C5C",
    fontSize: 15,
    fontWeight: "bold",
    // opacity:0.7
  },
})

const ContactPage = ({}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('message',message)
    console.log(formData.getAll('message'))
    fetch('/',{
      method:"POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData).toString()
    }).then(()=>console.log('form successfully submited')).catch(console.error)
  }
  return (
    <Box css={mainContainer}>
      <Helmet>
        <title>Contact Us | Natural Aroma Products</title>
      </Helmet>
      <Box css={container}>
        <Grid container>
          <Grid item lg={6} xs={12}>
            <Box mb={2}>
              <Typography variant="h1">Contact Us</Typography>
              <Typography>Reach out to us for any inquiry</Typography>
            </Box>
            <form method="POST" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
              <Box>
                <Box my={3}>
                  <TextField
                    value={name}
                    name="name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    css={textField}
                    variant="outlined"
                    label="Full Name"
                    required
                    fullWidth
                  />
                </Box>
                <Box my={3}>
                  <TextField
                    value={email}
                    name="email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    css={textField}
                    variant="outlined"
                    label="Email"
                    required
                    fullWidth
                  />
                </Box>
                <Box my={3}>
                  <TextField
                    value={phone}
                    name="phone"
                    type="text"
                    onChange={e => setPhone(e.target.value)}
                    css={textField}
                    variant="outlined"
                    label="Mobile No."
                    required
                    fullWidth
                  />
                </Box>
                <Box my={3}>
                  <TextField
                    value={message}
                    name="message"
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                    css={textField}
                    variant="outlined"
                    label="Message"
                    multiline
                    rows="5"
                    required
                    fullWidth
                  />
                </Box>
                <Box>
                  <Button type="submit" css={submitBtn}>
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box mx={2} css={mapContainer}>
              <Box css={mapStyleElement} />
              <Box css={map}>
                <Parallax y={[-20, 20]}>
                  <img src="https://ucarecdn.com/c491b051-3c2b-4e7e-900b-1218cb10b9ad/googlemaps.png" />
                </Parallax>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {/* the child components of these grid will require max width property */}
          <Grid item xs={12} lg={4}>
            <Box css={contactInfoContainer}>
              <Box>
                <img
                  src="https://ucarecdn.com/33abd8a5-5544-48cb-b4d3-fc079103fe14/-/preview/60x60/"
                  alt="natural aroma mobile number"
                />
              </Box>
              <Box>
                <Typography>+91 8860350140</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box css={contactInfoContainer}>
              <Box>
                <img
                  src="https://ucarecdn.com/04d10dd1-98b7-4c0d-8656-95d7c7129b67/-/preview/60x60/"
                  alt="natural aroma mobile number"
                />
              </Box>
              <Box ml={2}>
                <Typography>info@naturalaroma.co</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box css={contactInfoContainer}>
              <Box>
                <img
                  src="https://ucarecdn.com/a2e11d95-e5b2-45ec-88a8-39d3d0acea66/-/preview/60x60/"
                  alt="natural aroma mobile number"
                />
              </Box>
              <Box css={address}>
                <Typography>
                  G-22, Udyog Kunj, Industrial Area Ghaziabad, Uttar Pradesh
                  201009
                </Typography>
                <Typography>
                  485A/12A, Dilshad Garden, Industrial Area, G.T Road,
                  Delhi-110095
                </Typography>
              </Box>
              {/* add line here using pseduo selector */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactPage
