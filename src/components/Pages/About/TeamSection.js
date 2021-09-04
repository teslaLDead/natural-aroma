import React from "react"
import Typography from "../../common/Typography"
import { Link } from "gatsby"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

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
      <Typography style={{textAlign:"center"}} variant="h3">Meet Our Team</Typography>
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
        <img
          src={memberImage}
          alt={memberName.concat(" ").concat(memberDesignation)}
        />
      </Box>
      <Link to={link}>
        <Box my={2}>
          <Typography>{memberName}</Typography>
          <Typography>{memberDesignation}</Typography>
        </Box>
      </Link>
    </Box>
  )
}

export default TeamSection
