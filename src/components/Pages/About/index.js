import React from "react";
import { jsx, css } from "@emotion/react";
// import Header from "common/Header";
import Typography from "../../common/Typography";
import Header from '../../common/Header'
import { Box, Grid } from "@material-ui/core";
import { Link } from "gatsby";
import TeamSection from "./TeamSection";


const IndustriesSection = ({ industries }) => {
    return (
        <>
            {industries.map(industry =>
                <Box>
                    <Box>
                        <img src={industry.imageSrc} alt={industry.name} />
                    </Box>
                    <Box>
                        <Typography>{industry.name}</Typography>
                    </Box>
                </Box>)}
        </>
    )
}


const MajorMarkets = ({ markets }) => {
    return (
        <Grid container>
            <Grid item xs={6}>
                {markets.slice(0, markets.length / 2 + 1).map(market =>
                    <Typography>
                        {market}
                    </Typography>)}
            </Grid>
            <Grid item xs={6}>
                {markets.slice(markets.length / 2 + 1).map(market =>
                    <Typography>
                        {market}
                    </Typography>)}
            </Grid>
        </Grid>
    )
}

const AboutPage = ({title, para1, para2, para3, para4}) => {
    return (
        <div>
            <Header variant="secondary">
                <Typography variant="h1">
                    {title}
                </Typography>
            </Header>
            <Box my={5}>
                <Grid container>
                    <Grid item xs={6}>
                        {/* into section  */}
                        <Box mb={1}>
                            {/* intro heading */}
                            <Typography variant="h4">
                                About Us
                            </Typography>
                        </Box>
                        <Box>
                            {/* intro paras */}
                            <Box my={1}>
                                <Typography>
                                    {para1}
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                   {para2}
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                    {para3}
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                    {para4}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* industries that are served */}
                            <Grid container align="center">
                                <IndustriesSection industries={[]} />
                            </Grid>
                        </Box>
                        <Box>
                            {/* major market section  */}
                            <Box>
                                <Typography variant="h3">
                                    Major Markets
                                </Typography>
                            </Box>
                            <MajorMarkets markets={['Span', 'Australia']} />
                        </Box>
                        <Box>
                            <Typography>
                                <b>
                                    <Link to="/infrastructure">Learn more</Link> about our infrastructure and manufacturing facilities
                                </b>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">
                                OUR TEAM
                            </Typography>
                            <Box>
                                <Typography>
                                    We have employed a team of professionals on the basis of their qualification, experience and
                                    expertise. The teams of our various departments put in all their dedication to attain the defined
                                    objective of our firm. With the efforts of our experienced managers, dedicated workforce and
                                    knowledgeable perfumers, we have been able to satisfy the variegated demands of our clients in
                                    an efficient manner.
                                </Typography>
                                <Typography>
                                    They work in close coordination with our clients to understand their each requirement and thus,
                                    provide them suitable products at affordable prices. Owing to our unique technology, well-
                                    equipped manufacturing unit, the strong base of clients and a qualitative product range, we have
                                    acquired a renowned name in the industry. Also, our team and our strategic management are the
                                    twin pillars of strength and success of our firm.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        {/* // * image grid */}
                        {/* // TODO add image source */}
                        <Grid container>
                            <Grid item xs={6}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <img src="" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Grid container>
                        <Grid item xs={12}>
                            {/* team photo */}
                            {/* // add member list */}
                            <TeamSection members={[]} />
                        </Grid>
                    </Grid>
                </Box>

            </Box>


        </div>
    )
}

export default AboutPage