import React from "react";
import { jsx, css } from "@emotion/react";
import { Box, Grid } from "@material-ui/core";
import Typography from "common/Typography";


const style = {
    heroSection: {

    }
}

const sampleContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nulla ipsum. Donec pretium libero quis orci luctus, sit amet gravida diam scelerisque. 
    `

const Quality = ({ img, title, content }) => {
    return (
        <Grid item xs={6}>
            <Grid container>
                <Grid xs={3}>
                    <img src={img} alt="" />
                </Grid>
                <Grid xs={9}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="p">{content}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ComapnyQualities = ({ }) => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={6}>
                    <div></div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <Typography>WHY CHOOSE US</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Quality img="" title="Utmost Quality" content={sampleContent} />
                        <Quality img="" title="Optimum Price" content={sampleContent} />
                        <Quality img="" title="Wide Variety" content={sampleContent} />
                        <Quality img="" title="Customer Oriented" content={sampleContent} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ComapnyQualities