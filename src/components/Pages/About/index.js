import React from "react";
import { jsx, css } from "@emotion/react";
// import Header from "common/Header";
import Typography from "../../common/Typography";
import Header from '../../common/Header'

const AboutPage = () => {
    return (
        <div>
            <Header variant="secondary">
                <Typography variant="h1">
                    Manufacturing Natural Oils and Aroma Products since <span className="underline">1995</span>
                </Typography>
            </Header>
            <div>

            </div>
        </div>
    )
}

export default AboutPage