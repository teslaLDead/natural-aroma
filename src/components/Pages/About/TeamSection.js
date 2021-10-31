import React from "react"
// import Typography from "../../common/Typography"
import { Link } from "gatsby"
import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Fade from "react-reveal"

const useStyles = makeStyles({
  imgContainer: {
    borderRadius: 200,
    maxHeight: 200,
    overflow: "hidden",
  },
})
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
  const classes = useStyles()
  return (
    <Box mx={6} py={1}>
      <Box my={2} className={classes.imgContainer}>
        <Fade delay={200}>
          <img
            src={memberImage}
            alt={memberName.concat(" ").concat(memberDesignation)}
          />
        </Fade>
      </Box>
      <Link to={link}>
        <Fade delay={400}>
          <Box my={2}>
            <Typography variant="h4" component="p" style={{textTransform:'capitalize', color:'black'}}>
              <b>{memberName}</b>
            </Typography>
            <Typography style={{textTransform:'uppercase'}}>{memberDesignation}</Typography>
          </Box>
        </Fade>
      </Link>
    </Box>
  )
}

export default TeamSection
