import React from "react"
import { Grid, TextField, Box, Button, makeStyles } from "@material-ui/core"
import Typography from "common/Typography"

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 150,
  },
  container: {
    margin: "100px 0",
  },
})

const ContactPage = ({}) => {
  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container}>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h1">Contact Us</Typography>
              <Typography>Reach out to us for any inquiry</Typography>
            </Box>
            <Box>
              <Box>
                <TextField
                  variant="outlined"
                  label="Full Name"
                  required
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  label="Email"
                  required
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  label="Mobile No."
                  required
                  fullWidth
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  label="Message"
                  multiline
                  rows="5"
                  required
                  fullWidth
                />
              </Box>
              <Box>
                <Button>Submit</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              {/* integrate google map here */}
              {/* for the green box psedu selector will be used */}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          {/* the child components of these grid will require max width property */}
          <Grid item xs={4}>
            <Box>
              <Box>
                <img src="" alt="natural aroma mobile number" />
              </Box>
              <Box>
                <Typography>
                  <b>+91 9891102691</b>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box>
                <img src="" alt="natural aroma mobile number" />
              </Box>
              <Box>
                <Typography>
                  <b>info@naturalaroma.co</b>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box>
                <img src="" alt="natural aroma mobile number" />
              </Box>
              <Box>
                <Typography>
                  G-22, Udyog Kunj, Industrial Area Ghaziabad, Uttar Pradesh
                  201009
                </Typography>
              </Box>
              {/* add line here using pseduo selector */}
              <Box>
                <Typography>
                  485A/12A, Dilshad Garden, Industrial Area, G.T Road,
                  Delhi-110095
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContactPage
