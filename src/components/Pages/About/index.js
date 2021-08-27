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

const AboutPage = () => {
    return (
        <div>
            <Header variant="secondary">
                <Typography variant="h1">
                    Manufacturing Natural Oils and Aroma Products since <span className="underline">1995</span>
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
                                    Our company was founded in 1995 since then we have pioneered in the manufacturing of
                                    essential oils, aroma chemicals, and natural isolates. Our company products are defined by
                                    creative adaptation, strategic enhancement, revolutionary packaging, and consistent
                                    innovation.
                                    For us, product quality, prompt service and customer satisfaction are of the utmost importance.
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                    We have a state of the art manufacturing plant located in Ghaziabad with a capacity of 24
                                    metric tons. All the products manufactured here conform to stringent quality control and comply
                                    with GMP standards. Our in house laboratory is equipped with the latest type of equipments like
                                    gas chromatograph, digital polarimeter, refractometer, and density meter to ensure that quality
                                    is maintained for our customers.
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                    The continuous growth and development of our organization has enabled us to acquire a
                                    remarkable position in the industry. Our state-of-the-art facility is well equipped with all the
                                    modern machines and technologies.
                                </Typography>
                            </Box>
                            <Box my={1}>
                                <Typography>
                                    This unit enables us to process a superior quality range of products in bulk quantities at a fast
                                    production rate to satisfy the diverse requirements of our clients in a timely manner.
                                    With the help of our MD Dr. Pradeep Khandelwal our firm has acquired
                                    a strong client base and it endeavors to attain maximum client satisfaction through effective
                                    functioning on creative adaptation, strategic enhancement, revolutionary packaging and
                                    consistent innovations.
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