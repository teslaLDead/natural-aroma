import React from "react"
import Header from "common/Header"
import Typography from "common/Typography"
import { Grid, Box } from "@material-ui/core"
import Facilities from "./Facilities"

const Infrastructure = () => {
  return (
    <div>
      <Header variant="secondary">
        <Typography variant="h1">
          <Grid container>
            <span>World Class Facilities</span>
            <span>for Manufacturing & Exporting</span>
          </Grid>
        </Typography>
      </Header>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h3">Our Infrastructure</Typography>
            </Box>
            <Box my={2} mt={1}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
            <Box my={3}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
            <Box mt={5} style={{ marginTop: 100 }}>
              <Typography variant="h3">Quality Control</Typography>
            </Box>
            <Box my={2}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
            <Box my={2}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            {/* // * image section  */}
            {/* // todo add images */}
            <Box
              container
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              <Box m={1}>
                <img src="https://picsum.photos/id/1/600" alt="" />
              </Box>
              <Box m={1}>
                <img src="https://picsum.photos/id/2/600" alt="" />
              </Box>
              <Box m={1}>
                <img src="https://picsum.photos/id/3/600" alt="" />
              </Box>
              <Box m={1}>
                <img src="https://picsum.photos/id/4/600" alt="" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ marginTop: 100 }}>
        <Grid container>
          <Grid items xs={6}>
            <Grid container>
              <Grid item xs={8}>
                <Box m={1}>
                  <img src="https://picsum.photos/id/200/600" alt="" />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box m={1}>
                  <img src="https://picsum.photos/id/220/600" alt="" />
                </Box>
                <Box m={1}>
                  <img src="https://picsum.photos/id/220/600" alt="" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid items xs={5}>
            <Box>
              <Typography variant="h3">Certificates and Awards</Typography>
            </Box>
            <Box my={2}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
            <Box my={6}>
              <Grid container>
                {[
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                  "https://picsum.photos/id/220/100",
                ].map(image => (
                  <Box m={1} mr={2}>
                    <img src={image} alt="" />
                  </Box>
                ))}
              </Grid>
            </Box>
            <Box my={2}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare arcu odio ut sem nulla pharetra diam sit. Tristique risus
                nec feugiat in. Turpis egestas maecenas pharetra convallis.
                Lobortis feugiat vivamus at augue.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ marginTop: 100 }}>
        <Typography variant="h3">Manufacturing Facilities</Typography>
        <Box style={{ display: "flex", overflow: "hidden" }}>
          {Array.apply(null, Array(6)).map( (src, index) => (
            <Box m={1} style={{ minWidth: 300, maxWidth: 300 }}>
              <img src={`https://picsum.photos/id/12${index}/600`} />
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  )
}

export default Infrastructure
