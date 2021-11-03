import React from "react"
// import Typography from "../../common/Typography"
import { Link } from "gatsby"
import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Fade from "react-reveal"
import {css} from "@emotion/react"

const imgContainer = {
  borderRadius: 200,
  maxHeight: 200,
  overflow: "hidden",
}
const TeamSection = ({ members }) => {
  return (
    <Box my={3} py={3} mt={6}>
      <Fade>
        <Typography style={{ textAlign: "center" }} variant="h3">
          Meet Our Team
        </Typography>
      </Fade>
      <Grid container align="center" justifyContent="center">
        {members.map(({ member }) => (
          <MemberProfile {...member} />
        ))}
      </Grid>
    </Box>
  )
}

const MemberProfile = ({
  memberName,
  memberDesignation,
  memberImage,
  link,
}) => {
  // const classes = useStyles()
  return (
    <Box mx={6} py={1}>
      <Box my={2} className={css(imgContainer)}>
        <Fade delay={200}>
          <img
          css={css({
            borderRadius: 100,
            transform:'scale(1)',
            transition:'all 0.8s',
            "&:hover":{
              transform:'scale(1.1)'
            }
          })}
            src={memberImage}
            alt={memberName.concat(" ").concat(memberDesignation)}
          />
        </Fade>
      </Box>
      <Link to={link}>
        <Fade delay={400}>
          <Box my={2}>
            <Typography
              variant="h4"
              component="p"
              style={{ textTransform: "capitalize", color: "black" }}
            >
              <b>{memberName}</b>
            </Typography>
            <Typography style={{ textTransform: "uppercase" }}>
              {memberDesignation}
            </Typography>
          </Box>
        </Fade>
      </Link>
    </Box>
  )
}

export default TeamSection
