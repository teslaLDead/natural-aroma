import React from 'react';
import Button from "common/Button";
import Typography from 'common/Typography';
import {Link} from "gatsby";
import {Box, Grid} from "@material-ui/core";

// todo this will require some UX changes due to product name size
const Thumbnail = ({imageSrc, link, name}) => {
    return(
        <Box>
            <Box>
                <img src={imageSrc} alt={name} />
            </Box>
            <Grid container align="center">
                {/* need to fix this for bigger names like lavendar oil */}
                <Typography>{name}</Typography>
                <Button variant="secondary" title="View Product" link={link} />
            </Grid>
        </Box>
    )
}

export default Thumbnail;