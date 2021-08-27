import React from "react";
import Typography from "common/Typography";
import { Link } from "gatsby";
import { Box, Grid } from "@material-ui/core";

const TeamSection = ({ members }) => {
    return (
        <Grid container align="center" justifyContent="center">
            {members.map((member) => <MemberProfile {...member} />)}
        </Grid>
    )
}

const MemberProfile = ({ name, designation, image, link }) => {
    return (
        <Box>
            <Box>
                <img src={image} alt={name.concat(' ').concat(designation)} />
            </Box>
            <Link to={link}>
                <Box>
                    <Typography>
                        {name}
                    </Typography>
                    <Typography>
                        {link}
                    </Typography>
                </Box>
            </Link>
        </Box>

    )
}

export default TeamSection;