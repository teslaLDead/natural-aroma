import React from "react";
import { jsx, css } from "@emotion/react";
import SecondaryButton from "common/SecondaryButton";
import {Link} from "gatsby"
import Typography from "../common/Typography";


const ProductThumbnail = ({ image, title, link }) => {
    return (
        <div>
            <Link to={link}>
                <div>
                    <img src={image} alt={title} />
                    <Typography variant="p">{title}</Typography>
                </div>
            </Link>
        </div>
    )
}

const ProductSection = ({ title, description, link, popularProducts }) => {
    return (
        <div>
            <div>
                <h3>
                    {title}
                </h3>
                <Typography variant="p">
                    {description}
                </Typography>
                <SecondaryButton title={"View " + title} to={link} />
            </div>
            <div>
                <Typography variant="p">Popular {title}</Typography>
                <div>
                    {popularProducts.map(product => <ProductThumbnail {...product} />)}
                </div>
            </div>
        </div>
    )
}

export default ProductSection