import React from "react";
import { jsx, css } from "@emotion/react";
import SecondaryButton from "common/SecondaryButton";
import { Link } from "gatsby"
import Typography from "../common/Typography";
// import {Typography} from "@material-ui/core";
import basil from '../../images/basil.jpg';
import Button from "common/Button";

import { Box } from "@material-ui/core"


const style = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12,1fr)',
        // todo - add media query for different screen sizes
        marginTop:150,
        marginBottom:150,
    },
    reversedGrid: {
        display: 'grid',
        background: 'red'
    },
    productCategory: {
        gridColumnStart: 2,
        gridColumnEnd: 6
    },
    popularProducts: {
        gridColumnStart: 7,
        gridColumnEnd: 11,
        "& .products": {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)'
        }
    },
    productCategoryReversed: {
        gridColumnStart: 7,
        gridColumnEnd: 12
    },
    popularProductsReversed: {
        gridColumnStart: 2,
        gridColumnEnd: 6,
        "& .products": {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)'
        }
    },
    product: {
        textAlign: 'center'
    },
    productImage: {
        width: 130,
        height: 130,
        display: 'flex',
        overflow: 'hidden',
        borderRadius: 200,
        justifyContent: 'center',
        border: '4px solid #40D068',
        alignItems: 'stretch',
    },
    productThumbnail:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginLeft:20,
        marginRight:20
    }
}

const ProductThumbnail = ({ image, title, link, ind }) => {
    return (
        <Box  css={css(style.product)}>
            <Link to={link}>
                <Box css={css(style.productThumbnail)}>
                    <Box mb={2} css={css(style.productImage)}>
                        <img src={basil} alt={title} />
                       
                    </Box>
                    <Typography variant="p"><b>{title}</b></Typography>
                    
                </Box>
            </Link>
        </Box>
    )
}

const ProductSection = ({ title, description, link, popularProducts, reversed }) => {
    return (
        reversed ? (
            <Box py={5} css={css(style.grid)}>
               
                <Box css={css(style.popularProductsReversed)}>
                    <Box>
                        <Typography variant="h4">Popular {title}</Typography>
                    </Box>
                    <div className="products">
                        {popularProducts.map((product, ind) => <ProductThumbnail ind={ind} {...product} />)}
                    </div>
                </Box>
                <div css={css(style.productCategoryReversed)}>
                    <Typography variant="h3">
                        {title}
                    </Typography>
                    <Typography variant="p">
                        {description}
                    </Typography>
                    <Box mt={3}>
                        <Button variant="secondary" title={"View " + title} to={link} />
                    </Box>
                </div>
            </Box>
        )
            : (<Box  css={css(style.grid)}>
                <div css={css(style.productCategory)}>
                    <Typography variant="h3">
                        {title}
                    </Typography>
                    <Typography variant="p">
                        {description}
                    </Typography>
                    <Box mt={3}>
                        <Button variant="secondary" title={"View " + title} to={link} />
                    </Box>
                </div>
                <Box css={css(style.popularProducts)}>
                    <Box>
                        <Typography variant="h4">Popular {title}</Typography>
                    </Box>
                    <div className="products">
                        {popularProducts.map((product, ind) => <ProductThumbnail ind={ind} {...product} />)}
                    </div>
                </Box>
            </Box>
            )
    )

}

export default ProductSection