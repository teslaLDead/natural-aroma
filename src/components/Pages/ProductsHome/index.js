import React from "react";
import Header from "common/Header"
import Typography from "common/Typography";
import { Grid, Box, makeStyles } from "@material-ui/core";
import ProductSection from "../../Home/ProductSection";
import basil from '../../../images/basil.jpg';
import BlogSuggestions from "../../Blog/BlogSuggestions";

const useStyles = makeStyles({
    productContainer:{
       "& > div":{
           marginTop:0
       }
    }
})

const products = () => {
    return [{
        title: "Essential Oils",
        description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
        link: '/essential-oils',
        popularProducts: [
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            }
        ]

    },
    {
        title: "Essential Oils",
        description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
        link: '/essential-oils',
        popularProducts: [
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            }
        ]

    },
    {
        title: "Essential Oils",
        description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
        link: '/essential-oils',
        popularProducts: [
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            }
        ]

    },
    {
        title: "Essential Oils",
        description: `Essential oil is a concentrated hydrophobic liquid containing volatile 
        chemical compounds from plants. Essential oils are also known as volatile oils, 
        ethereal oils, aetherolea, or simply as the oil of the plant from which they 
        were extracted, such as oil of clove.`,
        link: '/essential-oils',
        popularProducts: [
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            },
            {
                image: basil,
                title: 'Basil Oil',
                link: '/basil-oil'
            }
        ]

    }]
}

const ProductsHome = ({ }) => {
    const classes = useStyles()
    return (
      <>
            <Header variant="secondary">
                <Typography variant="h1">
                    <Grid container>
                        <span>Oils and Aroma Products</span>
                        <span>for Various Uses</span>
                    </Grid>
                </Typography>
            </Header>
            <Box className={classes.productContainer}>
                {products().map((product, ind) => <ProductSection reversed={ind % 2 !== 0} {...product} />)}
            </Box>
            <Box>
                {/* // todo connect this to cms */}
                <BlogSuggestions title="Product blogs" suggestions={[]}/>
            </Box>
     </>
    )
}

export default ProductsHome